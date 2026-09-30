# Cloudee

Static page in `public/` plus serverless functions in `api/`, deployed on Vercel.

## Files
```
public/index.html
api/chat.js
api/health.js
package.json
vercel.json
.gitignore
```

## Deploy (Vercel)
1. Upload this folder to GitHub (keep the `api` and `public` folders). **Never upload a `.env` file.**
2. In Vercel: Project → Settings → Environment Variables → add `OPENROUTER_API_KEY` (your OpenRouter key, starts with `sk-or-`). Optional: `MODEL`.
3. Redeploy (Deployments → ⋯ → Redeploy).
4. Open `https://your-site.vercel.app/api/health`. It should show `{"ok":true,"aiConfigured":true}`.

Never put your API key in index.html or in the repo.
