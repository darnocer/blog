import Link from '@/components/Link'
import formatDateShort from '@/lib/utils/formatDateShort'
import LinkArrow from '@/components/LinkArrow'
import Heading from '@/components/Heading'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import Badge from '@/components/Badge'

const MAX_DISPLAY = 5

export default function RecentPosts({
  posts,
  heading,
  directory,
  categoryFilter,
  typeFilter,
  tagFilter,
}) {
  // Adjusted to handle typeFilter as an array
  const filteredByType = typeFilter
    ? posts.filter((post) => post.content_type.some((type) => typeFilter.includes(type)))
    : posts

  const filteredByCategory = categoryFilter
    ? filteredByType.filter((post) => post.category.some((cat) => categoryFilter.includes(cat)))
    : filteredByType

  const filteredByTags = tagFilter
    ? filteredByCategory.filter((post) => {
        if (Array.isArray(tagFilter)) {
          return tagFilter.some((tag) => post.tags.includes(tag))
        } else {
          return post.tags.includes(tagFilter)
        }
      })
    : filteredByCategory

  return (
    <SectionContainer padding="large">
      <Heading text={heading} />
      <div className="space-y-6">
        <ul className="space-y-6">
          {filteredByTags.length === 0 && 'No posts found.'}
          {filteredByTags.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, content_type } = frontMatter
            return (
              <li key={slug} className="group no-arrow py-2">
                <article className="flex flex-col">
                  {date ? (
                    <time
                      className="mb-0 pb-0 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400"
                      dateTime={date}
                    >
                      {formatDateShort(date)}
                    </time>
                  ) : null}
                  <div className="mt-0 flex items-center gap-x-2 pb-2">
                    <Link href={`/${slug}`} className="text-gray-900 dark:text-gray-200">
                      <h3 className="whitespace-nowrap pt-2 text-3xl font-bold tracking-tight hover:underline">
                        {title}
                      </h3>
                    </Link>
                    {content_type ? <Badge text={content_type} /> : null}
                  </div>
                  {tags ? (
                    <div className="flex items-baseline gap-x-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  ) : null}
                </article>
              </li>
            )
          })}
        </ul>
        <div className="mt-2">
          {filteredByTags.length > MAX_DISPLAY && (
            <LinkArrow text="View All" direction="right" href={`/posts`} />
          )}
        </div>
      </div>
    </SectionContainer>
  )
}
