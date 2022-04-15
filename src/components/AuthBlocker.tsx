import React from 'react'
import { Navigate } from 'react-router'
import useAuth from '../hooks/useAuth'

export function AuthBlocker({
    children,
}: {
    children: React.ReactElement
}): JSX.Element {
    const { isAuthorised } = useAuth()

    if (!isAuthorised) {
        return <Navigate to="/login" replace />
    }

    return children
}
