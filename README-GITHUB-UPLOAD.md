# StephenNaetzker.com v1.2.26 Cloudflare Dependency Fix

Upload the extracted top-level contents to the GitHub repo root.

This release pins Cloudflare to Node 20 / npm 10 to avoid the Cloudflare npm 10.9.2 `Exit handler never called` install failure.

Expected Cloudflare detection should show Node 20.x and npm 10.x before install.
