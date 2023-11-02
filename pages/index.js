import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'

import RecentPosts from '@/layouts/RecentPosts'
import TagList from '@/components/TagList'

import PageTitle from '@/components/PageTitle'
import pageContent from '@/data/pageContent'

export async function getStaticProps() {
  const blogs = await getAllFilesFrontMatter('blog')
  const tips = await getAllFilesFrontMatter('tips')
  const tags = await getAllTags('tips')

  return { props: { blogs, tags, tips } }
}

export default function Home({ blogs, tips, tags }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* <PageTitle>{pageContent.home.title}</PageTitle> */}
      <TagList tags={tags} heading={pageContent.home.tagHeading} />
      <RecentPosts posts={tips} directory="tips" heading={pageContent.home.tipHeading} />
      {/* {siteMetadata.newsletter.provider !== '' && <NewsletterForm />} */}
    </>
  )
}
