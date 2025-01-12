import React from 'react'

const DefinitionCallout = ({ word, definition }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-tertiary-500 p-4 rounded-md shadow-md max-w-xl">
      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">{word}</h3>
        <hr className="border-gray-300 dark:border-gray-700 mb-4" />
        <p className=" text-gray-700 dark:text-gray-300 leading-normal mb-2">{definition}</p>
      </div>
    </div>
  )
}

export default DefinitionCallout