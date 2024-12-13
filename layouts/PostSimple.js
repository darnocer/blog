import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useRouter } from 'next/router'
import LinkArrow from '@/components/LinkArrow'
import PostHeader from '@/components/PostHeader'

import { useEffect } from 'react'

import Prism from 'prismjs'
import '../lib/prism/dataview'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, tags, summary, content_type } = frontMatter

  const router = useRouter()
  const directory = router.pathname.split('/')[1]

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <SectionContainer container="small">
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <Breadcrumbs />
            <PostHeader
              title={title}
              summary={summary}
              tags={tags}
              date={date}
              contentType={content_type}
            />
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="section prose max-w-none pt-10 pb-8 font-serif dark:prose-dark">
                {children}
              </div>
            </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <LinkArrow text={prev.title} direction="left" href={`/${prev.slug}`} />
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <LinkArrow text={next.title} direction="right" href={`/${next.slug}`} />
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
