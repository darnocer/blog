import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, index }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      {/* <a className=" mr-3 rounded-full bg-primary-500 bg-opacity-50 px-2.5 py-1 text-xxs font-semibold uppercase uppercase leading-none tracking-wide text-primary-900  duration-100 ease-in hover:bg-opacity-60 hover:text-gray-800 dark:font-medium dark:text-primary-100 dark:hover:text-gray-100">
        {text.split(' ').join('-')}
      </a> */}

      <a className="text-xs font-semibold uppercase uppercase leading-none tracking-wide text-primary-500  duration-100 ease-in">
        #{text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
