import { useQuery } from 'react-query'
import SLPApi from '../utils/SLPApi'

export default function useAccountInfo() {
    const accountInfo = useQuery('account-info', SLPApi.getAccountInfo)

    return accountInfo
}
