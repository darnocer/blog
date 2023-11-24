import Link from '@/components/Link'

import formatDateShort from '@/lib/utils/formatDateShort'

import LinkArrow from '@/components/LinkArrow'
import Heading from '@/components/Heading'
import SectionContainer from '@/components/SectionContainer'
import Badge from '@/components/Badge'

const MAX_DISPLAY = 10

export default function RecentPosts({ posts, heading }) {
  return (
    <SectionContainer>
      <Heading text={heading} />
      <div className="space-y-6">
        <ul className="space-y-6">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, type, directory } = frontMatter
            // const directory = type === 'tip' ? 'tips' : 'blog'
            return (
              <li key={slug} className="article-item py-0">
                <article className="justify-stretch w-100 flex flex-row flex-nowrap items-center items-baseline">
                  <Link
                    href={`/${directory}/${slug}`}
                    className="justify-stretch flex content-center items-baseline gap-x-4"
                  >
                    <time className="text-gray-500 dark:text-gray-400" dateTime={date}>
                      {formatDateShort(date)}
                    </time>
                    <span className="text-gray-400 dark:text-gray-400">|</span>
                    <h3 className="text-xl font-bold tracking-tight tracking-normal text-gray-800 duration-200 ease-in hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                      {title}
                    </h3>
                    <Badge text={type} />
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <LinkArrow text="View All" direction="right" href={`/posts`} />
        )}
      </div>
    </SectionContainer>
  )
}
