# Senith B. — Portfolio Website

A personal portfolio website built with plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies. Drop the files on any static host and it works.

A minimal black/white layout with a single red accent, covering Work (filterable project grid), Case Studies, Services, UX Evangelizing (carousel), About Me, and Contact, plus a `project.html` case-study template. Ships with a dark theme (the default) and a light theme, toggled from the header.

## Structure

```
index.html      Home page (all main sections)
project.html    Project / case-study detail page (?id=1..6)
css/style.css   All styles (CSS variables at the top control the theme)
js/main.js      Shared behavior: nav, scroll-spy, work filters, carousel, image lightbox
js/project.js   Project data + rendering for project.html
images/         Project imagery and UX Evangelizing photos
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths and the URL query param on `project.html` behave normally:
  ```bash
  cd personal-website
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploying

`.github/workflows/deploy-pages.yml` deploys to GitHub Pages on every push to `main`, and can be run manually from the Actions tab. Set **Settings → Pages → Source** to **GitHub Actions** before the first run — the workflow fails with `Get Pages site failed` if Pages hasn't been enabled yet.

It's plain static files, so it also deploys as-is to Netlify, Vercel, Cloudflare Pages, or any basic web host — just upload the folder.

## Content

All six projects in the Work grid are real write-ups. Five are text-only; one (Athirilli) carries images.

- **Project copy**: edit the `projects` array in `js/project.js`. Each entry supports `overview`, `challenge`, `solution`, `highlights`, `results`, and a generic `sections` array (`{heading, body?, items?, links?, image?}`) for everything after that. Set `product` to replace the "Timeline" meta slot, and `sourcingNote` to render the bordered disclosure note under the meta row.
- **Section copy** on the home page is edited directly in `index.html`. Cards in both grids are hand-ordered alphabetically and link to `project.html?id=N`; the Case Studies grid appends `&from=case-studies` so the detail page's back link reads "Back to Case Studies".
- **Images**: project figures are declared per-entry in `js/project.js` (`cover`, `challengeImage`, `solutionImage`, `resultsImage`, or a per-section `image`), each accepting one object or an array. Any figure is clickable and opens in the lightbox.

## Customizing

- **Colors/fonts**: edit the CSS custom properties at the top of `css/style.css` (`:root { ... }`) — `--accent` is the single red/orange highlight color used throughout. `:root` holds the dark theme (default); `:root[data-theme="light"]` overrides it for the light theme. Both were checked against WCAG AA contrast (4.5:1+) on their respective backgrounds — `--accent` is kept identical in both themes since it passes AA on both.
- **Theme toggle**: the sun/moon button in the header (`#themeToggle`, logic in `js/main.js`) flips `data-theme` on `<html>` and remembers the choice in `localStorage`. A tiny inline script in each page's `<head>` applies the stored choice before first paint, so returning visitors never see a flash of the wrong theme.
- **Email/social links**: update the `mailto:` address and the LinkedIn/Behance `href`s in the Contact section of `index.html`.

## Still placeholder

- The **About Me photo** (`.about-photo`) is an icon standing in for a real photograph.
- Most **project thumbnails** render as solid `.thumb-block` rectangles. Add an image by giving the card `class="thumb-block has-image"` and an inline `background-image`, as the Athirilli card does.
