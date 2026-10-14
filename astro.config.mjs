import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://malak371.github.io/portfolio-website/
// If the repo is renamed to Malak371.github.io or a custom domain is added,
// set `base` to '/' and update `site`. SITE_URL / SITE_BASE override both
// (used by the Netlify deploy previews, which serve from the root).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://malak371.github.io',
  base: process.env.SITE_BASE ?? '/portfolio-website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
