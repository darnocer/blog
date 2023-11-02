import React from 'react'
import Link from '@/components/Link'
import LinkArrow from './LinkArrow'
import { useRouter } from 'next/router'

export default function Breadcrumbs() {
  const router = useRouter()

  const directory = router.pathname.split('/')[1]

  return <LinkArrow text="Back" direction="left" href={`/${directory}`} />
}
