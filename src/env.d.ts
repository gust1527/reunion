/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REUNION_SHOW_PHOTOS_LINK: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
