import React from 'react'
import LinkArrow from './LinkArrow'
import { useRouter } from 'next/router'

export default function Breadcrumbs() {
  const router = useRouter()

  const directory = router.pathname.split('/')[1]
  const text = directory === 'blog' ? 'All Posts' : 'All Tips'
  const href = directory === 'blog' ? '/posts' : '/tips'
  return <LinkArrow text={text} direction="left" href={href} />
}
