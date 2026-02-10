# 🚀 Step-by-Step Deployment Guide

Follow these steps to move from your local environment to your live domain on Cloudflare Pages.

## 1. Cloudflare Pages Initial Setup

1.  **Log in** to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** in the left sidebar.
3.  Click **Create application** > **Pages** > **Connect to Git**.
4.  Select your GitHub account and the `solveworkswebsite` repository.
5.  **Set up builds and deployments**:
    - **Project name**: `solveworks-automations` (or similar).
    - **Production branch**: `master`.
    - **Framework preset**: `Vite`.
    - **Build command**: `npm run build`.
    - **Build output directory**: `dist`.

## 2. Setting Environment Variables (CRITICAL)

**Before you click "Save and Deploy"**, you must add your Supabase keys:

1.  Click **Environment variables (advanced)** in the setup screen (or go to **Settings > Variables and Secrets** if the project is already created).
2.  Add the following variables:
    - `VITE_SUPABASE_URL`: (Copy the value from your `.env` file)
    - `VITE_SUPABASE_KEY`: (Copy the value from your `.env` file)
3.  Click **Save and Deploy**. Cloudflare will now build your site and give you a `pages.dev` preview URL.

## 3. Custom Domain & Squarespace Transition

To use `solveworksautomations.com`, you need to point your domain away from Squarespace:

1.  In the Cloudflare project, go to **Custom domains** tab.
2.  Click **Set up a custom domain** and enter `solveworksautomations.com`.
3.  Cloudflare will detect where your DNS is currently hosted.
    - **If your DNS is at Squarespace**: You will need to log into Squarespace to update your Nameservers to the ones Cloudflare provides.
    - **If Cloudflare is already managing your DNS**: It will offer to automatically update your CNAME records.
4.  Once the custom domain is "Active", Cloudflare will handle the SSL (HTTPS) automatically.

## 4. Final Security Check (Supabase)

Ensure your production URL is allowed in Supabase:

1.  Go to **Supabase Dashboard > Authentication > URL Configuration**.
2.  Add `https://solveworksautomations.com` to **Redirect URLs**.
3.  Verify your RLS policies are active for `submissions` and `text.submissions` (see `docs/architecture/fix_rls_v2.sql`).

## 🛠️ Maintenance & Updates
Whenever you push new changes to the `master` branch on GitHub, Cloudflare Pages will automatically rebuild and deploy the updates!

