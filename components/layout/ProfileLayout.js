'use client'

import Image from 'next/image'
import Link from 'next/link'
import linkBlocks from '@/data/cards/linkBlocks'

import SocialIcon from '@/components/icons/social-icons'

export default function ProfileLayout({ frontMatter }) {
  const { name, avatar, website, linkedin, email, x, instagram, medium, bio } = frontMatter

  return (
    <div className='flex flex-col items-center justify-center px-4 py-12'>
      <div className='group relative mb-6 inline-block'>
        <div className='absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2'>
          <div className='h-[137px] w-[137px] rounded-full bg-gradient-to-r from-accent-500 via-secondary-400 to-tertiary-500 opacity-0 transition-opacity duration-300 group-hover:animate-spin-slow group-hover:opacity-100'></div>
        </div>

        <div className='hover:pointer rounded-full'>
          <Image src={avatar} alt={name} width={125} height={125} className=' rounded-full' />
        </div>
      </div>
      <h1 className='mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>{name}</h1>
      <p className='mb-4 max-w-xl text-center font-medium text-gray-800 dark:text-gray-200'>{bio}</p>
      <div className='mb-6 flex justify-center space-x-3 pt-2'>
        <SocialIcon kind='email' href={`mailto:${email}`} />
        <SocialIcon kind='linkedin' href={linkedin} />
        <SocialIcon kind='x' href={x} />
        <SocialIcon kind='instagram' href={instagram} />
        <SocialIcon kind='medium' href={medium} />
      </div>
      <div className='flex w-full max-w-sm flex-col gap-4'>
        {linkBlocks.map(({ title, url, icon: Icon }, idx) => (
          <Link
            key={idx}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-between rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-850'
          >
            <div className='flex items-center gap-3'>
              <Icon className='h-5 w-5' />
              <span>{title}</span>
            </div>
            <span className='text-sm text-gray-400'>↗</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
