import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import pageContent from '@/data/pageContent'

import SectionContainer from '@/components/layout/SectionContainer'
import RecentSnippets from '@/layouts/RecentSnippets'
import Heading from '@/components/headings/Heading'

export const POSTS_PER_PAGE = 10
const PAGE_TITLE = 'Musings'
const PAGE_DESCRIPTION = ''

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter()
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <SectionContainer padding='large' container='small'>
        <Heading level='h1' text='Musings' />
        <RecentSnippets posts={posts} />
      </SectionContainer>
    </>
  )
}
