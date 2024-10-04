import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_APP_URL_SUPABASE,
  import.meta.env.VITE_APP_KEY_SUPABASE
);
