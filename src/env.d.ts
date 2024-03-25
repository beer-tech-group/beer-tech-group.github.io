/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/image/client" />

declare module "*.svg" {
  const content: Fragment;
  export default content;
}
