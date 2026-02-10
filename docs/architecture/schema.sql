-- Create the submissions table based on the Gemini Data Schema
CREATE TABLE IF NOT EXISTS public.submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT,
    phone_number TEXT,
    message TEXT,
    service_interest TEXT, -- Optional enum-like field
    status TEXT NOT NULL DEFAULT 'new',
    source TEXT DEFAULT 'website_contact_form'
);

-- Secure the table with Row Level Security (RLS)
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (anyone can submit a form)
CREATE POLICY "Allow public insert to submissions"
ON public.submissions
FOR INSERT
WITH CHECK (true);

-- Policy: Allow only authenticated users (admins) to view submissions
CREATE POLICY "Allow authenticated select"
ON public.submissions
FOR SELECT
TO authenticated
USING (true);
