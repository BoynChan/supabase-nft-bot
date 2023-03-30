import { createClient } from '@supabase/supabase-js'

// Use the credentials outputted in your terminal when running `supabase start`
const supabase = createClient(
  'http://localhost:54321',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
)

const { data, error } = await supabase.functions.invoke('nft_data', {
  body: { name: 'NFT' },
})

if (data) {
console.log(data)
} else if (error) {
  console.error(error)
}