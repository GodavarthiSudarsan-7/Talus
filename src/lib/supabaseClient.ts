import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient;

try {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Configure these env vars to enable auth.",
    );
  }
  client = createClient(supabaseUrl, supabaseAnonKey);
} catch (error) {
  // Fallback mock client that always errors, but won't white-screen the app.
  // eslint-disable-next-line no-console
  console.warn("[supabaseClient] Falling back to mock client:", error);

  const makeError = (message: string) => ({
    data: null,
    error: new Error(message),
  });

  // Very thin mock; enough for current signup usage.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client = {
    auth: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      signUp: async (): Promise<any> =>
        makeError("Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."),
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    from: () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      insert: async (): Promise<any> =>
        makeError("Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;
}

export const supabase = client;

