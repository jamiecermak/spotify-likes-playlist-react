import { Image } from '@chakra-ui/image'
import {
    AspectRatio,
    Flex,
    HStack,
    Link,
    Text,
    VStack,
} from '@chakra-ui/layout'
import { ComponentProps } from 'react'
import { FaSpotify } from 'react-icons/fa'
import useSpotifyImageUrl from '../hooks/useSpotifyImageUrl'
import { SpotifyPlaylist as SpotifyPlaylistType } from '../utils/SLPApi'

interface SpotifyPlaylistProps extends ComponentProps<typeof VStack> {
    playlist: SpotifyPlaylistType
}

export default function SpotifyPlaylist({
    playlist,
    ...props
}: SpotifyPlaylistProps) {
    const playlistImageUrl = useSpotifyImageUrl(playlist.images)

    return (
        <VStack {...props}>
            {playlistImageUrl ? (
                <Image
                    src={playlistImageUrl}
                    width="50%"
                    rounded="md"
                    boxShadow="md"
                />
            ) : (
                <AspectRatio maxW="50%" ratio={1} bgColor="gray" />
            )}
            <Flex flexDir="column" alignItems="center">
                <Text fontSize="xl" fontWeight="bold">
                    {playlist.name}
                </Text>
                <Text mb={1}>
                    {playlist.total_tracks} Tracks • {playlist.followers}{' '}
                    Followers
                </Text>
                <Link href={playlist.spotify_url} isExternal color="gray.500">
                    <HStack spacing={2}>
                        <FaSpotify size="18" />
                        <Text fontSize="sm" fontWeight="semibold">
                            Open in Spotify
                        </Text>
                    </HStack>
                </Link>
            </Flex>
        </VStack>
    )
}
