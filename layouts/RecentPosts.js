import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
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
    <SectionContainer padding="xlarge">
      <Heading text={heading} />
      <div className="space-y-6">
        <ul className="space-y-6">
          {filteredByTags.length === 0 && 'No posts found.'}
          {filteredByTags.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, content_type } = frontMatter
            return (
              <li key={slug} className="group no-arrow py-2">
                <article className="flex flex-col">
                  <Link href={`/${slug}`} className="text-gray-900 dark:text-gray-100">
                    <div className="flex items-center gap-x-2 pt-1 pb-2">
                      <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-gray-800 duration-300 ease-in hover:underline dark:text-gray-200">
                        {title}
                      </h3>
                      <Badge text={content_type.join(', ')} />
                    </div>
                    {tags ? (
                      <div className="flex items-baseline gap-x-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    ) : null}
                  </Link>
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
