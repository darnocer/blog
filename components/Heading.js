import React from 'react'

export default function Heading({ text, level = 'h2', border = 'border', color = 'gray-200' }) {
  const borderClasses =
    border === 'border' ? 'mb-8 border-b-2 border-gray-300 py-2 dark:border-gray-500 font-sans' : ''

  const HeadingLevels = {
    h1: ({ text }) => (
      <h1
        className={`font-sans font-bold leading-none tracking-tighter text-gray-800 dark:text-gray-100 ${borderClasses}`}
      >
        {text}
      </h1>
    ),
    h2: ({ text }) => (
      <h2
        className={`font-sans text-4xl font-bold leading-none tracking-tighter text-gray-800 dark:text-gray-100 ${borderClasses}`}
      >
        {text}
      </h2>
    ),
    h3: ({ text }) => (
      <h3
        className={`font-sans font-bold leading-none tracking-tighter text-gray-800 dark:text-gray-100 ${borderClasses}`}
      >
        {text}
      </h3>
    ),
  }

  const HeadingTag = HeadingLevels[level] || HeadingLevels.h2

  return text ? <HeadingTag text={text} /> : null
}
