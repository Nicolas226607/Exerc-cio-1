import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://fkzrocclknskifynbhrf.supabase.co";
const supabaseKey = "sb_publishable_s4jPdDHCpU5jhRr5rv7d0Q_I4upMTgL";

export const db = createClient(supabaseUrl, supabaseKey);
