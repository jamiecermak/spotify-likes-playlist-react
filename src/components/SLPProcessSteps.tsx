import {
    Box,
    Center,
    Divider,
    HStack,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/layout'
import { ComponentProps, PropsWithChildren } from 'react'

interface ProcessItemProps
    extends PropsWithChildren<Pick<ComponentProps<typeof Box>, 'color'>> {
    number: string
}

function ProcessItem({ color, number, children }: ProcessItemProps) {
    return (
        <HStack width="100%" py={2} spacing={4}>
            <Box
                as={Center}
                width="48px"
                height="48px"
                rounded="full"
                border="2px solid"
                borderColor={color}
                bgColor="green.50"
            >
                <Text fontWeight="bold" fontSize="xl" color={color}>
                    {number}
                </Text>
            </Box>
            <Text maxWidth="80%">{children}</Text>
        </HStack>
    )
}

export default function SLPProcessSteps({
    ...props
}: ComponentProps<typeof SimpleGrid>) {
    return (
        <VStack {...props}>
            <ProcessItem color="green.300" number="1">
                Sign in to Spotify Likes Playlist with your Spotify account
            </ProcessItem>
            <Divider borderStyle="dashed" />
            <ProcessItem color="green.300" number="2">
                Create your Public Playlist and begin syncing your tracks
            </ProcessItem>
            <Divider borderStyle="dashed" />
            <ProcessItem color="green.300" number="3">
                Automatically sync your private Liked Songs to a Public Playlist
                every day
            </ProcessItem>
        </VStack>
    )
}
