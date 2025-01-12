import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getMdxContent } from '@/lib/mdx'

import { PageSEO } from '@/components/SEO'

const DEFAULT_LAYOUT = 'ContentLayout'
const PAGE_TITLE = 'Colophon'

export async function getStaticProps() {
  const content = await getMdxContent('data', 'content', ['colophon'])
  return { props: { content } }
}

export default function Colophon({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <PageSEO title={PAGE_TITLE} description="test" />

      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
