-- Fix RLS: Use 'public' role and ensure permissions
-- Run this if you are getting "new row violates row-level security policy" errors

-- 1. Ensure permissions are granted to the 'anon' and 'public' roles
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON TABLE public.submissions TO anon;
GRANT ALL ON TABLE public.submissions TO public;

-- 2. Drop potentially conflicting policies
DROP POLICY IF EXISTS "Allow public insert to submissions" ON public.submissions;
DROP POLICY IF EXISTS "Enable insert for anon (public) users" ON public.submissions;
DROP POLICY IF EXISTS "Enable public insert" ON public.submissions;

-- 3. Create a strict but functional INSERT policy for the 'public' role
CREATE POLICY "Enable public insert" 
ON public.submissions 
FOR INSERT 
TO public 
WITH CHECK (true);

-- 4. Enable RLS (idempotent)
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
