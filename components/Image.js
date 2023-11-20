import Image from 'next/image'

const CustomImage = ({ src, alt, ...rest }) => (
  <div className="my-4 flex justify-center">
    <Image src={src} alt={alt || 'image'} {...rest} className="mx-auto rounded-md" />
  </div>
)

export default CustomImage
