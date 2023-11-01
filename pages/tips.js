import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import pageContent from '@/data/pageContent'

import TileLayout from '@/layouts/TileLayout'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('tips')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Tips({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Tips | ${siteMetadata.author}`} description={siteMetadata.description} />
      <TileLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        directory="tips"
        title={pageContent.tips.title}
        description={pageContent.tips.description}
      />
    </>
  )
}
