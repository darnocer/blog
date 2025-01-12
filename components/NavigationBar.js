import React, { useState } from 'react'

import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/components/Logo'
import Link from '@/components/Link'

const NavigationBar = () => {
  return (
    <header className="flex items-center justify-between py-6 px-6 md:px-0 m-auto w-full max-w-4xl">

        <Logo />
     
      <nav className="flex items-center text-base leading-5">
        <div className="hidden sm:flex items-center space-x-4">
          {headerNavLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.title} title={link.title} links={link.dropdown} />
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-semibold uppercase text-gray-700 duration-200 ease-in hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            )
          )}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </nav>
    </header>
  )
}

const DropdownMenu = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center p-1 font-semibold uppercase text-gray-700 duration-200 ease-in hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 sm:p-4"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-1 h-4 w-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`absolute top-full left-0 mt-0.5 w-60 bg-gray-100 dark:bg-gray-850 shadow-lg rounded-md transition-all duration-200 overflow-hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((dropdownLink) => (
          <Link
            key={dropdownLink.title}
            href={dropdownLink.href}
            className="block p-4 font-semibold uppercase text-gray-700 duration-200 ease-in hover:bg-gray-150 dark:hover:bg-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            {dropdownLink.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavigationBar
