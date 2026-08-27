import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Retrieve environment variables safely across browser & node
const env = typeof process !== 'undefined' && process.env ? process.env : ((import.meta as any).env || {});

const supabaseUrl: string =
  env.SUPABASE_URL ||
  env.NEXT_PUBLIC_SUPABASE_URL ||
  env.VITE_SUPABASE_URL ||
  '';

const supabaseAnonKey: string =
  env.SUPABASE_ANON_KEY ||
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  env.VITE_SUPABASE_ANON_KEY ||
  '';

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project')) {
    return null;
  }
  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return client;
}
