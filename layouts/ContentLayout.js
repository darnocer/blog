import SectionContainer from '@/components/SectionContainer'

export default function ContentLayout({ children }) {
  return (
    <SectionContainer padding="large">
      <div className="prose max-w-none font-serif leading-normal dark:prose-dark">{children}</div>
    </SectionContainer>
  )
}
