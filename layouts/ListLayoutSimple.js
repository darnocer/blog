import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 10

export default function ListLayoutSimple({ posts }) {
  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug} className="py-4">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-start text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            View All &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
