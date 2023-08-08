import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
import Pagination from '@/components/Pagination'
import formatDateShort from '@/lib/utils/formatDateShort'
import SectionContainer from '@/components/SectionContainer'
import LinkArrow from '@/components/LinkArrow'

const MAX_DISPLAY = 5

export default function ListLayoutSimple({ posts }) {
  return (
    <SectionContainer>
      <div className="border-b-1 border-gray-300 py-4">
        <h2 className="text-4xl font-extrabold">Recent Posts</h2>
      </div>
      <div className="space-y-6">
        <ul className="space-y-6">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-0">
                <article className="justify-stretch flex flex-row flex-nowrap items-center items-baseline gap-x-2">
                  <Link
                    href={`/blog/${slug}`}
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
