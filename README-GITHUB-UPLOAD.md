# StephenNaetzker.com v1.2.27 — Cloudflare Next Executable Fix

Upload the top-level contents of this ZIP to the GitHub repository root.

Cloudflare settings should remain:
- Build command: `npm run build`
- Build output directory: `/out`
- Root directory: `/`

This release preserves the v1.2.25 mobile/homepage fixes, preserves The Cortana Effect, preserves `natural pursuit`, and repairs the Cloudflare `next: not found` failure by making the build command perform a dependency install before invoking `next build`.
