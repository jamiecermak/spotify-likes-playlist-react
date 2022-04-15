import Icon from '@chakra-ui/icon'
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/layout'
import { ComponentProps } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function SyncInactive({
    ...props
}: ComponentProps<typeof HStack>) {
    return (
        <HStack {...props} spacing={4}>
            <Box
                as={Center}
                width="48px"
                height="48px"
                rounded="full"
                border="2px solid"
                borderColor="red.500"
                bgColor="red.50"
            >
                <Icon as={FaTimes} color="red.500" />
            </Box>
            <VStack flexGrow="1" maxWidth="80%" alignItems="start" spacing={0}>
                <Text fontSize="lg" fontWeight="bold">
                    Syncing Inactive
                </Text>
                <Text fontSize="sm">Never updated</Text>
            </VStack>
        </HStack>
    )
}
