# StephenNaetzker.com Cleanup Build

This build removes the legacy static-site collision. Cloudflare should deploy the Next.js app only.

Before uploading/replacing files in GitHub, delete these old root files if present:
- index.html
- about.html
- contact.html
- essays.html
- projects.html
- resume.html
- styles.css

Cloudflare Pages settings:
- Build command: npm run build
- Build output directory: out
- Root directory: /
