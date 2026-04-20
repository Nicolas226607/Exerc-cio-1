const supabaseUrl = "https://fkzrocclknskifynbhrf.supabase.co";
const supabaseKey = "sb_publishable_s4jPdDHCpU5jhRr5rv7d0Q_I4upMTgL";

export const db = window.supabase.createClient(supabaseUrl, supabaseKey);
