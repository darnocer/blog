import React from 'react'
import Image from 'next/image'
import cardData from '@/data/cardData'
import Link from '@/components/Link'
import Heading from '@/components/Heading'
import SectionContainer from './SectionContainer'

const CardGrid = ({ heading }) => {
  return (
    <SectionContainer padding="large" container="medium">
      <Heading level="h2" text={heading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 sm:py-6 auto-rows-fr">
        {cardData.map(({ title, link, icon, status }, index) => {
          const isDisabled = status === 'disabled'

          return (
            <Link href={link} key={index}>
              <div
                className={`ease relative flex flex-col justify-between rounded-lg border px-4 py-6 shadow-lg transition-all duration-200 dark:bg-black bg-black bg-opacity-80 border-gray-800 hover:border-black dark:border-gray-300/20 dark:hover:border-gray-400/40 cursor-pointer h-full
                ${
                  isDisabled
                    ? 'cursor-not-allowed'
                    : 'hover:border-gray-600/40 hover:shadow-none hover:bg-gray-700 dark:hover:bg-gray-850'
                }`}
              >
                {isDisabled && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity hover:opacity-100">
                    Coming Soon
                  </div>
                )}
                <div className="text-3xl mb-4">
                  {icon.startsWith('/') ? (
                    <Image src={icon} alt={title} width={32} height={32} />
                  ) : (
                    <span>{icon}</span>
                  )}
                </div>
                <h3 className="text-lg font-sans font-bold text-gray-100 dark:text-gray-100">
                  {title}
                </h3>
              </div>
            </Link>
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default CardGrid
