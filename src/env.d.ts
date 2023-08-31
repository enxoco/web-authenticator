/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AKEYLESS_KEY_PATH: string
    readonly VITE_AKEYLESS_ACCESS_ID: string
    readonly VITE_AKEYLESS_ACCESS_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }