import React from 'react'

export default function Heading({ text }) {
  return (
    <div className="mb-4 border-b-1 border-gray-200 py-2 dark:border-gray-700">
      <h2 className="text-4xl font-extrabold">{text}</h2>
    </div>
  )
}
