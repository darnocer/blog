import Link from '@/components/Link'
import Tag from '@/components/Tag'
import kebabCase from '@/lib/utils/kebabCase'
import SectionContainer from './SectionContainer'

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <SectionContainer>
      <div className="border-b-1 border-gray-300 py-2">
        <h2 className="text-4xl font-extrabold">Topics</h2>
      </div>
      <div className="flex flex-wrap justify-between">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((t) => {
          return (
            <div key={t} className="mt-2 mb-2 mr-5">
              <Tag text={t} />
              {/* <Link
                href={`/tags/${kebabCase(t)}`}
                className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
              >
                {` (${tags[t]})`}
              </Link> */}
            </div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
