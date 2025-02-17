import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getMdxContent } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'

import SectionContainer from '@/components/layout/SectionContainer'
import RecentSnippets from '@/components/listings/RecentSnippets'
import RecentPosts from '@/components/listings/RecentPosts'

import { getAllFilesFrontMatter } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PageLayout'
const PAGE_TITLE = 'Writing'

export async function getStaticProps() {
  const content = await getMdxContent('data', 'content', ['writing'])
  const posts = await getAllFilesFrontMatter()
  return { props: { content, posts } }
}

export default function Writing({ content, posts }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <PageSEO title={PAGE_TITLE} description='test' />

      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />

      <SectionContainer padding='large' container='small'>
        <RecentSnippets posts={posts} heading='Latest Musing' numPosts={1} />
      </SectionContainer>

      <SectionContainer padding='medium' container='small'>
        <RecentPosts posts={posts} heading='Shorter Reflections' typeFilter='musings' />
      </SectionContainer>

      <SectionContainer padding='medium' container='small'>
        <RecentPosts posts={posts} heading='Longer Posts' typeFilter='!musings' />
      </SectionContainer>
    </>
  )
}
