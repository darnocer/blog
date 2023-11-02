import React, { Component } from 'react'
import Link from '@/components/Link'

export default function LinkArrow({ text, direction, href }) {
  return (
    <Link href={href}>
      <div className="my-4 flex justify-start text-base font-medium leading-6">
        <span className="flex items-center text-primary-500 underline hover:text-primary-600 dark:hover:text-primary-400">
          {direction === 'left' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          )}

          {text}

          {direction === 'right' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </span>
      </div>
    </Link>
  )
}
