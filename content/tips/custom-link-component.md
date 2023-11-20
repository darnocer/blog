---
title: Custom Next.js Link Component
summary: Automatically handle external links in a new window
date: 2023-11-03
aliases: 
tags:
  - nextjs
draft: false
type:
  - tip
layout:
  - PostSimple
category:
  - next
---

<Callout title="When this is useful" text="Create a custom `Link` component for your Next.js app that automatically handles both internal and external links, such as opening external links in a new tab by default. " />

The native Next.js `<Link />` component handles internal routing, whereas external links should use `<a></a>` tags.

```js
import Link from 'next/link'
```

Create a custom component to automatically handle both:

```js
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink | isAnchorLink) {
    return <Link href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
```

You can now import your custom Link component in place of the native link component as use it as normal:

```js
import Link from '@/components/Link'
```
