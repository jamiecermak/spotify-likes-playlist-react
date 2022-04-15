import axios from 'axios'

export type JWTToken = string

export const WebClient = axios.create({
    baseURL: import.meta.env.VITE_SLP_API_URL,
    validateStatus: () => true,
})

export function setAPIAuthToken(authToken: JWTToken) {
    WebClient.defaults.headers.common.Authorization = authToken
}

export function resetWebClient() {
    delete WebClient.defaults.headers.common.Authorization
}
