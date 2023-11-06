---
title: Custom Next.js Link Component
summary:
date: 2023-11-02
aliases:
tags:
  - nextjs
draft: true
type:
  - tip
layout:
  - PostSimple
category:
  - next
---

<Callout text="Create a custom `Link` component that handles both internal and external links automatically, such as opening external links in a new tab by default. " />

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

You can now import your custom Link component in place of the native link component:

```js
import Link from '@/components/Link'
```
