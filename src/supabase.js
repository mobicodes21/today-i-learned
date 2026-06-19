import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://slhuvateulpjoevofilr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaHV2YXRldWxwam9ldm9maWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMDU0NzAsImV4cCI6MjA5NjY4MTQ3MH0.ehnQjj7yyzFcx7jzQZqdigK-nHtn71XdU--PjVz9bIg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
