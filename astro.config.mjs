import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://travelwithpola.netlify.app",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ar"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
