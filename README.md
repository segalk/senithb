# Senith B. — Portfolio Website

A personal portfolio website built with plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies. Drop the files on any static host and it works.

Built to match the provided design: a minimal black/white layout with a single red accent, covering Work (filterable project grid), Case Studies, Services, UX Evangelizing (carousel), About Me, and Contact, plus a `project.html` case-study template. Ships with a dark theme (the default) and a light theme, toggled from the header.

> Note: the real Figma file (`Senith - Portfolio website`) couldn't be pulled directly this session (the Figma MCP connection hit its Starter-plan rate limit), so this was built from the desktop + mobile screenshots supplied directly. Copy, section order, and the color/type system follow those screenshots closely. Project thumbnails, the "UX Evangelizing" carousel image, and the About Me photo are plain placeholder blocks (`.thumb-block` / `.about-photo`, styled as solid dark rounded rectangles) standing in for the real images/photo — swap those in once you have the assets.

## Structure

```
index.html      Home page (all main sections)
project.html    Project / case-study detail page (?id=1..6)
css/style.css   All styles (CSS variables at the top control the theme)
js/main.js      Shared behavior: nav, scroll-spy, work filters, UX Evangelizing carousel
js/project.js   Project data + rendering for project.html
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

## Deploying (GitHub Pages)

1. Push this folder to a GitHub repository (root of the repo, or a `/docs` folder).
2. In the repo settings, go to **Pages** and set the source branch/folder (e.g. `main` / `/root`).
3. GitHub will publish it at `https://<username>.github.io/<repo>/`.

It's plain static files, so it also deploys as-is to Netlify, Vercel, Cloudflare Pages, or any basic web host — just upload the folder.

## Customizing

- **Content**: edit the section copy directly in `index.html`; edit the `projects` array in `js/project.js` for the case-study pages (only project 1, "Navigation Redesign", has real copy — the other five are intentionally left as "Placeholder" to match the source design, which only fleshes out one example project).
- **Colors/fonts**: edit the CSS custom properties at the top of `css/style.css` (`:root { ... }`) — `--accent` is the single red/orange highlight color used throughout. `:root` holds the dark theme (default); `:root[data-theme="light"]` overrides it for the light theme. Both were checked against WCAG AA contrast (4.5:1+) on their respective backgrounds — `--accent` is kept identical in both themes since it happens to pass AA on both.
- **Theme toggle**: the sun/moon button in the header (`#themeToggle` in `index.html`/`project.html`, logic in `js/main.js`) flips `data-theme` on `<html>` and remembers the choice in `localStorage`. A tiny inline script in each page's `<head>` applies the stored choice before first paint, so returning visitors never see a flash of the wrong theme.
- **Images**: replace `.thumb-block` (project thumbnails, case study cards, UX Evangelizing slides, project gallery) and `.about-photo` with real `<img>` elements once you have photos/screenshots — they're currently solid-color placeholder blocks.
- **Email/social links**: update the `mailto:` address and the LinkedIn/Behance `href`s in the Contact section of `index.html`.

## Matching it to the Figma file exactly

This was built from screenshots, not the live Figma file, so spacing/type/color are close approximations rather than exact token values. To tighten it up once Figma access is available:

1. Re-run the Figma MCP `get_design_context` tool against the two frames (`node-id=1-36` and `node-id=1-279`), or export specs/assets manually from Figma.
2. Update the CSS custom properties in `css/style.css` to the exact design tokens (colors, spacing scale, font family/weights).
3. Replace the placeholder blocks with the real exported images/photo.
4. Double-check copy and section order against the frames for anything the screenshots didn't make legible.
