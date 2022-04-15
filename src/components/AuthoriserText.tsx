import { Text } from '@chakra-ui/layout'
import { ComponentProps, useMemo } from 'react'
import { ActionState } from '../hooks/useActionState'

interface AuthoriserTextProps extends ComponentProps<typeof Text> {
    loginState: ActionState
}

export default function AuthoriserText({
    loginState,
    ...props
}: AuthoriserTextProps) {
    const message = useMemo(() => {
        if (loginState.isError) {
            return `Failed to login (${loginState.errorMessage})`
        }

        if (loginState.isSuccess) {
            return 'Signed in. Redirecting...'
        }

        return 'Signing in to Spotify...'
    }, [loginState])

    return <Text {...props}>{message}</Text>
}
