import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, index }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-xs font-semibold uppercase uppercase leading-none tracking-wide text-tertiary-500  duration-100 ease-in hover:text-tertiary-600 dark:hover:text-tertiary-400">
        #{text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
