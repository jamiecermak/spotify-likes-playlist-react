import { Alert } from '@chakra-ui/alert'
import { useLocation } from 'react-router'

interface ILocationState {
    signInAlert?: {
        message: string
        status: 'info' | 'warning' | 'success' | 'error'
    }
}

export default function SignInAlert() {
    const location = useLocation()
    const locationState = location.state as ILocationState

    if (!locationState?.signInAlert) {
        return null
    }

    const { status, message } = locationState.signInAlert

    return <Alert status={status}>{message}</Alert>
}
