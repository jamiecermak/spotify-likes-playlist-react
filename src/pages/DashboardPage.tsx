import { Spinner } from '@chakra-ui/spinner'
import useAccountInfo from '../hooks/useAccountInfo'
import SyncActiveDashboardPage from './SyncActiveDashboardPage'
import SyncInactiveDashboardPage from './SyncInactiveDashboardPage'

export default function DashboardPage(): JSX.Element {
    const { isLoading, data } = useAccountInfo()

    if (isLoading || data == null) {
        return <Spinner size="lg" />
    }

    if (!data.sync_active) {
        return <SyncInactiveDashboardPage accountInfo={data} />
    }

    return <SyncActiveDashboardPage accountInfo={data} />
}
