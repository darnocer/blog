import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
const Badge = ({ text }) => {
  const href = `/types/${kebabCase(text)}`

  return text ? (
    <Link href={href} passHref>
      <p className='mr-3 inline-flex leading-none items-center justify-center rounded-2xl bg-secondary-500 bg-opacity-80 px-2 pt-1 font-sans text-xs font-semibold uppercase tracking-wide text-gray-700 duration-300 ease-in hover:cursor-pointer hover:bg-secondary-500 hover:bg-opacity-80 dark:bg-secondary-400 dark:bg-opacity-60 dark:text-gray-100 dark:hover:bg-secondary-200 dark:hover:bg-opacity-60'>
        {text}
      </p>
    </Link>
  ) : null
}

export default Badge
