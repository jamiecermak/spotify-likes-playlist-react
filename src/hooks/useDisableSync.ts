import { useMutation } from 'react-query'
import SLPApi from '../utils/SLPApi'

export default function useDisableSync() {
    const disableSync = useMutation('disable-sync', SLPApi.disableSync)

    return disableSync
}
