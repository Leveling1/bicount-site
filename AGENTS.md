# AGENTS.md

## Purpose

This repository hosts the Bicount marketing site deployed on `bicount.levelingcoder.com`.
The current version is a faithful rebuild of the validated `landing_bicount_v2.html` reference inside an `Astro + React` architecture.

Read this file before changing the site.

## Product Goal

The site must present Bicount exactly in the tone, structure, and visual intent of the approved landing reference.
Its job is simple:

- explain Bicount clearly
- preserve the approved wording
- push visitors toward downloading the app
- stay extremely solid on mobile

## Core Technical Decisions

- Astro drives routing and static generation
- React is used only for targeted client behavior
- TypeScript is enabled across the new stack
- output must remain static in `dist/`
- deployment stays GitHub Actions + FTP

## Routes That Must Keep Working

- `/`
- `/friend/invite`
- `/.well-known/assetlinks.json`
- `/.well-known/apple-app-site-association`
- `/robots.txt`
- `/sitemap.xml`

Do not break these routes during redesign or refactor work.

## Current Structure

- `src/pages/index.astro`: landing entry
- `src/pages/friend/invite.astro`: invite fallback page
- `src/layouts/BaseLayout.astro`: shared document shell
- `src/components/sections/`: landing sections
- `src/components/common/`: shared UI pieces
- `src/components/react/`: hydrated client components
- `src/config/site.ts`: central content and site constants
- `src/styles/`: global CSS split by concern
- `public/.well-known/`: mobile association files
- `public/images/logo-icon.png`: copied Bicount icon asset

## Fidelity Rules

1. Treat `C:\Users\louis\Downloads\landing_bicount_v2.html` as the visual and textual source of truth for the landing.
2. Preserve the approved French copy unless the user explicitly asks for changes.
3. Preserve the same hierarchy, spacing logic, and overall rendering as closely as possible.
4. For pages not shown in the reference file, reuse the same visual language instead of inventing a second design system.

## Mobile-First Rules

1. Start from narrow screens first.
2. Keep initial load fast and avoid unnecessary hydration.
3. Prefer CSS transforms and opacity for motion.
4. Respect `prefers-reduced-motion`.
5. Do not add heavy client libraries unless the user asks for them.

## Visual Rules

- Keep the light Paddle-like composition from the approved reference.
- Preserve Bicount’s green/night palette tokens already embedded in the styles.
- Keep typography on `Lexend`.
- Avoid generic SaaS redesigns that drift from the approved reference.

## Download Rules

- Use the current download URL defined in `src/config/site.ts`.
- Download CTAs are expected to open the external file in a new tab.
- If the download URL changes, update it in one place only.

## Invite And Deep Link Rules

- `/friend/invite` is a fallback web page for invite links
- it must read the `code` query string
- it must keep a visible download CTA
- it must keep a copy-to-clipboard action
- it must stay visually aligned with the landing

## `.well-known` Rules

These files are intentionally public and must stay deployable as static files:

- `public/.well-known/assetlinks.json`
- `public/.well-known/apple-app-site-association`

Do not move them into client bundles or dynamic routes.

## Asset Rules

- if you need Bicount branding assets, copy them from the app repository
- never move or delete the original app assets
- prefer reusing the copied logo already present in this repo

## Editing Constraints

1. Keep text-based source files at or below 200 lines when practical for this project convention.
2. Keep comments short and only where they remove real ambiguity.
3. Prefer extending `src/config/site.ts` over duplicating content in multiple files.
4. Preserve semantic HTML and accessible labels.
5. Do not reintroduce the legacy static-site architecture unless explicitly requested.

## Validation

Before shipping changes, run:

- `npm run check`
- `npm run build`

The build must regenerate `dist/`.

## CI/CD

The workflow in `.github/workflows/ci-cd.yml` must:

- install dependencies
- run project checks
- build the site
- deploy `dist/` by FTP on push to `main`

Expected GitHub secrets:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT`
- `FTP_TARGET`

## Sensitive Areas

Be careful when changing:

- `src/config/site.ts`
- `src/layouts/BaseLayout.astro`
- `src/components/react/ClientBehaviors.tsx`
- `src/components/react/InviteLanding.tsx`
- `public/.well-known/*`
- `.github/workflows/ci-cd.yml`

## Suggested Read Order

1. `AGENTS.md`
2. `src/config/site.ts`
3. `src/pages/index.astro`
4. `src/components/sections/`
5. `src/pages/friend/invite.astro`
6. `src/components/react/InviteLanding.tsx`
7. `public/.well-known/*`
