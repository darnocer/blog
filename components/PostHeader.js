import PageTitle from './PageTitle'
import HeaderTagList from './HeaderTagList'
import formatDate from '@/lib/utils/formatDate'
import Badge from './Badge'

export default function PostHeader({ title, summary, tags, date, contentType }) {
  return (
    <div className="space-y-1 border-b border-gray-200 pb-8 text-center dark:border-gray-700">
      {date ? (
        <dl>
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-xs font-medium uppercase leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </div>
        </dl>
      ) : null}

      <PageTitle>{title}</PageTitle>

      <HeaderTagList tags={tags} />

      <Badge text={contentType.join(', ')} />

      {/* <div className="m-4">
        <p className="italic">{summary}</p>
      </div> */}
    </div>
  )
}
