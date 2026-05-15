import { createClient } from '@/utils/supabase/client';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl) {
  console.warn('⚠️  NEXT_PUBLIC_SUPABASE_URL is not set. // @TODO: Implement supabase login if needed');
}
if (!supabasePublishableKey) {
  console.warn(
    '⚠️  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY is not set. // @TODO: Implement supabase login if needed'
  );
}

export const supabase = createClient();
