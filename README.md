StephenNaetzker.com v1.2.27

Cloudflare build-pipeline hotfix:
- Keeps Next.js, React, and React DOM in dependencies.
- Regenerates package-lock.json from the corrected package.json.
- Changes build script to run dependency install before `next build`, preventing Cloudflare's `next: not found` failure when its automatic install step is unreliable.
- Preserves homepage/mobile fixes and both essays.
