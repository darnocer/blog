import React from 'react'

export default function Heading({ text, level = 'h2', border = 'border', color = 'gray-200' }) {
  const borderClasses =
    border === 'border' ? 'mb-4 border-b-1 border-gray-200 py-2 dark:border-gray-700' : ''
  const textColor = `text-${color}`

  const HeadingLevels = {
    h1: ({ text }) => <h1 className="text-6xl font-extrabold tracking-tighter">{text}</h1>,
    h2: ({ text }) => <h2 className="text-4xl font-extrabold tracking-tighter">{text}</h2>,
    h3: ({ text }) => (
      <h3 className={`text-2xl font-extrabold tracking-tighter ${textColor}`}>{text}</h3>
    ),
  }

  const HeadingTag = HeadingLevels[level] || HeadingLevels.h2

  return text ? (
    <div className={`${borderClasses}`}>
      <HeadingTag className={textColor} text={text} />
    </div>
  ) : null
}
