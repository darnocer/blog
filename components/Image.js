const Image = ({ src, alt, ...rest }) => (
  <div className="flex justify-center">
    <img src={src} alt={alt || 'image'} {...rest} className="mx-auto rounded-md" />{' '}
  </div>
)

export default Image
