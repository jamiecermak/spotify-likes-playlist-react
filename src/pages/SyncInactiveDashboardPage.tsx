import { ButtonGroup } from '@chakra-ui/button'
import { Divider, VStack } from '@chakra-ui/layout'
import Card from '../components/Card'
import EnableSyncButton from '../components/EnableSyncButton'
import RefreshButton from '../components/RefreshButton'
import SignOutButton from '../components/SignOutButton'
import SyncInactive from '../components/SyncInactive'
import UserProfileHeader from '../components/UserProfileHeader'
import { AccountInfo } from '../utils/SLPApi'

type SyncInactiveDashboardProps = {
    accountInfo: AccountInfo
}

export default function SyncInactiveDashboardPage({
    accountInfo,
}: SyncInactiveDashboardProps): JSX.Element {
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
                <SyncInactive width="100%" py={2} />
                <Divider borderStyle="dashed" />
                <ButtonGroup pt="2" w="100%">
                    <EnableSyncButton
                        size="lg"
                        width="100%"
                        colorScheme="green"
                    />
                </ButtonGroup>
            </VStack>
        </Card>
    )
}
