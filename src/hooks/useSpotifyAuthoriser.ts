import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import useAuth from './useAuth'
import useLoginAction from './useLoginAction'

export default function useSpotifyAuthoriser() {
    const { setAuthToken, isAuthorised } = useAuth()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const [loginState, login] = useLoginAction({
        onLoginSuccess: setAuthToken,
        onLoginFail: (authErrorMessage) => {
            navigate('/login', {
                state: {
                    authErrorMessage,
                },
            })
        },
    })

    useEffect(() => {
        const authCode = searchParams.get('code')

        if (authCode == null) {
            // No Auth
            navigate('/login', {
                state: {
                    authErrorMessage:
                        'No auth code provided. Try signing in again.',
                },
            })

            return
        }

        login(authCode).catch(() => {
            navigate('/login', {
                state: {
                    authErrorMessage: 'Failed to sign in. Try again later.',
                },
            })
        })
    }, [])

    useEffect(() => {
        if (isAuthorised) {
            navigate('/')
        }
    }, [isAuthorised])

    return loginState
}
