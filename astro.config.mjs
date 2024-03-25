import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://beertechgroup.net",
  integrations: [
    mdx(),
    tailwind(),
    robotsTxt(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it-IT",
        },
      },
    }),
    image(),
    react(),
  ],
});
