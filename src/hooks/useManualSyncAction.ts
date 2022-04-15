import SLPApi from '../utils/SLPApi'
import useActionState, { ActionStage } from './useActionState'

interface UseManualSyncOptions {
    onSuccess?: () => void
    onFail?: (message: string) => void
}

export default function useManualSyncAction(options: UseManualSyncOptions) {
    const [state, dispatch] = useActionState()

    const initiateSync = async () => {
        try {
            dispatch({ type: ActionStage.LOADING })

            await SLPApi.initManualSync()

            dispatch({ type: ActionStage.SUCCESS })

            if (options.onSuccess) {
                options.onSuccess()
            }
        } catch (ex: any) {
            console.error(
                `useManualSyncAction: Failed to initiate manual sync (${ex.message})`
            )

            dispatch({ type: ActionStage.ERROR, payload: ex.message })

            if (options.onFail) {
                options.onFail(ex.message)
            }
        }
    }

    return [state, initiateSync] as const
}
