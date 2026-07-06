# StephenNaetzker.com v1.2.22 — GitHub Source Hotfix

Use this package only for the GitHub → Cloudflare Pages workflow.

Upload the CONTENTS of this folder to the root of the GitHub repository, not the parent folder itself.

Expected repo root after upload:
- app/
- components/
- public/
- package.json
- next.config.mjs
- tsconfig.json

Do not upload an `out/` folder for this workflow. Cloudflare should build from source.
