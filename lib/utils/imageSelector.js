import Image from 'next/image'

const BASE_PATH = '/../public/static/images/tips/'

const categoryToImagePath = {
  obsidian: 'obsidian.png',
  css: 'css.png',
  html: 'html.png',
  default: 'default.png',
}

const imageSelector = (category, title) => {
  const imagePath = BASE_PATH + (categoryToImagePath[category] || categoryToImagePath.default)

  return <Image src={imagePath} alt={title} width="50" height="50" />
}

export default imageSelector
