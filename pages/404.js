import Link from '@/components/links/Link'

import MetadataWrapper from '@/components/seo/MetadataWrapper'

const PAGE_TITLE = '404'

export default function FourZeroFour() {
  return (
    <MetadataWrapper title={PAGE_TITLE}>
      <div className='flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6'>
        <div className='space-x-2 border-gray-500 pb-8 pt-6 dark:border-gray-700 md:space-y-5 md:border-r-2'>
          <h1 className='text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  md:px-6 md:text-8xl md:leading-14'>
            404
          </h1>
        </div>
        <div className='max-w-md'>
          <p className='mb-4 text-xl font-bold leading-normal text-gray-700 dark:text-gray-300 md:text-2xl'>
            Oops! Not sure where that page went... :)
          </p>
          <Link href='/'>
            <button className='focus:shadow-outline-primary inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow transition-colors duration-200 ease-in hover:bg-primary-700 focus:outline-none dark:hover:bg-primary-500'>
              Go back
            </button>
          </Link>
        </div>
      </div>
    </MetadataWrapper>
  )
}
