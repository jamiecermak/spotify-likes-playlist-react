import React from 'react'

export interface IAuth {
    setAuthToken: (authToken: string) => void
    onLogout: () => void
    isAuthorised: boolean
}

export const AuthContext = React.createContext<IAuth | null>(null)
