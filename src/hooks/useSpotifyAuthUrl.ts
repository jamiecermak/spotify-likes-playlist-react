import queryString from 'query-string'
import { useMemo } from 'react'

function buildAuthUrl() {
    return queryString.stringifyUrl({
        url: 'https://accounts.spotify.com/authorize',
        query: {
            response_type: 'code',
            client_id: import.meta.env.VITE_SLP_SPOTIFY_CLIENT_ID,
            scope: 'user-read-private playlist-modify-private playlist-read-private user-library-read playlist-modify-public',
            redirect_uri: import.meta.env.VITE_SLP_APP_URL + '/auth/callback',
        },
    })
}

export default function useSpotifyAuthUrl() {
    const authUrl = useMemo<string | null>(() => {
        return buildAuthUrl()
    }, [])

    return authUrl
}
