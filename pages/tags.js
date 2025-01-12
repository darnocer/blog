import { PageSEO } from '@/components/SEO'
import { getAllTags } from '@/lib/getAllTags'

import PageTitle from '@/components/PageTitle'
import TagList from '@/components/TagList'

import pageContent from '@/data/pageContent'

const PAGE_TITLE = "Tags"
const PAGE_DESCRIPTION = ""

export async function getStaticProps() {
  const tags = await getAllTags()

  return { props: { tags } }
}

export default function Tags({ tags }) {

  return (
    <>
      <PageSEO title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5 md:border-r-2 border-gray-500 dark:border-gray-700 md:px-6">
          <PageTitle>{pageContent.tags.title}</PageTitle>
        </div>
        <div className="flex max-w-lg flex-wrap">
          <TagList tags={tags} />
        </div>
      </div>
    </>
  )
}
