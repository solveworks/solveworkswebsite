# Deployment Guide

This guide outlines the steps to securely deploy the Solveworks Automations website.

## 1. GitHub Preparation

Before pushing to a public repository:
- Ensure `.env` is NOT tracked (check with `git status`).
- Ensure `.gitignore` contains `.env`.

### GitHub Secrets (Optional)
If you plan to use GitHub Actions for deployment, add your secrets in **Settings > Secrets and variables > Actions**:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_KEY`

## 2. Cloudflare Pages Deployment

When setting up your project on Cloudflare Pages:

1. **Build Settings**:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`

2. **Environment Variables**:
   In the Cloudflare dashboard, go to **Settings > Environment variables** and add:
   - `VITE_SUPABASE_URL`: `your_supabase_url`
   - `VITE_SUPABASE_KEY`: `your_supabase_anon_key`

> [!NOTE]
> Make sure to use the **Anon/Public** key for these variables.

## 3. Supabase Security (Critical)

Since the `VITE_SUPABASE_KEY` is exposed in the browser, you MUST secure your data using Row Level Security (RLS).

### Enable RLS
For each table (e.g., `submissions`, `text_submissions`):
1. Go to the **Authentication > Policies** tab in Supabase.
2. Click **Enable RLS**.

### Create Policies
Example policy for the contact form (Allowing anonymous inserts only):
```sql
CREATE POLICY "Enable insert for anonymous users" 
ON public.submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);
```

> [!WARNING]
> DO NOT create a `SELECT` policy for `anon` unless you want anyone on the internet to be able to read all your form submissions.
