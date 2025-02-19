import { useEffect, useState } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import formatDateShort from '@/lib/utils/formatDateShort'
import Link from '@/components/links/Link'
import Tag from '@/components/links/Tag'
import Heading from '@/components/headings/Heading'
import ChevronRight from '@/components/icons/ui/ChevronRightIcon'
import { MDXComponents } from '../MDXComponents'

const MAX_SNIPPETS = 10

export default function RecentSnippets({
  heading,
  numPosts = MAX_SNIPPETS,
  maxLength = 1500,
  contentType = 'musings',
}) {
  const [snippets, setSnippets] = useState([])

  useEffect(() => {
    async function fetchSnippets() {
      try {
        const response = await fetch(`/api/previews?maxLength=${maxLength}&contentType=${contentType}`)
        if (!response.ok) throw new Error('Failed to fetch snippets')
        const data = await response.json()
        setSnippets(data.slice(0, numPosts))
      } catch (error) {
        console.error(error)
      }
    }
    fetchSnippets()
  }, [numPosts, maxLength, contentType])

  return (
    <>
      <Heading text={heading} />
      <div className='space-y-6'>
        <ul className='space-y-6 divide-y divide-gray-200 dark:divide-gray-700'>
          {snippets.length === 0 ? (
            <p>No snippets found.</p>
          ) : (
            snippets.map(({ frontMatter, mdxSource, isTruncated }) => {
              const { slug, date, title, tags } = frontMatter
              return (
                <li key={slug} className='no-arrow group py-2'>
                  <article className='flex flex-col gap-2'>
                    {tags && (
                      <div className='my-2 flex items-baseline gap-x-2'>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    )}

                    <Link href={`/${slug}`} className='text-gray-900 dark:text-gray-200'>
                      <h3 className='text-3xl font-bold tracking-tight hover:underline'>{title}</h3>
                    </Link>

                    <div className='mdx-preview prose prose-sm max-w-full'>
                      {mdxSource ? (
                        <MDXRemote {...mdxSource} components={MDXComponents} />
                      ) : (
                        <p>{frontMatter.summary || ''}</p>
                      )}
                    </div>
                  </article>
                </li>
              )
            })
          )}
        </ul>

        <div className='mt-2'>{snippets.length >= numPosts && <Link text='See All Musings' href={`/musings`} />}</div>
      </div>
    </>
  )
}
