import { useState } from 'react'

import formatDate from '@/lib/utils/formatDate'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Pagination from '@/components/Pagination'
import PageTitle from '@/components/PageTitle'
import LinkArrow from '@/components/LinkArrow'

export default function ListLayout({
  posts,
  title,
  description,
  initialDisplayPosts = [],
  pagination,
  directory,
}) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = (
      frontMatter.title +
      frontMatter.summary +
      frontMatter.tags.join(' ') +
      (frontMatter.category || []).join(' ')
    ).toLowerCase()
    return searchContent.includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>{title}</PageTitle>
          <p className="text-gray-800 dark:text-gray-300">{description ? description : null}</p>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredBlogPosts.length && <span className="mt-6">'No posts found.'</span>}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, type } = frontMatter
            return (
              <li key={slug} className="group no-arrow py-6">
                <article className="space-y-1 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <Link
                    href={`/${type}/${slug}`}
                    className="block text-gray-900 transition-all duration-300 group-hover:border-l-4 group-hover:border-primary-500 group-hover:pl-4 dark:text-gray-100"
                  >
                    <div className="space-y-2 xl:col-span-3">
                      <time
                        className="text-xs font-semibold leading-6 text-gray-500 dark:text-gray-400"
                        dateTime={date}
                      >
                        {formatDate(date)}
                      </time>

                      <div>
                        <h3 className="py-2 text-2xl font-bold leading-8 tracking-tight">
                          {title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                      <LinkArrow text="Read More" direction="right" href={`/${type}/${slug}`} />
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          directory={directory}
        />
      )}
    </>
  )
}
