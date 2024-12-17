import React from 'react'
import Link from 'next/link'
import LogoDark from '@/data/logo.svg'
import LogoLight from '@/data/logo-light.svg'
import siteMetadata from '@/data/siteMetadata'

const Logo = () => {
  return (
    <Link href="/" aria-label={siteMetadata.headerTitle}>
      <div style={{ width: '75px' }} className="hover:cursor-pointer">
        <div className="block dark:hidden">
          <LogoLight style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div className="hidden dark:block">
          <LogoDark style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </Link>
  )
}

export default Logo
