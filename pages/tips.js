import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
// import ListLayout from '@/layouts/ListLayout'
import TileLayout from '@/layouts/TileLayout'
import { PageSEO } from '@/components/SEO'

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
      <PageSEO title={`Tips - ${siteMetadata.author}`} description={siteMetadata.description} />
      <TileLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        directory="tips"
        title="Tips"
      />
    </>
  )
}
