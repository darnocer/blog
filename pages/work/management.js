import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getSectionContent } from '@/lib/mdx'

import MetadataWrapper from '@/components/seo/MetadataWrapper'

const DEFAULT_LAYOUT = 'PageLayout'
const PAGE_TITLE = 'Management'

export async function getStaticProps() {
  const content = await getSectionContent('management')
  return { props: { content } }
}

export default function Management({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <MetadataWrapper title={PAGE_TITLE}>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </MetadataWrapper>
  )
}
