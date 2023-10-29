import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import formatDate from '@/lib/utils/formatDate'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import ListLayoutSimple from '@/layouts/ListLayoutSimple'
import NewsletterForm from '@/components/NewsletterForm'
import TagList from '@/components/TagList'

const DEFAULT_LAYOUT = 'HomeLayout'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tips = await getAllFilesFrontMatter('tips')
  const homePage = await getFileBySlug('content', ['home'])
  const tags = await getAllTags('blog')

  return { props: { posts, homePage, tags, tips } }
}

export default function Home({ posts, homePage, tips, tags }) {
  const { mdxSource, frontMatter } = homePage
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      /> */}
      {/* <TagList tags={tags} /> */}
      <ListLayoutSimple posts={posts} directory="blog" />
      <ListLayoutSimple posts={tips} directory="tips" />
      {/* {siteMetadata.newsletter.provider !== '' && <NewsletterForm />} */}
    </>
  )
}
