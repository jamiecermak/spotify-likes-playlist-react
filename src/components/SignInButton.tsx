import { Button } from '@chakra-ui/button'
import { ComponentProps, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import useSpotifyAuthUrl from '../hooks/useSpotifyAuthUrl'

export default function SignInButton({
    ...props
}: ComponentProps<typeof Button>) {
    const [isLoading, setIsLoading] = useState(false)
    const spotifyAuthUrl = useSpotifyAuthUrl()

    const handleClick = () => {
        if (spotifyAuthUrl === null) {
            alert('Invalid Spotify Auth Url')
            return
        }

        setIsLoading(true)

        window.location.href = spotifyAuthUrl
    }

    return (
        <Button
            {...props}
            isLoading={isLoading}
            onClick={handleClick}
            leftIcon={<FaSpotify size="24" />}
        >
            Sign in with Spotify
        </Button>
    )
}
