import Link from '@/components/Link'
import LinkArrow from './LinkArrow'
import { useRouter } from 'next/router'

export default function Pagination({ totalPages, currentPage }) {
  const router = useRouter()

  // Correctly construct the base path, ensuring it doesn't include dynamic segments
  const basePath = router.asPath.replace(/\/page\/\d+$/, '') // Adjusted to use `asPath` and correct regex

  // Determine the correct link for the "Previous" button
  const prevPageLink = currentPage - 1 === 1 ? basePath : `${basePath}/page/${currentPage - 1}`
  // Determine the correct link for the "Next" button
  const nextPageLink = `${basePath}/page/${currentPage + 1}`

  const prevPage = currentPage > 1
  const nextPage = currentPage < totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {prevPage ? (
          <LinkArrow text="Previous" direction="left" href={prevPageLink} />
        ) : (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled>
            Previous
          </button>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {nextPage ? (
          <LinkArrow text="Next" direction="right" href={nextPageLink} />
        ) : (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled>
            Next
          </button>
        )}
      </nav>
    </div>
  )
}
