# StephenNaetzker.com v1.2.28 — Nav Restore + Cloudflare Lockfile Fix

Upload the top-level contents of this ZIP to the GitHub repo root.

This release:
- restores visible desktop homepage navigation,
- preserves the v1.2.25 mobile hero fit work,
- preserves both essays and natural pursuit wording,
- removes the corrupted/internal-registry package-lock.json,
- restores package.json build script to `next build`,
- sets npm to public registry and disables package-lock regeneration in this project package.

Cloudflare settings should remain:
- Build command: npm run build
- Build output directory: /out
- Root directory: /
- NODE_VERSION: 20.19.5
