import getBadgeText from '../lib/utils/getBadgeText'

const Badge = ({ text }) => {
  const badgeText = getBadgeText(text)

  return text ? (
    <p className="mr-3 inline-flex rounded-2xl bg-secondary-400 bg-opacity-80 px-2 py-0.5 align-bottom text-xs font-semibold uppercase tracking-wide text-gray-800 duration-300 ease-in hover:bg-secondary-500 hover:bg-opacity-80 dark:bg-secondary-400  dark:bg-opacity-60 dark:text-gray-100 dark:hover:bg-secondary-300 dark:hover:bg-opacity-60">
      {badgeText}
    </p>
  ) : null
}

export default Badge
