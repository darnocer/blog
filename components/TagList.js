import Link from '@/components/Link'
import Tag from '@/components/Tag'
import kebabCase from '@/lib/utils/kebabCase'
import SectionContainer from './SectionContainer'
import Heading from '@/components/Heading'

export default function Tags({ tags, heading }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <SectionContainer>
      <Heading text={heading} />
      <div className="flex flex-wrap justify-start">
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
