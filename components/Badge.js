const Badge = ({ text }) => {
  const badgeText = {
    tips: 'tip',
    musings: 'musing',
    snippets: 'snippet',
    guides: 'guide',
    default: 'musing',
  }
  return text ? (
    <p className="mr-3 rounded-2xl bg-secondary-400 bg-opacity-80 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-gray-800 duration-300 ease-in hover:bg-secondary-500 hover:bg-opacity-80 dark:bg-secondary-400  dark:bg-opacity-60 dark:text-gray-100 dark:hover:bg-secondary-300 dark:hover:bg-opacity-60">
      {badgeText[text]}
    </p>
  ) : null
}

export default Badge
