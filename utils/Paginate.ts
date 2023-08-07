type Props = {
  currentPage: number
  totalPages: number
}

const Paginate = (props: Props) => {
  const { currentPage, totalPages } = props

  const pagesToShow= 1 
  const ellipsisNumberPage = 2

  const showPagesWithoutEllipsisNumber =
    totalPages <= pagesToShow * 2 + ellipsisNumberPage * 2

  if (showPagesWithoutEllipsisNumber) {
    // Pages numbers without ellipsis if total pages are small
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  // Page numbers with ellipsis
  const pages = []
  const startPage = Math.max(1, currentPage - pagesToShow)
  const endPage = Math.min(totalPages, currentPage + pagesToShow)

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  const needEllipsisBefore = startPage > ellipsisNumberPage + 1
  if (needEllipsisBefore) {
    // Add an ellipsis before the first page number
    pages.unshift('...')
  }

  const needEllipsisAfter = endPage < totalPages - ellipsisNumberPage
  if (needEllipsisAfter) {
    // Add an ellipsis after the last page number
    pages.push('...')
  }

  return pages
}
export default Paginate;