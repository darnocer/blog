import React from 'react'
import Link from '@/components/Link'
import LinkArrow from './LinkArrow'
import { useRouter } from 'next/router'

export default function Breadcrumbs() {
  const router = useRouter()
  const isTipsPage = router.pathname.startsWith('/tips')

  return (
    <Link className="mb-6 flex text-primary-500 underline" href={isTipsPage ? '/tips' : '/blog'}>
      <LinkArrow direction="left" /> Back
    </Link>
  )
}
