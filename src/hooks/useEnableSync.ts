import { useMutation } from 'react-query'
import SLPApi from '../utils/SLPApi'

export default function useEnableSync() {
    const enableSync = useMutation('enable-sync', SLPApi.enableSync)

    return enableSync
}
