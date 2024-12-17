import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/icons/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center font-medium">
        {/* <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
        </div> */}
        <Link
          className="text-xxs uppercase text-gray-500 underline dark:text-gray-400"
          href="/colophon"
        >
          Colophon
        </Link>
        <div className="mt-4 mb-2 flex space-x-2 text-xxs text-gray-500 dark:text-gray-400">
          <p className="text-xxs">
            Made with 👽 by{' '}
            <a className="underline" href={siteMetadata.website} target="_blank" rel="noreferrer">
              darian.
            </a>
          </p>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
