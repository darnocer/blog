import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatterMultiple } from '@/lib/mdx'
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
  const posts = await getAllFilesFrontMatterMultiple(['blog'])
  // const posts = await getAllFilesFrontMatter('tips')
  const tags = await getAllTags('tips', 'blog')

  return { props: { posts, tags, homeContent } }
}

export default function Home({ posts, tags, homeContent }) {
  const { mdxSource, frontMatter } = homeContent
  const DEFAULT_LAYOUT = 'ContentLayout'
  console.log(tags)
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
      <RecentPosts posts={posts} heading={pageContent.home.tipHeading} />
      <TagList tags={tags} heading={pageContent.home.tagHeading} />

      {/* {siteMetadata.newsletter.provider !== '' && <NewsletterForm />} */}
    </>
  )
}
