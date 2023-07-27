import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import ListLayoutSimple from '@/layouts/ListLayoutSimple'
import NewsletterForm from '@/components/NewsletterForm'

const DEFAULT_LAYOUT = 'HomeLayout'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog', 'snippets')
  // const posts = await getAllFilesWithType('snippet', 'blog')
  const homePage = await getFileBySlug('content', ['home'])

  return { props: { posts, homePage } }
}

export default function Home({ posts, homePage }) {
  const { mdxSource, frontMatter } = homePage
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="border-b-2 border-gray-300">
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      </div>
      <ListLayoutSimple posts={posts} />
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
