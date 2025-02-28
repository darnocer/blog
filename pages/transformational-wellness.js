import { MDXLayoutRenderer } from '@/components/MDXComponents'

import { getSectionContent } from '@/lib/mdx'

import MetadataWrapper from '@/components/seo/MetadataWrapper'

import SectionContainer from '@/components/layout/SectionContainer'
import RecentPosts from '@/components/listings/RecentPosts'

const DEFAULT_LAYOUT = 'PageLayout'
const PAGE_TITLE = 'TransformationalWellness'

export async function getStaticProps() {
  const content = await getSectionContent('wellness')
  // const posts = await getAllFilesFrontMatter()
  return { props: { content } }
}

export default function TransformationalWellness({ content }) {
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
