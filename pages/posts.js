import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatterMultiple } from '@/lib/mdx'
import pageContent from '@/data/pageContent'

import ListLayout from '@/layouts/ListLayout'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatterMultiple(['blog', 'tips'])
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Posts({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`All Posts | ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={pageContent.posts.title}
        description={pageContent.posts.description}
        directory="posts"
      />
    </>
  )
}
