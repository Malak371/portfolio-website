import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed on Netlify at the site root. If a custom domain is added, update
// `site` (it's used for the canonical URL, Open Graph tags and the sitemap).
export default defineConfig({
  site: 'https://portfolio-website-malak.netlify.app',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
