import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatter } from '@/lib/mdx'

import RecentPosts from '@/layouts/RecentPosts'
import RecentSnippets from '@/layouts/RecentSnippets'
import NewsletterForm from '@/components/NewsletterForm'
import CardGrid from '@/components/CardGrid'
import SectionContainer from '@/components/SectionContainer'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getSectionContent } from '@/lib/mdx'

const PAGE_TITLE = 'Home'

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
      <PageSEO title={PAGE_TITLE} description={siteMetadata.description} />

      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <SectionContainer padding='large' container='small'>
        <CardGrid heading='My Work' />
      </SectionContainer>

      <SectionContainer padding='medium' container='small'>
        <RecentPosts posts={posts} heading='Recent Posts' typeFilter='!musings' />
      </SectionContainer>

      <SectionContainer padding='large' container='small'>
        <RecentSnippets posts={posts} heading='Microblog' />
      </SectionContainer>

      {/* {siteMetadata.newsletter.provider !== '' && (
        <NewsletterForm
          title={pageContent.newsletter.heading}
          description={pageContent.newsletter.description}
        />
      )} */}
    </>
  )
}
