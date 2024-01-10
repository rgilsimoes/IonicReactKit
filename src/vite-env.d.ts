/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOG_LEVEL: string;
  readonly VITE_API_URL: string;
  readonly VITE_CACHE_EXPIRE_TIME: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
