import React from 'react'
import Image from 'next/image'
import {
  Box,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react'
import { Photo } from '../hooks/types';

type GallerPhotosProps = {
  loading: boolean;
  photos: Photo[];
  error: string | null
}

const PhotosGallery = (props: GallerPhotosProps) => {
  const { loading, photos, error } = props
  return (
    <Box textAlign="center" py={[0, 0, 0, 5]}>
              {loading ? (
                <Spinner />
              ) : error ? (
                <p>Error: {error}</p>
              ) : photos.length === 0 ? (
                <p>No images found</p>
              ) : (
                <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing={2}>
                  {photos.map((photo) => (
                    <Image
                      key={photo.id}
                      src={photo.img_src}
                      alt={photo.camera.full_name}
                      style={{ borderRadius: '10px' }}
                      width={300}
                      height={300}
                      quality={50}
                    />
                  ))}
                </SimpleGrid>
              )}
            </Box>
  )
}

export default PhotosGallery