/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import PageTitle from './PageTitle'
import CodeContainer from './CodeContainer'
import Callout from './Callout'
import Heading from './Heading'
import WebflowComponentIcon from './icons/webflow-component'
import InteractionIcon from './icons/interaction-icon'

export const MDXComponents = {
  Image,
  TOCInline,
  PageTitle,
  CodeContainer,
  Callout,
  Heading,
  WebflowComponentIcon,
  InteractionIcon,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
