import { IconButton } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'
import { Tooltip } from '@chakra-ui/tooltip'
import { FaSync } from 'react-icons/fa'
import useManualSyncAction from '../hooks/useManualSyncAction'

export default function SyncNowButton() {
    const toast = useToast()

    const onSuccess = () => {
        toast({
            title: 'Syncing started',
            description:
                'Syncing has been started successfully. It can take up to 10 minutes for your playlist to be updated.',
            status: 'success',
            isClosable: true,
            position: 'top',
        })
    }

    const onFail = (message: string) => {
        toast({
            title: 'Syncing failed',
            description: `Syncing failed to start (${message})`,
            status: 'error',
            isClosable: true,
            position: 'top',
        })
    }

    const [state, initateSync] = useManualSyncAction({
        onSuccess,
        onFail,
    })

    return (
        <Tooltip label="Sync Now">
            <IconButton
                aria-label="Sync Now"
                variant="ghost"
                isRound
                icon={<FaSync size={16} />}
                colorScheme="blackAlpha"
                isLoading={state.isLoading}
                onClick={initateSync}
            />
        </Tooltip>
    )
}
