# One-time GitHub Pages setup

Total time: ~10 minutes. You only do this once.

## Step 1 — Create the GitHub account & repo

1. Go to **github.com** and sign in (or create an account if needed).
2. Click the **+** icon (top right) → **New repository**.
3. Name it something like `cu-volleyball-hub` (lowercase, no spaces).
4. Set it to **Private** (recommended — this is internal content).
5. Check "Add a README file" (you'll overwrite it).
6. Click **Create repository**.

## Step 2 — Upload the site files

Easiest method (no terminal):

1. On the repo page, click **Add file** → **Upload files**.
2. Drag the entire contents of the `creighton-vb` folder into the upload area.
   - **Important:** drag the files *inside* the folder, not the folder itself. The repo root should have `index.html` directly in it (not `creighton-vb/index.html`).
3. Scroll down → **Commit changes**.

## Step 3 — Turn on GitHub Pages

1. In the repo, click **Settings** (top tabs).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)` → **Save**
4. Wait 1–2 minutes. Refresh the Settings → Pages page.
5. You'll see a green box: **Your site is live at** `https://YOUR-USERNAME.github.io/cu-volleyball-hub/`

That URL is your site. Bookmark it on the team's devices.

## Step 4 — (Recommended) Restrict access

Since this is internal:

**Option A — Keep the repo private, share via direct link.**
GitHub Pages for **private repos** requires GitHub Pro/Team. If your account is free, the repo must be public for Pages to serve it — *but* nobody can find it unless they have the URL (and you used `noindex` meta tags so search engines won't list it).

**Option B — Public repo, obscure URL, noindex.**
This is what the templates are configured for. The `<meta name="robots" content="noindex,nofollow">` tag is on every page. The site is technically reachable but not indexed and not advertised. For internal team reference docs this is the standard tradeoff.

**Option C — Private repo + GitHub Pro.**
$4/month. Lets you keep the repo private and still serve Pages. Cleanest option if budget allows.

---

## Updates (after initial setup)

You **never need to redeploy**. Once Pages is on:
- Edit any file via the GitHub web UI → Commit → live in ~60 seconds.
- Add files via Upload files → Commit → live in ~60 seconds.

That's it. No build step, no command line, no CMS to log into.

---

## Custom domain (optional, future)

If you ever want `vb.creighton.edu` or similar:
1. In repo Settings → Pages → "Custom domain" → enter the domain.
2. Talk to Creighton IT to add a CNAME record pointing to `YOUR-USERNAME.github.io`.
3. Check "Enforce HTTPS" once it propagates (5 minutes to a few hours).
