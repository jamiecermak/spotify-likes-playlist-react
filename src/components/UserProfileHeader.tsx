import { Image } from '@chakra-ui/image'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { ButtonGroup } from '@chakra-ui/react'
import { ComponentProps, PropsWithChildren } from 'react'
import useSpotifyImageUrl from '../hooks/useSpotifyImageUrl'
import { AccountInfo } from '../utils/SLPApi'

interface UserProfileProps extends ComponentProps<typeof HStack> {
    accountInfo: AccountInfo
}

export default function UserProfileHeader({
    accountInfo,
    children,
    ...props
}: PropsWithChildren<UserProfileProps>) {
    const profileImageUrl = useSpotifyImageUrl(accountInfo.images)

    return (
        <HStack {...props} spacing="3">
            <Image
                src={profileImageUrl || undefined}
                height="48px"
                width="48px"
                rounded="lg"
            />
            <VStack alignItems="start" spacing="0" flexGrow="1">
                <Text fontSize="lg" fontWeight="bold">
                    Spotify Likes Playlist
                </Text>
                <Text fontSize="sm">
                    Signed in as {accountInfo.display_name}
                </Text>
            </VStack>
            <ButtonGroup ml="auto">{children}</ButtonGroup>
        </HStack>
    )
}
