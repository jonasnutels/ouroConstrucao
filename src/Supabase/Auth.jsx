import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://tzkeoqnwlkmvnwjadkkm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6a2VvcW53bGttdm53amFka2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNDUxNTYsImV4cCI6MjAzOTgyMTE1Nn0.5-3BzDln8B6E6sxOJ76GdiZRMd_cSAhyKB2pT3eIpmo',
);
