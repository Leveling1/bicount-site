# AGENTS.md

## Purpose

This project hosts the Bicount marketing landing page deployed on `bicount.levelingcoder.com`.
It is a static site designed to stay easy to maintain, easy to review, and safe to deploy.

## Product Goal

The landing page must sell Bicount as a mobile-first finance experience focused on:
- shared transactions
- analytics and graphs
- subscription reminders
- account funding visibility
- invite links and QR-based sharing

## Branding Guardrails

Keep the visual direction aligned with the Bicount app.
Core palette from the Flutter app:
- primary: `#76A646`
- accent: `#BDF26D`
- dark background: `#1A1A1A`
- dark card: `#2C2C2C`
- text on dark: `#E0E0E0`
- muted text: `#B0B0B0`

Typography direction:
- headings use Lexend
- body copy uses Poppins

## Design Rules

1. Stay mobile first. Build for small screens before widening layouts.
2. Preserve the premium dark atmosphere of the app and the reference design.
3. Avoid generic SaaS layouts with random colors unrelated to Bicount.
4. Keep motion subtle and purposeful.
5. Prefer semantic HTML and accessible controls.

## Asset Rules

- If you need Bicount branding assets, copy them from the mobile app source.
- Never move or delete the original files from the app project.
- The current landing uses `src/assets/images/logo-icon.png`, copied from the app.

## Tech Map

- `src/index.html`: page shell and semantic sections
- `src/assets/styles/`: split CSS files to stay readable and under the line cap
- `src/assets/scripts/content.js`: editable content collections
- `src/assets/scripts/app.js`: rendering, menu, and reveal behavior
- `scripts/check.mjs`: lightweight project checks
- `scripts/build.mjs`: static copy build to `dist/`
- `.github/workflows/ci-cd.yml`: CI + FTP deploy

## Workflow Expectations

- Run `npm run check` before shipping changes.
- Run `npm run build` when modifying deployable files.
- Keep generated output in `dist/` out of version control.
- Update `README.md` and this file when the workflow or structure changes.

## Editing Constraints

1. Keep every text source file at or below 200 lines.
2. Keep comments short and only where they help comprehension.
3. Prefer extending the existing content arrays instead of hardcoding repeated markup.
4. Do not add heavy dependencies unless the user explicitly asks for them.
5. If deployment secrets or FTP behavior changes, update the workflow and docs together.

## CI/CD Notes

The GitHub workflow does two things:
- quality checks on pull requests and pushes
- FTP deployment from `main`

Expected repository secrets:
- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT`
- `FTP_TARGET`

## Content Notes

Current copy is written in French-facing product language using ASCII-only text.
If you add new sections, keep the tone direct, clear, and product-centered.
