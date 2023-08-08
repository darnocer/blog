import React from 'react'
import Link from '@/components/Link'

export default function LinkArrow({ text, slug, direction }) {
  return (
    <div className="flex justify-start text-base font-medium leading-6">
      <Link
        href={slug ? `/blog/${slug}` : '/blog'}
        className="flex items-center text-primary-500 underline hover:text-primary-600 dark:hover:text-primary-400"
        aria-label="all posts"
      >
        {text}{' '}
        {direction === 'left' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </>
        )}
      </Link>
    </div>
  )
}
