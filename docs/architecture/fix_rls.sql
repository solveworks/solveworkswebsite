-- Fix RLS Policies for Submissions Table

-- 1. Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public insert to submissions" ON public.submissions;
DROP POLICY IF EXISTS "Allow authenticated select" ON public.submissions;

-- 2. Re-enable RLS (just in case)
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- 3. Re-create the INSERT policy strictly for anon role
-- This explicitly allows the 'anon' role (which public API key uses) to insert rows.
CREATE POLICY "Enable insert for anon (public) users"
ON public.submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- 4. Re-create the SELECT policy for authenticated users (service role/dashboard)
CREATE POLICY "Enable read access for authenticated users"
ON public.submissions
FOR SELECT
TO authenticated
USING (true);

-- 5. Grant usage on sequence (if serial, though we use UUID so this is just safety)
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON TABLE public.submissions TO anon;
