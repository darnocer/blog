import Link from '@/components/links/Link'

import formatDateShort from '@/lib/utils/formatDateShort'

import LinkArrow from '@/components/links/LinkArrow'
import Heading from '@/components/headings/Heading'
import SectionContainer from '@/components/layout/SectionContainer'
import Badge from '@/components/links/Badge'

const MAX_DISPLAY = 5

export default function RecentPosts({ posts, heading, directory }) {
  return (
    <SectionContainer>
      <Heading text={heading} />
      <div className='space-y-6'>
        <ul className='space-y-6'>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, type } = frontMatter
            return (
              <li key={slug} className='no-arrow py-0'>
                <article className='w-100 justify-stretch flex flex-row flex-nowrap items-center'>
                  <Link
                    href={`/${type}/${slug}`}
                    className='justify-stretch flex content-center items-baseline gap-x-4'
                  >
                    <time className='text-gray-500 dark:text-gray-400' dateTime={date}>
                      {formatDateShort(date)}
                    </time>
                    <span className='text-gray-400 dark:text-gray-400'>|</span>
                    <h3 className='text-xl font-bold tracking-tight text-gray-800 duration-200 ease-in hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400'>
                      {title}
                    </h3>
                    {/* <Badge text={type} /> */}
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
        <div className='mt-2'>
          {posts.length > MAX_DISPLAY && <LinkArrow text='View All' direction='right' href={`/${directory}`} />}
        </div>
      </div>
    </SectionContainer>
  )
}
