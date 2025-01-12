import { PageSEO } from '@/components/SEO'
import { getAllTypes } from '@/lib/getAllTypes'

import pageContent from '@/data/pageContent'

import PageTitle from '@/components/PageTitle'
import BadgeList from '@/components/BadgeList'

const PAGE_TITLE = "Content Types"
const PAGE_DESCRIPTION = ""

export async function getStaticProps() {
  const types = await getAllTypes()

  return { props: { types } }
}

export default function Types({ types }) {
  return (
    <>
      <PageSEO title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5 md:border-r-2 border-gray-500 dark:border-gray-700 md:px-6">
          <PageTitle>{pageContent.types.title}</PageTitle>
        </div>
        <div className="flex max-w-lg flex-wrap">

          <BadgeList types={types} />
        </div>
      </div>
    </>
  )
}
