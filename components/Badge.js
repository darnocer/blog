const Badge = ({ text }) => {
  const badgeText = {
    tips: 'tip',
    musings: 'musing',
    snippets: 'snippet',
    guides: 'guide',
    default: 'musing',
  }
  return text ? (
    <p className="mr-3 rounded-2xl bg-secondary-500 bg-opacity-60 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-gray-900  duration-100 ease-in dark:font-medium dark:text-gray-100 ">
      {badgeText[text]}
    </p>
  ) : null
}

export default Badge
