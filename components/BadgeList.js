import Link from '@/components/Link'
import Badge from '@/components/Badge'
import kebabCase from '@/lib/utils/kebabCase'

import Heading from '@/components/Heading'
import SectionContainer from './SectionContainer'

export default function BadgeList({
  types,
  heading,
  level = 'h2',
  border = 'border',
  color = 'gray-200',
}) {
  const sortedTypes = Object.keys(types).sort((a, b) => types[b] - types[a])
  return (
    <>
      {heading ? <Heading text={heading} level={level} border={border} color={color} /> : null}
      <div className="mb-6 flex flex-wrap justify-start">
        {Object.keys(types).length === 0 && 'No types found.'}
        {sortedTypes.map((t) => {
          return (
            <div key={t} className="mt-2 mb-2 mr-4">
              <Badge text={t} />
            </div>
          )
        })}
      </div>
    </>
  )
}