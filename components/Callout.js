import { Star, Info, Construction } from 'lucide-react'
import parse from 'html-react-parser'

const Callout = ({ type, text, title }) => {
  let icon = ''

  switch (type) {
    case 'contruction':
      icon = <Construction />
      break
    case 'info':
      icon = <Info />
      break
    default:
      icon = <Star />
      break
  }

  return (
    <div className="mb-10 rounded-md border-1 border-primary-600/25 bg-primary-500 bg-opacity-30 p-3 shadow-lg">
      <div className="justify-left mb-2 flex flex-row items-center">
        <div className="mr-2">{icon}</div>
        <p className="my-0 text-lg text-sm font-bold">{title ? title : 'Summary'}</p>
      </div>
      <div>{text ? <p className="my-0 text-sm"> {parse(text)}</p> : null}</div>
    </div>
  )
}

export default Callout
