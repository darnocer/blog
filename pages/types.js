import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllTypes } from '@/lib/getAllTypes'
import PageTitle from '@/components/PageTitle'
import pageContent from '@/data/pageContent'
import BadgeList from '@/components/BadgeList'

export async function getStaticProps() {
  const types = await getAllTypes()

  return { props: { types } }
}

export default function Types({ types }) {
  return (
    <>
      <PageSEO title={pageContent.types.title} description={pageContent.types.description} />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5 md:border-r-2 md:px-6">
          <PageTitle>{pageContent.types.title}</PageTitle>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(types).length === 0 && 'No types found.'}
          <BadgeList types={types} />
        </div>
      </div>
    </>
  )
}
