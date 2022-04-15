import Icon from '@chakra-ui/icon'
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/layout'
import { ComponentProps } from 'react'
import { FaCheck } from 'react-icons/fa'
import TimeAgo from 'react-timeago'
import SyncNowButton from './SyncNowButton'

interface SyncActiveProps extends ComponentProps<typeof HStack> {
    lastSync: string
}

export default function SyncActive({ lastSync, ...props }: SyncActiveProps) {
    return (
        <HStack {...props} spacing={4}>
            <Box
                as={Center}
                width="48px"
                height="48px"
                rounded="full"
                border="2px solid"
                borderColor="green.500"
                bgColor="green.50"
            >
                <Icon as={FaCheck} color="green.500" />
            </Box>
            <VStack flexGrow="1" maxWidth="80%" alignItems="start" spacing={0}>
                <Text fontSize="lg" fontWeight="bold">
                    Syncing Active
                </Text>
                <Text fontSize="sm">
                    Last updated <TimeAgo date={lastSync} />
                </Text>
            </VStack>
            <SyncNowButton />
        </HStack>
    )
}
