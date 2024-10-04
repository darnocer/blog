const Badge = ({ text }) => {
  return text ? (
    <p className="mr-3 inline-flex min-h-max min-w-max items-center rounded-2xl bg-secondary-400 bg-opacity-80 px-2 pt-1 text-xs font-semibold uppercase leading-normal tracking-wide text-gray-700 duration-300 ease-in hover:bg-secondary-500 hover:bg-opacity-80  dark:bg-secondary-400 dark:bg-opacity-60 dark:text-gray-100 dark:hover:bg-secondary-300 dark:hover:bg-opacity-60">
      {text}
    </p>
  ) : null
}

export default Badge
