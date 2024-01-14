import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zkpctexmyqvpehhqhnpj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcGN0ZXhteXF2cGVoaHFobnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxMzA4NTQsImV4cCI6MjAyMDcwNjg1NH0.LGbyz8Jc2L1QzEZjllnsq5zR3qvP09xd16FmuFK-W8s';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
