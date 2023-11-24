import React from 'react'

const HeadingLevels = {
  h1: ({ text }) => <h1 className="text-6xl font-extrabold">{text}</h1>,
  h2: ({ text }) => <h2 className="text-4xl font-extrabold">{text}</h2>,
  h3: ({ text }) => <h3 className="text-3xl font-extrabold">{text}</h3>,
}

export default function Heading({ text, level = 'h2' }) {
  const HeadingTag = HeadingLevels[level] || HeadingLevels.h2
  return text ? (
    <div className="mb-4 border-b-1 border-gray-200 py-2 dark:border-gray-700">
      <HeadingTag text={text} />
    </div>
  ) : null
}
