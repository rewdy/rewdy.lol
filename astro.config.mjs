// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rewdy.lol",
  integrations: [mdx(), sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // This is needed to tell vite to use the new sass api
          api: "modern-compiler", 
        },
      },
    },
  },
});
