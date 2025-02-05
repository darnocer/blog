import { useEffect, useState } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import formatDateShort from '@/lib/utils/formatDateShort'
import LinkArrow from '@/components/LinkArrow'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Heading from '@/components/Heading'
import SectionContainer from '@/components/SectionContainer'
import Badge from '@/components/Badge'
import { MDXComponents } from '@/components/MDXComponents' // ✅ Import your MDX components

const MAX_SNIPPETS = 5
const MAX_PREVIEW_LENGTH = 1000
export default function RecentSnippets({ heading }) {
  const [snippets, setSnippets] = useState([])

  useEffect(() => {
    async function fetchSnippets() {
      try {
        const response = await fetch(`/api/previews?maxLength=${MAX_PREVIEW_LENGTH}`)
        if (!response.ok) throw new Error('Failed to fetch snippets')
        const data = await response.json()
        setSnippets(data.slice(0, MAX_SNIPPETS))
      } catch (error) {
        console.error(error)
      }
    }
    fetchSnippets()
  }, [])

  return (
    <>
      <Heading text={heading} />
      <div className='space-y-6'>
        <ul className='space-y-6'>
          {snippets.length === 0 && 'No snippets found.'}
          {snippets.map(({ frontMatter, previewText }) => {
            const { slug, date, title, tags, content_type } = frontMatter
            return (
              <li key={slug} className='group no-arrow py-2'>
                <article className='flex flex-col gap-2'>
                  <div className='flex items-center gap-x-2'>
                    {date && (
                      <time
                        className='text-xs font-semibold uppercase text-gray-600 dark:text-gray-400'
                        dateTime={date}
                      >
                        {formatDateShort(date)}
                      </time>
                    )}{' '}
                    <span className='text-gray-700 dark:text-gray-400'>|</span>
                    {content_type && <Badge text={content_type} />}
                    <span className='text-gray-700 dark:text-gray-400'>|</span>
                    {tags && (
                      <div className='flex items-baseline gap-x-2'>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href={`/${slug}`} className='text-gray-900 dark:text-gray-200'>
                    <h3 className='text-2xl font-bold tracking-tight hover:underline'>{title}</h3>
                  </Link>

                  <div className='mdx-preview text-sm text-gray-800 dark:text-gray-200 leading-relaxed'>
                    {previewText}
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        <div className='mt-2'>
          {snippets.length >= MAX_SNIPPETS && <LinkArrow text='View All' direction='right' href={`/musings`} />}
        </div>
      </div>
    </>
  )
}
