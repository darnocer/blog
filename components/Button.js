import React from 'react'
import Link from '@/components/Link'

const ICONS = {
  download: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-download text-black dark:text-white"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  contact: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-send text-black dark:text-white"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  ),
}

const Button = ({ icon, text, link }) => {
  const IconComponent = icon && ICONS[icon]

  return (
<Link
      href={link}
      className="mr-6 btn inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
                 border border-gray-700 dark:border-gray-300/30
       bg-white dark:bg-black
                 text-sm font-semibold  
                 transition-all ease duration-200 hover:border-gray-500 dark:hover:border-gray-400/40
                 hover:bg-gray-100 dark:hover:bg-gray-850
                 shadow-lg hover:pointer hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:no-underline"
    >
      {IconComponent && <div className="text-base">{IconComponent}</div>}
      <span className="mt-1 text-sm font-sans uppercase font-semibold text-gray-800 dark:text-gray-100">
        {text}
      </span>
    </Link>
  )
}

export default Button