# StephenNaetzker.com v1.2.24 — Homepage Stability Release

Upload the top-level contents of this extracted folder to the root of the GitHub repository.

Expected GitHub root after upload:

- app/
- components/
- public/
- package.json
- package-lock.json
- next.config.mjs
- tsconfig.json

Do not upload the parent wrapper folder itself.

## Verified

- npm ci: passed
- npm run build: passed
- Static export includes /essays/the-cortana-effect

## Scope

Changed only:

- app/page.tsx
- app/globals.css
- app/essays/the-cortana-effect/page.tsx

## Fixes

- Homepage buttons now use real visible Next.js Link buttons.
- Homepage mobile layout is responsive.
- Cinematic hero preserved.
- The Cortana Effect preserved.
- "goal" updated to "natural pursuit."
