# StephenNaetzker.com v1.2.25 — Mobile Hero Fit Fix

Upload the top-level contents of this extracted folder to the GitHub repository root.

Verified locally:
- npm ci
- npm run build

Changes:
- Mobile homepage uses the portrait Chloe hero image instead of the desktop composite.
- Mobile navigation is one row/wrapped compact nav, not duplicated with the baked-in desktop artwork.
- Desktop cinematic composite remains visually preserved; transparent link hitboxes keep desktop nav/buttons clickable.
- The Cortana Effect wording preserves “natural pursuit.”

Expected Cloudflare settings:
- Build command: npm run build
- Build output directory: /out
- Root directory: /
