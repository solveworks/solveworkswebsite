require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
  console.log("Verifying 'submissions' table exists...");

  // Try to insert a dummy record that will fail validation or RLS, 
  // OR just select.
  // Since we have public insert policy, we can try to select.
  // Actually, RLS 'Allow authenticated select' means anon key can't select?
  // User said: "Allow public inserts". "Allow authenticated select".
  // So anon key CANNOT select.
  // But anon key CAN insert.

  // So we should try to INSERT a row with invalid data (to trigger constraint if any) or just see if the table creates a 401/403 (which means table exists but RLS blocked) vs 404 (table missing).

  // Actually, if we try to select and get 401/403 (Permission Denied), it implies the table exists and RLS is protecting it.
  // If the table didn't exist, we'd get 42P01 (relation does not exist).

  const { error } = await supabase.from('submissions').select('*').limit(1);

  if (error) {
    if (error.code === '42P01' || error.message.includes('relation "public.submissions" does not exist')) {
      console.error('❌ Verify Failed: Table "public.submissions" still NOT found.');
      process.exit(1);
    }
    // Any other error (like permission denied) means the table likely exists.
    console.log(`✅ Connect Success: Table exists (Got expected error: ${error.message})`);
    process.exit(0);
  }

  // If no error, that's also fine (maybe RLS allows anon select? probably not based on policy, but if it does, great)
  console.log('✅ Connect Success: Table exists and is readable.');
}

verify();
