import siteMetadata from '@/data/siteMetadata'

const formatDateShort = (date) => {
  const options = {
    month: 'short',
    day: '2-digit',
    // timeStyle: 'none',
    // dateStyle: 'short',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)

  return now
}

export default formatDateShort
