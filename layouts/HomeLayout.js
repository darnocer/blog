import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function HomeLayout({ children, frontMatter }) {
  return (
    <>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {siteMetadata.title}
      </h1>
      <div className="prose max-w-none space-y-2 pt-6 pb-8 md:space-y-5">{children}</div>
    </>
  )
}
