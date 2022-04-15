import { ButtonGroup } from '@chakra-ui/button'
import { Divider, VStack } from '@chakra-ui/layout'
import Card from '../components/Card'
import DisableSyncButton from '../components/DisableSyncButton'
import RefreshButton from '../components/RefreshButton'
import SignOutButton from '../components/SignOutButton'
import SpotifyPlaylist from '../components/SpotifyPlaylist'
import SyncActive from '../components/SyncActive'
import UserProfileHeader from '../components/UserProfileHeader'
import { AccountInfo } from '../utils/SLPApi'

type SyncActiveDashboardProps = {
    accountInfo: AccountInfo
}

export default function SyncActiveDashboardPage({
    accountInfo,
}: SyncActiveDashboardProps): JSX.Element {
    return (
        <Card>
            <VStack alignItems="start">
                <UserProfileHeader
                    accountInfo={accountInfo}
                    width="100%"
                    pb="2"
                >
                    <RefreshButton />
                    <SignOutButton />
                </UserProfileHeader>

                <Divider borderStyle="dashed" />
                {accountInfo.playlist && (
                    <SpotifyPlaylist
                        playlist={accountInfo.playlist}
                        w="100%"
                        py={2}
                    />
                )}

                <Divider borderStyle="dashed" />
                <SyncActive
                    lastSync={accountInfo.last_sync}
                    width="100%"
                    py={2}
                />

                <Divider borderStyle="dashed" />
                <ButtonGroup pt="2" w="100%">
                    <DisableSyncButton
                        size="lg"
                        width="100%"
                        colorScheme="gray"
                    />
                </ButtonGroup>
            </VStack>
        </Card>
    )
}
