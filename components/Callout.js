import { Star, Info, Construction, Wrench } from 'lucide-react'
import parse from 'html-react-parser'

const Callout = ({ type, text, title }) => {
  let icon = ''
  const iconSize = 20

  switch (type) {
    case 'contruction':
      icon = <Construction size={iconSize} />
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

  return (
    <div className="mb-10 rounded-md border-1 border-primary-600/25 bg-primary-500 bg-opacity-30 p-4 shadow-lg">
      <div className="justify-left mb-2 flex flex-row items-center">
        <div className="mr-2">{icon}</div>
        <p className="text-md my-0 text-sm font-bold">{title ? title : 'Summary'}</p>
      </div>
      <div>{text ? <p className="my-0 text-sm"> {parse(text)}</p> : null}</div>
    </div>
  )
}

export default Callout
