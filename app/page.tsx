'use client'

import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Box, Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'

import Pagination from './components/Pagination'
import FilterForm from './components/FilterForm'
import SearchHistory from './components/SearchHistory'
import usePhotos from './hooks/usePhotos'
import { Rover } from './hooks/types'
import PhotosGallery from './components/PhotosGallery'

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const methods = useForm({
    defaultValues: {
      rover: Rover.Curiosity,
      sol: 1000,
      earthDate: new Date().toISOString().split('T')[0],
      camera: null,
    },
  })

  const { photos, loading, error, getPhotos, totalPhotos } = usePhotos({
    rover: methods.watch('rover'),
    sol: methods.watch('sol') ? Number(methods.watch('sol')) : null,
    earthDate: methods.watch('earthDate') || null,
    camera: methods.watch('camera') || null,
    currentPage,
  })

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  const handleFormSubmit = () => {
    getPhotos()
  }

  useEffect(() => {
    getPhotos()
  }, [currentPage])

  return (
    <main>
      <Box bg="gray.900" w="full" h="100vh" color={'black'}>
        <Grid 
          templateAreas={ !isMobile ? `"filter filter" "saved content"`: `"filter" "content"`}
          templateRows={['100vh', '0fr']}
          templateColumns={!isMobile ? ['fr', '18vw 1fr'] : ['1fr']}
          gap={4}
          p={5}
          height="100vh"
        >
          <FormProvider {...methods}>
          <GridItem bg="gray.500" borderRadius="lg" area="filter">
              <FilterForm onSubmit={handleFormSubmit} />
            </GridItem>
            <GridItem bg="gray.500" borderRadius="lg" area="saved" display={!isMobile ? 'block' : 'none'}>
              <SearchHistory />
            </GridItem>
            
          </FormProvider>
          <GridItem bg="gray.500" borderRadius="lg" area="content" overflowY="auto">
            <PhotosGallery loading={loading} error={error} photos={photos}/>
            {photos.length && !loading ? (
              <Flex align="center" w="full" textAlign="center">
                <Pagination
                  currentPage={currentPage}
                  totalItems={photos.length}
                  totalPhotos={totalPhotos}
                  itemsPerPage={25}
                  onPageChange={handlePageChange}
                />
              </Flex>
            ) : null}
          </GridItem>
        </Grid>
      </Box>
    </main>
  )
}

export default Home;