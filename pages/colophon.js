import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getMdxContent } from '@/lib/mdx'
import Head from 'next/head'

const DEFAULT_LAYOUT = 'ContentLayout'

export async function getStaticProps() {
  const content = await getMdxContent('data', 'content', ['colophon'])
  return { props: { content } }
}

export default function Colophon({ content }) {
  const { mdxSource, frontMatter } = content

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
