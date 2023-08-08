import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 rounded-md bg-primary-500 bg-opacity-50 px-2 py-1 text-sm text-xs font-medium font-semibold uppercase uppercase text-primary-500 text-primary-900 duration-100 ease-in hover:bg-opacity-80 hover:text-gray-100 dark:text-primary-100 dark:hover:text-gray-100">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
