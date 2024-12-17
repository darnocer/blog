import { Star, Info, Construction, Wrench, Quote } from 'lucide-react'
import parse from 'html-react-parser'

const Callout = ({ type, text, title }) => {
  let icon = ''
  const iconSize = 20

  switch (type) {
    case 'construction':
      icon = <Construction size={iconSize} />
      break
    case 'quote':
      icon = <Quote size={iconSize} />
      break
    case 'tools':
      icon = <Wrench size={iconSize} />
      break
    case 'info':
      icon = <Info size={iconSize} />
      break
    default:
      icon = <Star size={iconSize} />
      break
  }

  // Function to replace backticks with <code> tags
  const formatText = (inputText) => {
    const formattedText = inputText.replace(/`([^`]+)`/g, "<code className='inline-code'>$1</code>")
    return parse(formattedText)
  }
  0
  // Apply a different style if 'text' is provided
  const calloutStyleWithText =
    'mb-8 rounded-md border-2 border-secondary-600/25 bg-secondary-500 bg-opacity-30 p-4 shadow-lg font-sans' // Style for callout with text
  const calloutStyleWithTitleOnly =
    'mb-8 rounded-md border-2 border-secondary-400/60 bg-secondary-100 bg-opacity-70 dark:bg-gray-400 p-4 shadow-lg text-gray-700 dark:text-secondary-300 dark:bg-opacity-10 font-sans' // Style for title only
  const calloutStyle = text ? calloutStyleWithText : calloutStyleWithTitleOnly

  return (
    <div className={`${calloutStyle} callout not-prose`}>
      <div className="justify-left flex flex-row items-center">
        <div className="mr-2">{icon}</div>
        <p className="text-md my-0 font-bold">{title || 'Summary'}</p>
      </div>
      {text && <div className="mt-2 font-medium">{formatText(text)}</div>}
    </div>
  )
}

export default Callout
