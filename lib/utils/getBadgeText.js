const getBadgeText = (text) => {
  const defaultText = 'musing'

  if (!text) {
    return defaultText
  }

  return text.slice(0, -1)
}

export default getBadgeText
