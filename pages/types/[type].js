import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTypes } from '@/lib/getAllTypes'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

import pageContent from '@/data/pageContent'

const root = process.cwd()

export async function getStaticPaths() {
  const types = await getAllTypes()

  return {
    paths: Object.keys(types).map((type) => ({
      params: {
        type,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter()
  const filteredPosts = allPosts.filter((post) => {
    return post.draft !== true && kebabCase(post.content_type) === params.type
  })

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `types/${params.type}/feed.xml`)
    const rssPath = path.join(root, 'public', 'types', params.type)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, type: params.type } }
}

export default function Type({ posts, type }) {
  const title = type
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  // const description = pageContent.type.description(title)

  return (
    <>
      <TagSEO title={`${title} Posts`} description={`${title} tags | ${siteMetadata.author}`} />
      <ListLayout posts={posts} title={title} />
    </>
  )
}
