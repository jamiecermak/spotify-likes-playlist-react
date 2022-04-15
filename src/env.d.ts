/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SLP_API_URL: string
    readonly VITE_SLP_APP_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
