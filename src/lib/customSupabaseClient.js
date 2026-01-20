import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://poklrxueizivmyeqopwe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva2xyeHVlaXppdm15ZXFvcHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzM5MDUsImV4cCI6MjA3Nzg0OTkwNX0.ssd0VhLf5F78sDpa0G95pAudVJ4B25DrBeWVS3gO-1Y';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
