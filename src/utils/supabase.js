
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function submitContactForm(data) {
  const { error } = await supabase
    .from('submissions')
    .insert([data], { returning: 'minimal' })

  if (error) {
    console.error('Error submitting form:', error)
    return { success: false, error }
  }
  return { success: true }
}

export async function submitTextAgreement(data) {
  // Assuming the user meant a different schema named 'text'
  // In v1, we can't switch schema easily per request if using the default client
  // But often users name tables literally 'text.submissions' or similar
  const { error } = await supabase
    .from('text_submissions') // I'll try underscore first as it's more common for table names
    .insert([data], { returning: 'minimal' })

  if (error) {
    // If underscore fails, try literal dot (though uncommon for table names)
    const { error: error2 } = await supabase
      .from('text.submissions')
      .insert([data], { returning: 'minimal' })

    if (error2) {
      console.error('Error submitting text agreement:', error2)
      return { success: false, error: error2 }
    }
  }
  return { success: true }
}
