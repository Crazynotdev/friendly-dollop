import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.26.0/dist/supabase.min.js'

const supabaseUrl = 'https://lkenxlyjknochybjldqw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZW54bHlqa25vY2h5YmpsZHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NDQ1OTYsImV4cCI6MjA4ODIyMDU5Nn0.JVy-DzFOPyOkELLDfx4PTjU8lBXntU569ASZ2ITdw9g'
export const supabase = createClient(supabaseUrl, supabaseKey)
