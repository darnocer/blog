import React from 'react'
import LinkArrow from './LinkArrow'
import { useRouter } from 'next/router'

export default function Breadcrumbs() {
  // const router = useRouter()
  // const directory = router.pathname.split('/')[1]
  // const text = directory === 'blog' ? 'Back to Blog' : 'Back to Tips'
  // const href = directory === 'blog' ? '/blog' : '/tips'

  return <LinkArrow text="Back to All Posts" direction="left" href="/posts" />
}
