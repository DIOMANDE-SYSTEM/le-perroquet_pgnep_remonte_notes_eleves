/* ═══════════════════════════════════════════════════════════════
   supabase-config.js — configuration Supabase pour TOUS les utilisateurs
   À placer à côté de index.html sur GitHub.
   • enabled:false  -> l'application utilise Firebase (comme avant)
   • enabled:true   -> l'application utilise Supabase
   La clé « publishable » (sb_publishable_…) ou « anon » est PUBLIQUE par
   conception. N'écrivez JAMAIS ici une clé secrète (sb_secret_… / service_role).
   Ne mettez enabled:true qu'APRÈS avoir chargé les données dans Supabase.
   ═══════════════════════════════════════════════════════════════ */
window.PGNEP_SB_DEFAULT = {
  enabled: true,
  url: "https://shnlkpsvcehpxcqffzdu.supabase.co",
  anon: "sb_publishable_N2GTVn5x7DK0ZnHttUjB6Q_zmyjJGyx"
};
