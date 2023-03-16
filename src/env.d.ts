/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/image/client" />

interface ImportMetaEnv {
  readonly SITE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
