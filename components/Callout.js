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

  // Apply a different style if 'text' is provided
  const calloutStyle = text
    ? 'mb-10 rounded-md border-1 border-primary-600/25 bg-primary-500 bg-opacity-30 p-4 shadow-lg' // Style for callout with text
    : 'mb-10 rounded-md border-1 border-primary-600/60 bg-primary-200 p-4 shadow-lg text-primary-900 bg-opacity-75' // Style for title only

  return (
    <div className={`${calloutStyle} callout`}>
      <div className="justify-left flex flex-row items-center">
        <div className="mr-2">{icon}</div>
        <p className="my-0 text-base font-bold">{title ? title : 'Summary'}</p>
      </div>
      {text && <div className="mt-2 text-sm">{parse(text)}</div>}
    </div>
  )
}

export default Callout
