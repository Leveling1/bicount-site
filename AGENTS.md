# AGENTS.md

## Purpose

This repository hosts the Bicount marketing site deployed on `bicount.levelingcoder.com`.
The site is built with `Astro + React` and must stay faithful to the approved Bicount visual direction.

Read this file before making changes.

## Product Goal

The site has four jobs:

- present Bicount clearly
- preserve the approved visual style
- support conversion toward app download
- expose required public support, legal, and callback routes without hurting SEO

## Core Technical Decisions

- Astro handles routing and static generation
- React is used only for targeted client-side behavior
- TypeScript is enabled
- deployable output must stay in `dist/`
- deployment remains GitHub Actions + FTP

## Public Routes

The following routes are part of the public surface and must be treated carefully:

- `/`
- `/auth`
- `/consumer-terms`
- `/usage-policy`
- `/privacy-policy`
- `/friend/invite`
- `/.well-known/assetlinks.json`
- `/.well-known/apple-app-site-association`
- `/robots.txt`
- `/sitemap.xml`

Error routes also exist in source:

- `/403`
- `/404`
- `/500`

## Route Rules

1. Do not change `/auth`, `/consumer-terms`, `/usage-policy`, or `/privacy-policy` without coordinating with the mobile app.
2. `/auth` is reserved for auth provider return flows and must not be reused for marketing content.
3. `/friend/invite` is a utility fallback page and should stay `noindex`.
4. Error pages must stay `noindex`.
5. Legal pages may remain public and indexable.

## Current Structure

- `src/pages/`: public Astro routes
- `src/layouts/BaseLayout.astro`: shared document shell
- `src/layouts/LegalLayout.astro`: long-form legal page shell
- `src/components/sections/`: landing sections
- `src/components/common/ErrorShell.astro`: shared error page shell
- `src/components/react/`: hydrated client behavior
- `src/config/site.ts`: global site metadata and SEO constants
- `src/config/legal/`: legal page content
- `src/styles/`: global CSS split by concern
- `public/.well-known/`: mobile association files
- `public/images/bicount-icon.png`: copied Bicount logo asset

## Design Rules

1. Keep the light Paddle-like Bicount aesthetic already established on the landing.
2. New pages must feel like part of the same product family.
3. Reuse existing spacing rhythm, typography, borders, surfaces, and tone.
4. Do not introduce a second design system for legal, auth, or error pages.
5. Keep everything mobile first.

## Content And Fidelity Rules

1. Preserve the approved landing copy unless the user explicitly asks for changes.
2. For non-landing pages, keep the same brand voice: clear, calm, product-led, premium.
3. Legal pages must include a page title, readable article width, and a visible last-updated date.
4. Error pages must help the user recover with a path back to the landing.

## SEO Rules

1. Keep canonical URLs, robots directives, Open Graph tags, and shared metadata working.
2. Do not add utility pages to the sitemap.
3. Keep public legal pages in the sitemap unless the user asks otherwise.
4. Avoid duplicate content or duplicate route variants when adding pages.
5. Keep error pages and callback-style pages out of the index.

## Asset Rules

- If you need Bicount branding assets, copy them from the app repository.
- Never move or delete the original app assets.
- Prefer reusing the copied assets already present in this repo.

## Editing Constraints

1. Keep text-based source files at or below 200 lines when practical for this project convention.
2. Keep comments short and useful.
3. Prefer shared layouts and config files over copy-pasted page structures.
4. Preserve semantic HTML and accessible labels.
5. Do not reintroduce the old static-site architecture unless explicitly requested.

## Validation

Before shipping changes, run:

- `npm run check`
- `npm run build`

Both must pass and `dist/` must regenerate correctly.

## Sensitive Areas

Be careful when editing:

- `src/config/site.ts`
- `src/config/legal/*`
- `src/layouts/BaseLayout.astro`
- `src/layouts/LegalLayout.astro`
- `src/components/react/*`
- `public/.well-known/*`
- `.github/workflows/ci-cd.yml`

## Suggested Read Order

1. `AGENTS.md`
2. `src/config/site.ts`
3. `src/config/legal/*`
4. `src/layouts/BaseLayout.astro`
5. `src/layouts/LegalLayout.astro`
6. `src/pages/index.astro`
7. `src/pages/auth.astro`
8. `src/pages/friend/invite.astro`
9. `src/pages/consumer-terms.astro`
10. `src/pages/usage-policy.astro`
11. `src/pages/privacy-policy.astro`
12. `src/components/common/ErrorShell.astro`

## Invite Deep Link Update (2026-04-02)

Rules:
- `/friend/invite` remains the HTTPS fallback page, but on mobile it may also try the custom scheme `bicount://friend/invite?inviteCode=...`
- keep the invite fallback page usable even if the app is not installed or the scheme open fails
- do not remove the visible download CTA or code-copy fallback from the invite page
- keep the GitHub artifact upload configured with `include-hidden-files: true` so `.well-known` survives deployment

## TypeScript Config Update (2026-04-02)

Rules:
- keep the website `tsconfig.json` aligned with Astro expectations by including `.astro/types.d.ts` and excluding `dist`
- prefer `paths` without deprecated `baseUrl`; for aliases like `@/*`, keep the target relative such as `./src/*`
- if editor-only TypeScript errors appear while `tsc` passes, check `tsconfig.json` before changing application code
