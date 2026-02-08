
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
    .insert([data])

  if (error) {
    console.error('Error submitting form:', error)
    return { success: false, error }
  }
  return { success: true }
}
