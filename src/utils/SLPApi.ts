import { AxiosResponse } from 'axios'
import { JWTToken, WebClient } from './WebClient'

interface ServerResponseData<T = Record<string, never>> {
    success: boolean
    message: string | null
    data: T
}

interface LoginRequestData {
    spotify_code: string
}

export type SpotifyImage = {
    width: number | null
    height: number | null
    url: string
}

export type SpotifyPlaylist = {
    id: string
    name: string
    spotify_url: string
    total_tracks: number
    images: SpotifyImage[]
    followers: number
}

export interface AccountInfo {
    id: string
    display_name: string
    sync_active: boolean
    last_sync: string
    images: SpotifyImage[]
    playlist: SpotifyPlaylist | null
}

export interface LoginResponse {
    token: JWTToken
}

function transformServerResponse<T>(
    response: AxiosResponse<ServerResponseData<T>>,
    genericError: string
): ServerResponseData<T> {
    if (response.status === 401) {
        throw new Error('Unauthorised Request. Try logging back in.')
    }

    if (response.status === 403) {
        throw new Error('Unauthorised Request')
    }

    if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`)
    }

    if (!response.data.success) {
        if (response.data.message === null) {
            throw new Error(genericError)
        }

        throw new Error(response.data.message)
    }

    return response.data
}

function transformResponse<T>(
    response: AxiosResponse<ServerResponseData<T>>,
    genericError: string
): T {
    const serverResponse = transformServerResponse(response, genericError)

    return serverResponse.data
}

export default class SLPApi {
    static async login(spotifyAuthCode: string): Promise<LoginResponse> {
        return WebClient.post<
            any,
            AxiosResponse<ServerResponseData<LoginResponse>>,
            LoginRequestData
        >(`/login`, {
            spotify_code: spotifyAuthCode,
        })
            .catch(() => {
                throw new Error(
                    'Could not communicate with spotify-likes-playlist. Check your internet connection.'
                )
            })
            .then((response) => transformResponse(response, 'Failed to login.'))
    }

    static async getAccountInfo(): Promise<AccountInfo> {
        return WebClient.get<ServerResponseData<AccountInfo>>(`/account-info`)
            .catch(() => {
                throw new Error(
                    'Could not communicate with spotify-likes-playlist. Check your internet connection.'
                )
            })
            .then((response) =>
                transformResponse(
                    response,
                    'Failed to retrieve your account information.'
                )
            )
    }

    static async enableSync(): Promise<ServerResponseData> {
        return WebClient.post<ServerResponseData>(`/enable-sync`)
            .catch(() => {
                throw new Error(
                    'Could not communicate with spotify-likes-playlist. Check your internet connection.'
                )
            })
            .then((response) =>
                transformServerResponse(
                    response,
                    'Failed to enable syncing for your account.'
                )
            )
    }

    static async disableSync(): Promise<ServerResponseData> {
        return WebClient.post<ServerResponseData>(`/disable-sync`)
            .catch(() => {
                throw new Error(
                    'Could not communicate with spotify-likes-playlist. Check your internet connection.'
                )
            })
            .then((response) =>
                transformServerResponse(
                    response,
                    'Failed to disable syncing for your account.'
                )
            )
    }

    static async initManualSync(): Promise<ServerResponseData> {
        return WebClient.post<ServerResponseData>(`/initiate-sync`)
            .catch(() => {
                throw new Error(
                    'Could not communicate with spotify-likes-playlist. Check your internet connection.'
                )
            })
            .then((response) =>
                transformServerResponse(
                    response,
                    'Failed to initiate a sync for your account. Try again later.'
                )
            )
    }
}
