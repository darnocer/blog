import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatterMultiple } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'

import RecentPosts from '@/layouts/RecentPosts'
import TagList from '@/components/TagList'

import PageTitle from '@/components/PageTitle'
import pageContent from '@/data/pageContent'

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatterMultiple(['blog', 'tips'])
  const tags = await getAllTags('tips', 'blog')

  return { props: { allPosts, tags } }
}

export default function Home({ allPosts, tags }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <TagList tags={tags} heading={pageContent.home.tagHeading} />
      <RecentPosts posts={allPosts} directory="tips" heading={pageContent.home.tipHeading} />
      {/* {siteMetadata.newsletter.provider !== '' && <NewsletterForm />} */}
    </>
  )
}
