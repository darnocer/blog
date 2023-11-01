import siteMetadata from '@/data/siteMetadata'

const formatDateShort = (date) => {
  const options = {
    month: 'short',
    day: '2-digit',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)

  return now
}

// returns date in format Mon DD - eg. Nov 1

export default formatDateShort
