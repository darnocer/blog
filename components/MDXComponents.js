/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from '@/components/blocks/Image'
import CustomLink from '@/components/links/Link'
import TOCInline from '@/components/post/TOCInline'
import Pre from '@/components/blocks/Pre'
import { BlogNewsletterForm } from '@/components/blocks/NewsletterForm'
import PageTitle from '@/components/headings/PageTitle'
import CodeContainer from '@/components/layout/CodeContainer'
import Callout from '@/components/blocks/Callout'
import Heading from '@/components/headings/Heading'
import DefinitionCallout from '@/components/blocks/DefinitionCallout'
import Button from '@/components/links/Button'
import Status from '@/components/blocks/Status'
import Testimonial from '@/components/blocks/Testimonial'
import CardGrid from '@/components/blocks/CardGrid'

import homeCardData from '@/data/cards/homeCardData'
import workCardData from '@/data/cards/workCardData'

const cardDataMap = {
  home: homeCardData,
  work: workCardData,
}

export const MDXComponents = {
  Image,
  TOCInline,
  PageTitle,
  CodeContainer,
  Callout,
  Heading,
  DefinitionCallout,
  Button,
  Status,
  CardGrid: ({ type = 'work', ...props }) => <CardGrid {...props} data={cardDataMap[type] || []} />,
  Testimonial,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    if (!layout) {
      return <div {...rest} />
    }
    const Layout = require(`./layout/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
