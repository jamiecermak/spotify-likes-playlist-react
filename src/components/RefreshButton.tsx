import { IconButton } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/tooltip'
import { FaUndo } from 'react-icons/fa'
import useAccountInfo from '../hooks/useAccountInfo'

export default function RefreshButton() {
    const accountInfo = useAccountInfo()

    const onRefresh = () => accountInfo.refetch()

    return (
        <Tooltip label="Refresh">
            <IconButton
                aria-label="Refresh"
                variant="ghost"
                isRound
                icon={<FaUndo size={16} />}
                colorScheme="blackAlpha"
                isLoading={accountInfo.isFetching}
                onClick={onRefresh}
            />
        </Tooltip>
    )
}
