/**
 * Future Supabase Client Configuration Boundary
 *
 * NOTE: For this phase, Precious Metals Consulting LLC runs as a high-fidelity static
 * prototype. When ready to connect Supabase:
 * 1. Install @supabase/supabase-js
 * 2. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local
 * 3. Initialize the real client below and connect methods in `src/lib/dataService.ts`.
 */

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  isConfigured: boolean;
}

export const supabaseConfig: SupabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  isConfigured: Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  ),
};

// Placeholder client instance ready for `@supabase/supabase-js`
export const supabaseClient = null;
