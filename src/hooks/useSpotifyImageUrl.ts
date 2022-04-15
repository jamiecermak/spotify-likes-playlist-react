import { useMemo } from 'react'
import { SpotifyImage } from '../utils/SLPApi'

export default function useSpotifyImageUrl(
    images: SpotifyImage[]
): string | null {
    const imageUrl = useMemo(() => {
        if (images.length === 0) {
            return null
        }

        return images[0].url
    }, [images])

    return imageUrl
}
