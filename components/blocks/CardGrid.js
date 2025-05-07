import React from 'react'
import Image from 'next/image'
import Link from '@/components/links/Link'
import Heading from '@/components/headings/Heading'
import ExternalIcon from '@/components/icons/ui/external.svg'

import homeCardData from '@/data/cards/homeCardData'
import workCardData from '@/data/cards/workCardData'

const cardDataMap = {
  home: homeCardData,
  work: workCardData,
}

const CardGrid = ({ heading, type = 'work' }) => {
  const data = cardDataMap[type] || []

  return (
    <>
      <Heading level='h2' text={heading} />
      <div className='grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {data.map(({ title, link, icon, status }, index) => {
          const isDisabled = status === 'disabled'
          const isExternal = link.startsWith('http')

          return (
            <Link href={isDisabled ? '#' : link} key={index} className='exclude-underline'>
              <div
                className={`group relative flex flex-col justify-between rounded-md border border-tertiary-600/60 p-4 text-gray-850 shadow-md transition-all duration-300 hover:border-tertiary-500/40 hover:text-black dark:border-tertiary-500/70 dark:bg-black dark:text-gray-200 dark:hover:border-tertiary-500 dark:hover:bg-gray-900 dark:hover:text-gray-100 
                ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'} min-h-[150px]`}
              >
                {isDisabled && (
                  <div className='absolute inset-0 flex items-center justify-center rounded-md bg-gray-600 bg-opacity-50 text-lg font-bold uppercase text-accent-600 opacity-0 transition-opacity hover:opacity-100 dark:bg-black dark:bg-opacity-70'>
                    Coming Soon
                  </div>
                )}
                {!isDisabled && isExternal && (
                  <div className='absolute right-2 top-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                    <ExternalIcon />
                  </div>
                )}
                <div className='mb-4 text-3xl'>
                  {React.isValidElement(icon) ? (
                    icon
                  ) : icon.startsWith('/') ? (
                    <Image src={icon} alt={title} width={32} height={32} />
                  ) : (
                    <span>{icon}</span>
                  )}
                </div>
                <h3 className='font-sans text-base font-bold'>{title}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default CardGrid
