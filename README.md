# Sacred Circle — static site

Umbrella brand site for **Sacred Circle** (Calgary) with nested business pages.

## Sitemap

| Path | Page |
|------|------|
| `/index.html` | Sacred Circle hub |
| `/shadow-and-light/index.html` | Shadow & Light Reiki (full, bookable) |
| `/rainbow-roots/index.html` | Rainbow Roots intro |
| `/astrology/index.html` | Astrology Discovery intro |
| `/assets/` | Shared images, CSS, JS |

## Local preview

Open any HTML file via `file://`, or serve the folder:

```bash
cd /workspace/sacred-circle && python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Deploy (Netlify)

1. Create a **new** Netlify site (do not reuse an old project).
2. Publish directory = site root (`sacred-circle/`, containing `index.html`).
3. No build command required (static HTML/CSS/JS only).
4. Relative asset paths work for both `file://` and Netlify.

## Copy placeholders to rewrite

- Hub line on home (`index.html` — “A Calgary home for…”)
- Privacy stubs on all pages
- Soft contact mailto: `hello@sacredcircle.example` (Rainbow Roots & Astrology)
- Shadow & Light About: Training / Approach (`Felicia fills this`)
- Rainbow Roots: ages, hours, location
- Astrology: session formats, practitioner details

## Brand assets

Copied from `/workspace/sl-redesign/assets/`: `brand.jpeg`, `logo-sacred-circle.jpeg`, `felicia.jpg`, `logo-enso.svg`, `logo-enso-light.svg`, `parchment-wash.jpg`.
