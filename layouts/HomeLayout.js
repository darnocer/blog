import siteMetadata from '@/data/siteMetadata'
import SectionContainer from '@/components/SectionContainer'

export default function HomeLayout({ children, frontMatter }) {
  return (
    <SectionContainer>
      <div className="border-b-2 border-gray-300">
        <div className="max-w-full space-y-2 pt-6 pb-8 dark:text-gray-300 md:space-y-5">
          {children}
        </div>
      </div>
    </SectionContainer>
  )
}
