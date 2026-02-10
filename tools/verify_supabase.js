require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const testDataText = {
  business_name: 'Test Business',
  mobile_phone: '1234567890'
};

async function verify() {
  console.log("Testing text.submissions INSERT...");
  // Try schema-qualified name
  const { error } = await supabase
    .from('submissions')
    .insert([testDataText], { returning: 'minimal' });

  if (error) {
    console.log("⚠️ Default schema (public) Failed:", error.message);

    // Explicitly try schema if dot notation failed in JS earlier
    const { error: error2 } = await supabase
      .from('text.submissions')
      .insert([testDataText], { returning: 'minimal' });

    if (error2) {
      console.error("❌ text.submissions Failed:", error2.message);
      process.exit(1);
    }
  }

  console.log("✅ text.submissions Success!");
  process.exit(0);
}

verify();
