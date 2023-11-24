import PageTitle from './PageTitle'
import HeaderTagList from './HeaderTagList'
import formatDate from '@/lib/utils/formatDate'

export default function PostHeader({ title, summary, tags, date }) {
  return (
    <div className="space-y-2 border-b border-gray-200 pb-8 text-center dark:border-gray-700">
      <HeaderTagList tags={tags} />

      <PageTitle>{title}</PageTitle>
      <dl>
        <div>
          <dt className="sr-only">Published on</dt>
          <dd className="text-xs font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </div>
      </dl>
      {/* <div className="m-4">
        <p className="italic">{summary}</p>
      </div> */}
    </div>
  )
}
