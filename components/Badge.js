const Badge = ({ text }) => {
  return (
    <p className="mr-3 rounded-full bg-secondary-500 bg-opacity-60 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-900  duration-100 ease-in dark:font-medium dark:text-gray-100 ">
      {text}
    </p>
  )
}

export default Badge
