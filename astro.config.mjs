import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://malak371.github.io/portfolio-website/
// If the repo is renamed to Malak371.github.io or a custom domain is added,
// set `base` to '/' and update `site`.
export default defineConfig({
  site: 'https://malak371.github.io',
  base: '/portfolio-website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
