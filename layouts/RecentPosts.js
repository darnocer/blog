import Link from '@/components/Link'

import formatDate from '@/lib/utils/formatDate'

import LinkArrow from '@/components/LinkArrow'
import Heading from '@/components/Heading'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'

const MAX_DISPLAY = 5

export default function RecentPosts({ posts, heading, directory }) {
  return (
    <SectionContainer>
      <Heading text={heading} />
      <div className="space-y-6">
        <ul className="space-y-6">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, type } = frontMatter
            return (
              <li key={slug} className="group no-arrow py-2">
                <article className="flex flex-col">
                  <Link href={`/${type}/${slug}`} className="text-gray-900 dark:text-gray-100">
                    <h3 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 underline duration-200 ease-in hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400">
                      {title}
                    </h3>
                    <div className="flex items-baseline gap-x-2">
                      <time className="text-base text-gray-500 dark:text-gray-400" dateTime={date}>
                        {formatDate(date)}
                      </time>
                      {tags.map((tag, index) => (
                        <div key={index} className="mt-2">
                          <Tag text={tag} />
                        </div>
                      ))}
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
        <div className="mt-2">
          {posts.length > MAX_DISPLAY && (
            <LinkArrow text="View All" direction="right" href={`/${directory}`} />
          )}
        </div>
      </div>
    </SectionContainer>
  )
}
