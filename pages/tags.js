import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import PageTitle from '@/components/PageTitle'
import pageContent from '@/data/pageContent'
import TagList from '@/components/TagList'

export async function getStaticProps() {
  const tags = await getAllTags('tips')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  // const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5 md:border-r-2 md:px-6">
          <PageTitle>{pageContent.tags.title}</PageTitle>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          <TagList tags={tags} />
        </div>
      </div>
    </>
  )
}
