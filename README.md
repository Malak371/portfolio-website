# Portfolio website

Personal portfolio of Malak Abdelhakim, built with [Astro](https://astro.build) as a static site and deployed on Netlify.

**Live site:** https://portfolio-website-malak.netlify.app/

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
npm run dev        # http://localhost:4321/
npm run build      # outputs dist/
npm run preview    # serve the production build
npm run check:html # validate the built HTML
```

## Deployment

Netlify builds and deploys every push to `main` and posts a deploy preview on each pull request (settings in [`netlify.toml`](netlify.toml)).

[`.github/workflows/site.yml`](.github/workflows/site.yml) runs on every push and pull request. It builds the site, validates the HTML, and checks every link with [lychee](https://lychee.cli.rs) (exclusions are in [`lychee.toml`](lychee.toml)).

## Adding a custom domain later

1. Buy a domain from any registrar (for example Cloudflare, Namecheap or Porkbun).
2. In Netlify, open the **portfolio-website-malak** project, go to **Domain management → Add a domain**, and enter the domain.
3. Point DNS at Netlify. Choose one option:
   - **Simplest:** let Netlify manage DNS. Netlify shows four nameservers; enter them at your registrar in place of the registrar's own.
   - **Keep DNS at your registrar:**
     - For `www.example.com`, add a `CNAME` record pointing to `portfolio-website-malak.netlify.app`.
     - For the root `example.com`, add an `ALIAS`/`ANAME`/flattened `CNAME` to `apex-loadbalancer.netlify.com` if your registrar supports one. Otherwise add an `A` record to `75.2.60.5`.
4. Wait for DNS to propagate (minutes to a few hours). Netlify issues a free HTTPS certificate automatically; check it under **Domain management → HTTPS**.
5. In `astro.config.mjs`, set `site` to `https://example.com`, update the exclusion in `lychee.toml`, and push to `main`.
6. Update the repo's About link and your GitHub profile README to the new URL.
