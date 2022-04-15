import { IconButton } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/tooltip'
import { FaSignOutAlt } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'

export default function SignOutButton() {
    const { onLogout } = useAuth()
    return (
        <Tooltip label="Sign Out">
            <IconButton
                aria-label="Sign Out"
                variant="ghost"
                isRound
                icon={<FaSignOutAlt size={16} />}
                colorScheme="blackAlpha"
                onClick={onLogout}
            />
        </Tooltip>
    )
}
