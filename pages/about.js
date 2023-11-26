import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getMdxContent } from '@/lib/mdx'
import Head from 'next/head'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getMdxContent('data', 'content', ['about'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
