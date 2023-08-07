import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Photo } from './types'

type PhotosTypes = {
  rover: string
  sol?: number | null
  earthDate?: string | null
  camera?: string | null
  currentPage?: number
}

const api_key = process.env.NEXT_PUBLIC_NASA_API_KEY

const usePhotos = ({
  rover,
  sol,
  earthDate,
  camera,
  currentPage,
}: PhotosTypes) => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getPhotos = async () => {
    setLoading(true)
    setError(null)

    try {
      const params = {
        sol: sol || null,
        earth_date: earthDate || null,
        camera: camera || null,
        page: currentPage || 1,
      }

      const response: AxiosResponse = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${api_key}`,
        { params }
      )

      setPhotos(response.data.photos)
    } catch (error) {
      setError('Error fetching photos')
    } finally {
      setLoading(false)
    }
  }

  const totalPhotos = photos[0]?.rover?.total_photos

  return {
    photos,
    loading,
    error,
    getPhotos,
    totalPhotos,
  }
}

export default usePhotos
