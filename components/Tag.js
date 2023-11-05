import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, index }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 rounded-md bg-primary-500 bg-opacity-50 px-2 py-1 text-xs font-medium font-semibold uppercase uppercase  text-primary-900 duration-100 ease-in hover:bg-opacity-60 hover:text-gray-800 dark:text-primary-100 dark:hover:text-gray-100">
        {text.split(' ').join('-')}
        {/* <span href={`/tags/${kebabCase(text)}`} className="ml-1 font-semibold uppercase">
          ({index})
        </span> */}
      </a>
    </Link>
  )
}

export default Tag
