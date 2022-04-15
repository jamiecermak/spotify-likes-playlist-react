import { Button } from '@chakra-ui/button'
import { Divider, Heading, Text, VStack } from '@chakra-ui/layout'
import { VscGithub } from 'react-icons/vsc'
import Card from '../components/Card'
import SignInAlert from '../components/SignInAlert'
import SignInButton from '../components/SignInButton'
import SLPProcessSteps from '../components/SLPProcessSteps'

export default function LoginPage(): JSX.Element {
    return (
        <Card>
            <VStack alignItems="start">
                <SignInAlert />
                <VStack alignItems="center" mb={3} w="100%">
                    <Heading>Spotify Likes Playlist</Heading>
                    <Button
                        leftIcon={<VscGithub size="18" />}
                        size="sm"
                        variant="link"
                    >
                        jamiecermak/spotify-likes-playlist
                    </Button>
                </VStack>
                <SLPProcessSteps />
                <Divider borderStyle="dashed" />
                <Text
                    fontSize="sm"
                    color="blackAlpha.500"
                    textAlign="center"
                    w="100%"
                >
                    Sound good? Get Started Now.
                </Text>

                <SignInButton size="lg" width="100%" colorScheme="green" />
            </VStack>
        </Card>
    )
}
