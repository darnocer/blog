import Link from '@/components/Link'
import Tag from '@/components/Tag'

import Heading from '@/components/Heading'
import SectionContainer from './SectionContainer'

export default function HeaderTagList({ tags, heading }) {
  return (
    <SectionContainer>
      {heading ? <Heading text={heading} /> : null}
      <div className="flex flex-wrap justify-center">
        {tags.length === 0 && 'No tags found.'}
        {tags.map((tag, index) => (
          <div key={index} className="mt-2 mr-1">
            <Tag text={tag} />
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
