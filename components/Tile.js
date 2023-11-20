import imageSelector from '@/lib/utils/imageSelector'

const Tile = ({ title, summary, tags, category }) => (
  <article
    key={title}
    className="my-4 flex h-40 max-w-sm flex-col justify-around overflow-hidden rounded-md border-2 border-solid border-primary-500 p-2 shadow-green duration-200 ease-in hover:border-yellow hover:shadow-yellow dark:shadow-greenDark dark:hover:shadow-yellow"
  >
    <div className="h-12 w-12">{imageSelector(category, title)}</div>
    <h3 className="mb-2 text-xl font-bold leading-6">{title}</h3>
  </article>
)

export default Tile
