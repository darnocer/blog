import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'

import RecentPosts from '@/layouts/RecentPosts'
import TagList from '@/components/TagList'
import Heading from '@/components/Heading'
import SectionContainer from '@/components/SectionContainer'

import pageContent from '@/data/pageContent'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getDataFile } from '@/lib/mdx'

export async function getStaticProps() {
  const homeContent = await getDataFile('content', ['home'])
  // const allPosts = await getAllFilesFrontMatterMultiple(['blog', 'tips'])
  const tips = await getAllFilesFrontMatter('tips')
  const tags = await getAllTags('tips', 'blog')

  return { props: { tips, tags, homeContent } }
}

export default function Home({ tips, tags, homeContent }) {
  const { mdxSource, frontMatter } = homeContent
  const DEFAULT_LAYOUT = 'ContentLayout'
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <SectionContainer>
        <Heading text={pageContent.home.title} level="h1" />
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      </SectionContainer>
      <TagList tags={tags} heading={pageContent.home.tagHeading} />
      <RecentPosts posts={tips} directory="tips" heading={pageContent.home.tipHeading} />
      {/* {siteMetadata.newsletter.provider !== '' && <NewsletterForm />} */}
    </>
  )
}
