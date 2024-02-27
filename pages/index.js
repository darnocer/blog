import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/getAllTags'

import RecentPosts from '@/layouts/RecentPosts'
import TagList from '@/components/TagList'
import Heading from '@/components/Heading'
import SectionContainer from '@/components/SectionContainer'
import NewsletterForm from '@/components/NewsletterForm'

import pageContent from '@/data/pageContent'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getMdxContent } from '@/lib/mdx'

export async function getStaticProps() {
  // const homeContent = await getDataFile('content', ['home'])
  const homeContent = await getMdxContent('data', 'content', 'home')
  const posts = await getAllFilesFrontMatter(['blog'])
  // const posts = await getAllFilesFrontMatter('tips')
  const tipsTags = await getAllTags('tips')
  const blogTags = await getAllTags('blog')

  return { props: { posts, tipsTags, blogTags, homeContent } }
}

export default function Home({ posts, tipsTags, blogTags, homeContent }) {
  const { mdxSource, frontMatter } = homeContent
  const DEFAULT_LAYOUT = 'ContentLayout'

  return (
    <>
      <PageSEO description={siteMetadata.description} />
      <SectionContainer>
        <Heading text={pageContent.home.title} level="h1" />
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      </SectionContainer>
      <RecentPosts posts={posts} directory="blog" heading={pageContent.home.tipHeading} />
      {/* <SectionContainer>
        <Heading level="h2" text="Topics" />

        <TagList
          tags={blogTags}
          heading={pageContent.home.blogTagsHeading}
          level="h3"
          border="noBorder"
        />
        <TagList
          tags={tipsTags}
          heading={pageContent.home.tipsTagsHeading}
          level="h3"
          border="noBorder"
        />
      </SectionContainer> */}
      {/* 
      {siteMetadata.newsletter.provider !== '' && (
        <NewsletterForm
          title={pageContent.newsletter.heading}
          description={pageContent.newsletter.description}
        />
      )} */}
    </>
  )
}
