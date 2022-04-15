import { useToast } from '@chakra-ui/toast'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { resetWebClient, setAPIAuthToken } from '../utils/WebClient'

type AuthProviderProps = {
    children: React.ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const toast = useToast()
    const navigate = useNavigate()
    const [isAuthorised, setIsAuthorised] = useState(false)

    const setAuthToken = (authToken: string) => {
        setAPIAuthToken(authToken)
        setIsAuthorised(true)
    }

    const onLogout = () => {
        resetWebClient()
        setIsAuthorised(false)
        navigate('/login')
        toast({
            title: 'Signed out',
            description: 'Signed out of Spotify Likes Playlist',
            status: 'info',
            position: 'top',
        })
    }

    return (
        <AuthContext.Provider value={{ isAuthorised, setAuthToken, onLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
