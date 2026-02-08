# Supabase Schema Setup

The connection to your Supabase project is verified! 🎉

However, the `submissions` table does not exist yet. Since I'm using the public API key, I cannot create tables for you.

**Please run the following SQL in your Supabase Dashboard > SQL Editor:**

```sql
-- Create the submissions table
CREATE TABLE IF NOT EXISTS public.submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT,
    phone_number TEXT,
    message TEXT,
    service_interest TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    source TEXT DEFAULT 'website_contact_form'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (so the contact form works)
CREATE POLICY "Allow public insert to submissions"
ON public.submissions
FOR INSERT
WITH CHECK (true);

-- Allow authenticated admins to view submissions
CREATE POLICY "Allow authenticated select"
ON public.submissions
FOR SELECT
TO authenticated
USING (true);
```
