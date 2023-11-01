import siteMetadata from '@/data/siteMetadata'

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)

  return now
}
// returns date in format Month DD, YYYY - eg. November 1, 2023

export default formatDate
