import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDateShort from '@/lib/utils/formatDateShort'
import LinkArrow from '@/components/LinkArrow'
import Heading from '@/components/Heading'
import SectionContainer from '@/components/SectionContainer'

const MAX_DISPLAY = 8

export default function ListLayoutSimple({ posts, directory, heading }) {
  return (
    <SectionContainer>
      <Heading text={heading} />
      <div className="space-y-6">
        <ul className="space-y-6">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-0">
                <article className="justify-stretch flex flex-row flex-nowrap items-center items-baseline gap-x-2">
                  <Link
                    href={`/${directory}/${slug}`}
                    className="justify-stretch flex content-center items-baseline gap-x-4"
                  >
                    <time className="w-14 text-gray-500 dark:text-gray-300" dateTime={date}>
                      {formatDateShort(date)}
                    </time>
                    <span className="text-gray-400 dark:text-gray-400">|</span>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      {title}
                    </h3>
                    {/* <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div> */}
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && <LinkArrow text="View All" />}
      </div>
    </SectionContainer>
  )
}
