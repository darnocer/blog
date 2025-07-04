import Email from './email.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Medium from './medium.svg'
import Website from './website.svg'
import Instagram from './instagram.svg'
import X from './x.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  email: Email,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  medium: Medium,
  website: Website,
  instagram: Instagram,
  x: X,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))) return null

  const SocialSvg = components[kind]

  return (
    <a
      className='text-sm text-gray-500 transition hover:text-gray-600'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      <span className='sr-only'>{kind}</span>
      <SocialSvg
        className={`h-6 text-gray-700 duration-200 ease-in hover:text-tertiary-600 dark:text-gray-200 dark:hover:text-tertiary-500`}
        fill={kind === 'email' ? 'none' : 'currentColor'} // Ensure website icon uses stroke only
      />
    </a>
  )
}

export default SocialIcon
