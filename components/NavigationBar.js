import React from 'react'

import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/components/Logo'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'

const NavigationBar = () => {
  return (
    <header className="flex items-center justify-between py-6 m-auto w-full max-w-5xl">
      <div className="px-4">
        <Logo />
      </div>
      <nav className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-semibold uppercase text-gray-700 duration-200 ease-in hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </nav>
    </header>
  )
}

export default NavigationBar
