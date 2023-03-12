import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://beer-tech-group.github.io',
  integrations: [preact(), mdx(), tailwind(), compress(), robotsTxt(), sitemap({
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date(),
    i18n: {
      defaultLocale: 'it',
      locales: {
        it: 'it-IT'
      }
    }
  }), image()]
});