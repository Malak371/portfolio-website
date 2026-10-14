# Portfolio website

Personal portfolio of Malak Abdelhakim, built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

**Live site:** https://malak371.github.io/portfolio-website/

## Editing content

All text lives in [`src/data/site.yaml`](src/data/site.yaml): profile, featured projects, skills and experience. Add or reorder projects there; no layout code needs to change.

- **Project screenshots** go in `src/assets/projects/` and are referenced by file name (`image: my-project.png`). They're converted to WebP and resized at build time.
- **Resume:** put the PDF at `public/resume.pdf`. The Resume button appears once the file exists.
- **Placeholders:** any value starting with `TODO` is highlighted in yellow on the page, and CI prints a warning while any remain.
- **Icons and preview image:** `public/favicon.svg` is the source. Run `node scripts/make-icons.mjs` to regenerate the PNG favicons and `public/og.png`.

## Development

Requires Node 22.12+.

```bash
npm install
npm run dev        # http://localhost:4321/portfolio-website/
npm run build      # outputs dist/
npm run preview    # serve the production build
npm run check:html # validate the built HTML
```

## Deployment

[`.github/workflows/site.yml`](.github/workflows/site.yml) runs on every push and pull request. It builds the site, validates the HTML, and checks every link with [lychee](https://lychee.cli.rs) (exclusions are in [`lychee.toml`](lychee.toml)). Pushes to `main` are then deployed to GitHub Pages.

## Adding a custom domain later

1. Buy a domain from any registrar (for example Cloudflare, Namecheap or Porkbun).
2. At the registrar, add DNS records:
   - For a root domain (`example.com`), add four `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. Optionally also add `AAAA` records to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`.
   - For `www.example.com`, add a `CNAME` record pointing to `malak371.github.io`.
3. Recommended: verify the domain under GitHub **Settings → Pages → Add a domain** (your account settings, not the repo). This stops anyone else from claiming it.
4. In this repo, open **Settings → Pages → Custom domain**, enter the domain and save. Wait for the DNS check to pass, then tick **Enforce HTTPS** (the certificate can take up to an hour).
5. In `astro.config.mjs`, set `site` to `https://example.com` and `base` to `'/'`. Also remove the GitHub Pages URL exclusion from `lychee.toml`, then push to `main`.
6. Update the repo's About link and your GitHub profile README to the new URL.
