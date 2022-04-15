import { useContext } from 'react'
import { AuthContext, IAuth } from '../context/AuthContext'

export default function useAuth(): IAuth {
    const context = useContext(AuthContext)

    if (context === null) {
        throw new Error('AuthContext access not wrapped in AuthProvider')
    }

    return context
}
