import Link from '@/components/Link'
import LinkArrow from './LinkArrow'

export default function Pagination({ totalPages, currentPage, directory }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <LinkArrow
            text="Previous"
            direction="left"
            href={
              currentPage - 1 === 1 ? `/${directory}/` : `/${directory}/page/${currentPage - 1}`
            }
          />
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <LinkArrow
            text="Next"
            direction="right"
            href={
              currentPage - 1 === 1 ? `/${directory}/` : `/${directory}/page/${currentPage + 1}`
            }
          />
        )}
      </nav>
    </div>
  )
}
