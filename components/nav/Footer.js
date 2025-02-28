import Link from '@/components/links/Link'
import siteMetadata from '@/data/siteMetadata'
import footerNavLinks from '@/data/nav/footerNavLinks'
import SocialIcon from '@/components/icons/social-icons'
import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-12 divide-y border-t-1 border-gray-500/50 bg-white dark:bg-black'>
      <div className='mt-12 flex flex-col items-center font-medium'>
        <nav className='mb-3 flex items-center space-x-4'>
          {footerNavLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className='text-xs font-semibold uppercase text-gray-400 transition-all duration-200 ease-in hover:text-gray-500 hover:underline dark:hover:text-gray-300'
              >
                {link.title}
              </Link>
              {index < footerNavLinks.length - 1 && ( // Only add the pipe between links, not at the end
                <span className='mx-2 text-gray-500 dark:text-gray-400'>|</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        <div className='mb-2 mt-4 flex flex-col items-center text-xxs text-gray-500 dark:text-gray-400'>
          <p className='text-xxs'>
            Made with 👽 by{' '}
            <a className='underline' href={siteMetadata.website} target='_blank' rel='noreferrer'>
              darian.
            </a>
          </p>
          <p>{`© ${new Date().getFullYear()} rootedvision`}</p>
        </div>
      </div>
    </footer>
  )
}
