import SLPApi from '../utils/SLPApi'
import useActionState, { ActionStage } from './useActionState'

interface UseLoginActionOptions {
    onLoginSuccess?: (authToken: string) => void
    onLoginFail?: (message: string) => void
}

export default function useLoginAction(options: UseLoginActionOptions) {
    const [state, dispatch] = useActionState()

    const login = async (authCode: string) => {
        try {
            dispatch({ type: ActionStage.LOADING })

            const response = await SLPApi.login(authCode)

            dispatch({ type: ActionStage.SUCCESS })

            if (options.onLoginSuccess) {
                options.onLoginSuccess(response.token)
            }
        } catch (ex: any) {
            console.error(
                `useLoginAction: Failed to authenticate Spotify Auth Code (${ex.message})`
            )

            dispatch({ type: ActionStage.ERROR, payload: ex.message })

            if (options.onLoginFail) {
                options.onLoginFail(ex.message)
            }
        }
    }

    return [state, login] as const
}
