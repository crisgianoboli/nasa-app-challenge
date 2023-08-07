import {FC} from 'react'
import { Button, Flex, Box, Text } from '@chakra-ui/react'
import generatePaginationNumbers from '@/utils/Paginate'
import StatPhotos from './StatPhotos'

interface PaginationTypeProps {
  currentPage: number
  totalItems: number
  totalPhotos: number
  itemsPerPage: number
  onPageChange: (pageNumber: number) => void
}

const Pagination: FC<PaginationTypeProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  totalPhotos,
  onPageChange,
}) => {
  const totalPages =
    totalItems < itemsPerPage ? 1 : Math.ceil(totalPhotos / itemsPerPage)

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber)
    }
  }

  return (
    <Box w="full" px={4} pt={10} pb={5}>
      <StatPhotos totalPages={totalPages} totalPhotos={totalPhotos}/>
      <Flex w="full" justifyContent="center" my={10} gap={5}>
        <Button
          onClick={() => handlePageClick(currentPage - 1)}
          isDisabled={currentPage === 1}
          color={'black'}
        >
          Previous
        </Button>
        {generatePaginationNumbers({
          currentPage,
          totalPages,
        }).map((page, index) =>
          typeof page === 'number' ? (
            <Button
              key={index}
              onClick={() => handlePageClick(page)}
              isDisabled={currentPage === page}
              color={'black'}
            >
              {page}
            </Button>
          ) : (
            <Button key={index} disabled color={'black'}>
              {page}
            </Button>
          )
        )}
        <Button
          onClick={() => handlePageClick(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          color={'black'}
        >
          Next
        </Button>
      </Flex>
    </Box>
  )
}

export default Pagination
