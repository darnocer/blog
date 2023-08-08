import React from 'react'
import Link from '@/components/Link'
import LinkArrow from './LinkArrow'

export default function Breadcrumbs() {
  return (
    <Link className="flex text-primary-500 underline" href="/blog">
      <LinkArrow direction="left" /> Back
    </Link>
  )
}
