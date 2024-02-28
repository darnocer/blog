import imageSelector from '@/lib/utils/imageSelector'

const Tile = ({ title, summary, tags, category }) => (
  <article
    key={title}
    className="hover:border-secondary hover:shadow-secondary dark:hover:shadow-secondary my-4 flex h-40 max-w-sm flex-col justify-around overflow-hidden rounded-md border-2 border-solid border-primary-500 p-2 shadow-green duration-200 ease-in dark:shadow-greenDark"
  >
    <div className="h-12 w-12">{imageSelector(category, title)}</div>
    <h3 className="mb-2 text-xl font-bold leading-6">{title}</h3>
  </article>
)

export default Tile
