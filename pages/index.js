import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatter } from '@/lib/mdx'
// import { getAllTags } from '@/lib/getAllTags'

import RecentPosts from '@/layouts/RecentPosts'
// import SectionContainer from '@/components/SectionContainer'
import NewsletterForm from '@/components/NewsletterForm'

import pageContent from '@/data/pageContent'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getSectionContent } from '@/lib/mdx'

export async function getStaticProps() {
  const homeContent = await getSectionContent('home')
  const posts = await getAllFilesFrontMatter()

  return { props: { posts, homeContent } }
}

export default function Home({ posts, homeContent }) {
  const { mdxSource, frontMatter } = homeContent
  const DEFAULT_LAYOUT = 'ContentLayout'

  return (
    <>
      <PageSEO description={siteMetadata.description} />

      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <RecentPosts posts={posts} heading="Recent Posts" />

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
