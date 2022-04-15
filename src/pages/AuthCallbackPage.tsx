import { VStack } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'
import AuthoriserText from '../components/AuthoriserText'
import useSpotifyAuthoriser from '../hooks/useSpotifyAuthoriser'

export default function AuthCallbackPage(): JSX.Element {
    const loginState = useSpotifyAuthoriser()

    return (
        <VStack spacing={5}>
            <Spinner size="lg" />
            <AuthoriserText loginState={loginState} />
        </VStack>
    )
}
