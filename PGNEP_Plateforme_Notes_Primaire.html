<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Le Perroquet · PGNEP — Plateforme de Gestion des Notes du Primaire</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  --ci-vert:    #006B3F;
  --ci-vert2:   #00843D;
  --ci-orange:  #F77F00;
  --ci-blanc:   #FFFFFF;
  --ci-or:      #FCD116;
  --bleu:       #1A56DB;
  --bleu-light: #EBF5FF;
  --navy:       #0D1B2A;
  --surface:    #F8FAFB;
  --card:       #FFFFFF;
  --border:     #E5E9EF;
  --text:       #111827;
  --text2:      #4B5563;
  --text3:      #9CA3AF;
  --success:    #059669;
  --warning:    #D97706;
  --danger:     #DC2626;
  --info:       #0284C7;
  --shadow:     0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:  0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  --radius:     10px;
  --sidebar-w:  260px;
}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--surface);color:var(--text);min-height:100vh;overflow-x:hidden;}

/* ── LOGIN ─────────────────────────────────────────────────── */
#login-screen{
  display:flex;position:fixed;inset:0;z-index:9999;
  background:linear-gradient(135deg,var(--ci-vert) 0%,#004d2c 50%,var(--navy) 100%);
  align-items:center;justify-content:center;
}
#login-screen::before{
  content:'';position:absolute;inset:0;
  background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.login-card{
  background:rgba(255,255,255,0.97);border-radius:20px;
  width:440px;max-width:95vw;padding:0;
  box-shadow:0 25px 60px rgba(0,0,0,0.35);
  overflow:hidden;position:relative;z-index:1;
}
.login-header{
  background:linear-gradient(135deg,var(--ci-vert),var(--ci-vert2));
  padding:32px 36px 28px;text-align:center;
}
.login-header .flags{display:flex;gap:4px;justify-content:center;margin-bottom:16px;}
.flag{height:5px;border-radius:2px;flex:1;max-width:40px;}
.flag.orange{background:var(--ci-orange);}
.flag.white{background:rgba(255,255,255,0.8);}
.flag.green{background:rgba(255,255,255,0.3);}
.login-header h1{font-size:15px;font-weight:800;color:#fff;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;}
.login-header p{font-size:12px;color:rgba(255,255,255,0.7);}
.login-badge{
  display:inline-block;background:rgba(255,255,255,0.15);
  border:1px solid rgba(255,255,255,0.25);
  border-radius:20px;padding:4px 14px;font-size:11px;color:#fff;
  margin-top:10px;letter-spacing:1px;
}
.login-body{padding:32px 36px;}
.login-body h2{font-size:22px;font-weight:700;color:var(--text);margin-bottom:6px;}
.login-body .sub{font-size:13px;color:var(--text2);margin-bottom:24px;}
.form-field{margin-bottom:16px;}
.form-field label{display:block;font-size:12px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;}
.form-field input,.form-field select,.form-field textarea{
  width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:8px;
  font-family:inherit;font-size:14px;color:var(--text);background:#fff;
  outline:none;transition:border-color 0.2s,box-shadow 0.2s;
}
.form-field input:focus,.form-field select:focus{border-color:var(--ci-vert);box-shadow:0 0 0 3px rgba(0,107,63,0.1);}
.login-btn{
  width:100%;padding:12px;background:var(--ci-vert);color:#fff;
  border:none;border-radius:8px;font-family:inherit;font-size:15px;font-weight:700;
  cursor:pointer;transition:all 0.2s;margin-top:4px;letter-spacing:0.3px;
}
.login-btn:hover{background:var(--ci-vert2);transform:translateY(-1px);box-shadow:var(--shadow-md);}
.login-error{
  background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;
  padding:10px 14px;font-size:13px;color:var(--danger);margin-top:10px;display:none;
}
.login-footer{font-size:11px;color:var(--text3);text-align:center;margin-top:20px;}

/* ── LAYOUT ────────────────────────────────────────────────── */
.app{display:none;min-height:100vh;}
.app.visible{display:flex;}

/* ── SIDEBAR ───────────────────────────────────────────────── */
.sidebar{
  width:var(--sidebar-w);background:var(--navy);
  display:flex;flex-direction:column;position:fixed;
  top:0;left:0;bottom:0;z-index:100;
  overflow-y:auto;transition:transform 0.3s;
}
.sidebar-brand{
  padding:20px 20px 16px;border-bottom:1px solid rgba(255,255,255,0.08);
}
.sidebar-brand .ci-stripe{
  display:flex;gap:3px;margin-bottom:12px;
}
.stripe{height:4px;border-radius:2px;}
.stripe.g{background:var(--ci-vert);flex:1;}
.stripe.w{background:#fff;flex:0.6;}
.stripe.o{background:var(--ci-orange);flex:1;}
.brand-title{font-size:13px;font-weight:800;color:#fff;letter-spacing:1.5px;text-transform:uppercase;line-height:1.3;}
.brand-sub{font-size:10px;color:rgba(255,255,255,0.4);margin-top:3px;letter-spacing:0.5px;}
.brand-badge{
  display:inline-block;background:var(--ci-orange);color:#fff;
  font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;margin-top:6px;
  letter-spacing:0.5px;
}
.nav-group{padding:12px 12px 4px;}
.nav-group-label{font-size:9px;font-weight:700;color:rgba(255,255,255,0.3);letter-spacing:2px;text-transform:uppercase;padding:0 8px;}
.nav-item{
  display:flex;align-items:center;gap:10px;
  padding:9px 16px;margin:2px 8px;border-radius:8px;
  cursor:pointer;font-size:13px;font-weight:500;color:rgba(255,255,255,0.55);
  transition:all 0.15s;user-select:none;
}
.nav-item:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.9);}
.nav-item.active{
  background:linear-gradient(135deg,rgba(0,107,63,0.5),rgba(0,107,63,0.2));
  color:#fff;border-left:3px solid var(--ci-vert2);margin-left:5px;
}
.nav-icon{font-size:16px;width:20px;text-align:center;flex-shrink:0;}
.nav-badge{margin-left:auto;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.6);font-size:10px;padding:2px 7px;border-radius:10px;font-family:'JetBrains Mono',monospace;}
.sidebar-user{
  margin-top:auto;padding:14px 16px;border-top:1px solid rgba(255,255,255,0.08);
}
.user-info{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
.user-avatar{
  width:36px;height:36px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-weight:700;font-size:14px;color:#fff;flex-shrink:0;
}
.user-name{font-size:12px;font-weight:600;color:#fff;line-height:1.3;}
.user-role{font-size:10px;color:rgba(255,255,255,0.4);}
.logout-btn{
  width:100%;padding:7px;background:rgba(239,68,68,0.15);
  border:1px solid rgba(239,68,68,0.2);border-radius:7px;
  color:#FCA5A5;font-family:inherit;font-size:12px;font-weight:600;
  cursor:pointer;transition:all 0.15s;
}
.logout-btn:hover{background:rgba(239,68,68,0.25);}

/* ── MAIN ──────────────────────────────────────────────────── */
.main{margin-left:var(--sidebar-w);flex:1;display:flex;flex-direction:column;min-height:100vh;}
.topbar{
  height:58px;background:#fff;border-bottom:1px solid var(--border);
  display:flex;align-items:center;padding:0 24px;gap:16px;
  position:sticky;top:0;z-index:50;box-shadow:var(--shadow);
}
.topbar-title{font-size:16px;font-weight:700;flex:1;}
.topbar-year{
  background:var(--bleu-light);color:var(--bleu);
  font-size:12px;font-weight:600;padding:5px 12px;border-radius:20px;
}
.search-wrap{
  display:flex;align-items:center;gap:8px;
  background:var(--surface);border:1.5px solid var(--border);border-radius:8px;
  padding:7px 12px;min-width:260px;
}
.search-wrap input{background:none;border:none;outline:none;font-family:inherit;font-size:13px;flex:1;color:var(--text);}
.search-wrap input::placeholder{color:var(--text3);}
.btn{
  padding:8px 16px;border-radius:8px;border:none;cursor:pointer;
  font-family:inherit;font-size:13px;font-weight:600;
  display:inline-flex;align-items:center;gap:6px;transition:all 0.15s;
}
.btn-primary{background:var(--ci-vert);color:#fff;}
.btn-primary:hover{background:var(--ci-vert2);box-shadow:var(--shadow-md);}
.btn-secondary{background:#fff;color:var(--text);border:1.5px solid var(--border);}
.btn-secondary:hover{border-color:var(--ci-vert);color:var(--ci-vert);}
.btn-danger{background:#FEF2F2;color:var(--danger);border:1.5px solid #FECACA;}
.btn-orange{background:var(--ci-orange);color:#fff;}
.btn-orange:hover{background:#e07000;}
.btn-sm{padding:5px 11px;font-size:12px;}
.btn-icon{padding:6px 9px;font-size:15px;}

.content{flex:1;padding:24px;}
.page{display:none;}
.page.active{display:block;}

/* ── CARDS & GRIDS ─────────────────────────────────────────── */
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;}
.stat-card{
  background:#fff;border:1px solid var(--border);border-radius:var(--radius);
  padding:20px;position:relative;overflow:hidden;
  box-shadow:var(--shadow);transition:transform 0.2s,box-shadow 0.2s;
}
.stat-card:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);}
.stat-card::after{content:'';position:absolute;top:0;right:0;width:4px;height:100%;border-radius:0 var(--radius) var(--radius) 0;}
.stat-card.vert::after{background:var(--ci-vert);}
.stat-card.orange::after{background:var(--ci-orange);}
.stat-card.bleu::after{background:var(--bleu);}
.stat-card.gold::after{background:var(--ci-or);}
.stat-label{font-size:11px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;}
.stat-value{font-size:30px;font-weight:800;line-height:1;}
.stat-card.vert .stat-value{color:var(--ci-vert);}
.stat-card.orange .stat-value{color:var(--ci-orange);}
.stat-card.bleu .stat-value{color:var(--bleu);}
.stat-card.gold .stat-value{color:#92700A;}
.stat-sub{font-size:12px;color:var(--text3);margin-top:6px;}

/* ── TABLE ─────────────────────────────────────────────────── */
.card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;}
.card-header{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 20px;border-bottom:1px solid var(--border);
}
.card-header h3{font-size:14px;font-weight:700;}
.card-actions{display:flex;gap:8px;align-items:center;}
.filter-bar{padding:10px 20px;border-bottom:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap;}
.filter-select{
  background:#fff;border:1.5px solid var(--border);color:var(--text);
  padding:6px 10px;border-radius:7px;font-family:inherit;font-size:12px;
  cursor:pointer;outline:none;transition:border-color 0.15s;
}
.filter-select:focus{border-color:var(--ci-vert);}
.table-wrap{overflow-x:auto;}
table{width:100%;border-collapse:collapse;}
thead{background:var(--surface);}
th{padding:10px 14px;text-align:left;font-size:11px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:0.8px;white-space:nowrap;border-bottom:1.5px solid var(--border);}
td{padding:10px 14px;font-size:13px;border-bottom:1px solid #F3F4F6;vertical-align:middle;}
tr:last-child td{border-bottom:none;}
tr:hover td{background:#F9FAFB;}
.badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;}
.badge-vert{background:#ECFDF5;color:var(--ci-vert);}
.badge-orange{background:#FFF7ED;color:var(--ci-orange);}
.badge-bleu{background:var(--bleu-light);color:var(--bleu);}
.badge-gray{background:#F3F4F6;color:var(--text2);}
.badge-red{background:#FEF2F2;color:var(--danger);}
.badge-gold{background:#FFFBEB;color:#92700A;}
.actions-cell{display:flex;gap:5px;}
.icon-btn{background:none;border:none;cursor:pointer;padding:5px;border-radius:6px;font-size:14px;transition:background 0.15s;}
.icon-btn:hover{background:#F3F4F6;}
.pag-row{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;border-top:1px solid var(--border);}
.pag-info{font-size:12px;color:var(--text3);}
.pag-btns{display:flex;gap:4px;}
.pag-btn{padding:4px 10px;border-radius:6px;background:#fff;border:1.5px solid var(--border);font-size:12px;cursor:pointer;transition:all 0.15s;font-family:inherit;}
.pag-btn:hover{border-color:var(--ci-vert);color:var(--ci-vert);}
.pag-btn.active{background:var(--ci-vert);border-color:var(--ci-vert);color:#fff;}
.pag-btn:disabled{opacity:0.4;cursor:default;}

/* ── MODAL ─────────────────────────────────────────────────── */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:300;align-items:center;justify-content:center;backdrop-filter:blur(3px);}
.modal-overlay.active{display:flex;}
.modal{background:#fff;border-radius:16px;width:680px;max-width:96vw;max-height:92vh;overflow-y:auto;box-shadow:var(--shadow-lg);animation:modalIn 0.25s ease;}
@keyframes modalIn{from{transform:translateY(20px) scale(0.98);opacity:0;}to{transform:none;opacity:1;}}
.modal-header{padding:18px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:#fff;z-index:1;}
.modal-header h3{font-size:16px;font-weight:700;}
.modal-close{background:none;border:none;font-size:20px;cursor:pointer;color:var(--text3);padding:4px;line-height:1;border-radius:6px;}
.modal-close:hover{background:#F3F4F6;color:var(--text);}
.modal-body{padding:24px;}
.modal-footer{padding:14px 24px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:10px;}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.form-group.full{grid-column:1/-1;}
.form-group{display:flex;flex-direction:column;gap:5px;}

/* ── SAISIE DES NOTES ─────────────────────────────────────── */
.notes-form{max-width:700px;}
.notes-group{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:16px;}
.notes-group-title{font-size:13px;font-weight:700;color:var(--ci-vert);margin-bottom:16px;display:flex;align-items:center;gap:8px;}
.note-row{display:grid;grid-template-columns:1fr 140px 100px;gap:12px;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);}
.note-row:last-of-type{border-bottom:none;}
.note-label{font-size:13px;font-weight:500;}
.note-bareme{font-size:11px;color:var(--text3);font-family:'JetBrains Mono',monospace;}
.note-input{
  width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:7px;
  font-family:inherit;font-size:14px;font-weight:600;text-align:center;outline:none;
  transition:border-color 0.15s,box-shadow 0.15s;
}
.note-input:focus{border-color:var(--ci-vert);box-shadow:0 0 0 3px rgba(0,107,63,0.1);}
.note-input.error{border-color:var(--danger);background:#FEF2F2;}
.note-input.valid{border-color:var(--success);}
.result-bar{
  background:linear-gradient(135deg,var(--ci-vert),var(--ci-vert2));
  border-radius:var(--radius);padding:16px 20px;color:#fff;
  display:flex;justify-content:space-between;align-items:center;
  margin-top:8px;
}
.result-total{font-size:14px;font-weight:600;}
.result-moyenne{font-size:22px;font-weight:800;}
.result-mention{font-size:12px;background:rgba(255,255,255,0.2);padding:3px 10px;border-radius:10px;margin-top:4px;display:inline-block;}

/* ── STATISTIQUES & GRAPHIQUES ─────────────────────────────── */
.stats-section{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;}
.chart-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);}
.chart-title{font-size:13px;font-weight:700;margin-bottom:16px;color:var(--text);}
.bar-chart{display:flex;flex-direction:column;gap:10px;}
.bar-row{display:flex;align-items:center;gap:10px;}
.bar-label{font-size:12px;color:var(--text2);width:120px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.bar-track{flex:1;height:22px;background:#F3F4F6;border-radius:4px;overflow:hidden;position:relative;}
.bar-fill{height:100%;border-radius:4px;transition:width 0.6s ease;display:flex;align-items:center;padding-left:8px;}
.bar-fill span{font-size:11px;font-weight:700;color:#fff;}
.bar-val{font-size:12px;font-weight:600;color:var(--text2);width:45px;text-align:right;flex-shrink:0;}
.donut-wrap{display:flex;align-items:center;gap:20px;}
.donut-legend{display:flex;flex-direction:column;gap:8px;}
.legend-item{display:flex;align-items:center;gap:8px;font-size:12px;}
.legend-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}

/* ── BULLETIN ──────────────────────────────────────────────── */
.bulletin{background:#fff;border:2px solid var(--ci-vert);border-radius:var(--radius);padding:24px;max-width:640px;}
.bulletin-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px;padding-bottom:16px;border-bottom:2px solid var(--ci-vert);}
.bulletin-ci{text-align:center;font-size:11px;color:var(--text2);line-height:1.6;}
.bulletin-title{text-align:center;flex:1;padding:0 16px;}
.bulletin-title h2{font-size:16px;font-weight:800;color:var(--ci-vert);}
.bulletin-title p{font-size:11px;color:var(--text2);}
.bulletin-eleve-info{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:16px;font-size:12px;}
.bi-row{display:flex;gap:6px;}
.bi-label{font-weight:600;color:var(--text2);min-width:90px;}
.bi-val{color:var(--text);}
.bulletin-table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;}
.bulletin-table th{background:var(--ci-vert);color:#fff;padding:6px 10px;text-align:left;}
.bulletin-table td{padding:6px 10px;border-bottom:1px solid #E5E9EF;}
.bulletin-table tr:nth-child(even) td{background:#F0FAF5;}
.bulletin-total-row td{font-weight:700;background:linear-gradient(135deg,#E6F4EE,#D1EAE0)!important;}
.bulletin-mention{text-align:center;margin-top:12px;}
.mention-badge{
  display:inline-block;padding:6px 20px;border-radius:20px;
  font-weight:800;font-size:14px;letter-spacing:0.5px;
}

/* ── RESPONSIVE ─────────────────────────────────────────────── */
@media(max-width:900px){
  .stats-grid{grid-template-columns:1fr 1fr;}
  .stats-section{grid-template-columns:1fr;}
  .hide-sm{display:none!important;}
}

/* ── NOTIF ──────────────────────────────────────────────────── */
.notif{
  position:fixed;top:20px;right:20px;z-index:9999;
  padding:12px 18px;border-radius:10px;font-size:13px;font-weight:600;
  display:flex;align-items:center;gap:8px;
  box-shadow:var(--shadow-lg);animation:notifIn 0.3s ease;
}
@keyframes notifIn{from{transform:translateX(80px);opacity:0;}}
.notif-success{background:#ECFDF5;border:1px solid #6EE7B7;color:var(--success);}
.notif-error{background:#FEF2F2;border:1px solid #FECACA;color:var(--danger);}
.notif-info{background:var(--bleu-light);border:1px solid #BAE6FD;color:var(--info);}

/* ── EMPTY STATE ────────────────────────────────────────────── */
.empty-state{text-align:center;padding:48px 20px;color:var(--text3);}
.empty-icon{font-size:44px;margin-bottom:12px;}

/* ── SECTION TITLE ──────────────────────────────────────────── */
.section-title{
  font-size:11px;font-weight:700;color:var(--text3);
  text-transform:uppercase;letter-spacing:1.5px;
  margin-bottom:12px;display:flex;align-items:center;gap:8px;
}
.section-title::after{content:'';flex:1;height:1px;background:var(--border);}

/* ── SCROLLBAR ──────────────────────────────────────────────── */
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:#D1D5DB;border-radius:3px;}
::-webkit-scrollbar-thumb:hover{background:#9CA3AF;}
</style>
</head>
<body>

<!-- ══════════════════════════════════════════════════════════ -->
<!-- ÉCRAN DE CONNEXION                                         -->
<!-- ══════════════════════════════════════════════════════════ -->
<div id="login-screen">
  <div class="login-card">
    <div class="login-header">
      <div class="flags"><div class="flag orange"></div><div class="flag white"></div><div class="flag green"></div></div>
      <h1>LE PERROQUET · PGNEP</h1>
      <div class="login-badge">PGNEP — Plateforme de Gestion des Notes</div>
    </div>
    <div class="login-body">
      <h2>Connexion</h2>
      <p class="sub">Accès réservé au personnel autorisé — Année scolaire 2025–2026</p>
      <div class="form-field">
        <label>Identifiant</label>
        <input type="text" id="login-user" placeholder="Votre identifiant" autocomplete="username"
          onkeydown="if(event.key==='Enter')document.getElementById('login-pass').focus()">
      </div>
      <div class="form-field">
        <label>Mot de passe</label>
        <input type="password" id="login-pass" placeholder="••••••••" autocomplete="current-password"
          onkeydown="if(event.key==='Enter')doLogin()">
      </div>
      <button class="login-btn" onclick="doLogin()">Se connecter →</button>
      <div class="login-error" id="login-error">Identifiant ou mot de passe incorrect.</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════════ -->
<!-- APPLICATION PRINCIPALE                                     -->
<!-- ══════════════════════════════════════════════════════════ -->
<div class="app" id="app">

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-brand">
      <div class="ci-stripe">
        <div class="stripe g"></div><div class="stripe w"></div><div class="stripe o"></div>
      </div>
      <div class="brand-title">Le Perroquet</div>
      <div class="brand-sub">PGNEP · MENAET</div>
      <div class="brand-badge">v2.0 — CDC validé</div>
    </div>

    <div class="nav-group">
      <div class="nav-group-label">Principal</div>
      <div class="nav-item active" onclick="showPage('dashboard')">
        <span class="nav-icon">📊</span> Tableau de bord
      </div>
    </div>

    <div class="nav-group">
      <div class="nav-group-label">Élèves</div>
      <div class="nav-item" onclick="showPage('eleves')">
        <span class="nav-icon">👦</span> Gestion des élèves
        <span class="nav-badge" id="badge-eleves">0</span>
      </div>
      <div class="nav-item" onclick="showPage('saisie')">
        <span class="nav-icon">✏️</span> Saisie des notes
      </div>
    </div>

    <div class="nav-group">
      <div class="nav-group-label">Résultats</div>
      <div class="nav-item" onclick="showPage('resultats')">
        <span class="nav-icon">📈</span> Résultats & Stats
      </div>
      <div class="nav-item" onclick="showPage('bulletins')">
        <span class="nav-icon">📄</span> Bulletins de notes
      </div>
    </div>

    <div class="nav-group">
      <div class="nav-group-label">Administration</div>
      <div class="nav-item" onclick="showPage('ecoles')" id="nav-ecoles">
        <span class="nav-icon">🏫</span> Écoles & Structures
      </div>
      <div class="nav-item" onclick="showPage('export')">
        <span class="nav-icon">📤</span> Export / Synchro
      </div>
      <div class="nav-item" onclick="showPage('comptes')" id="nav-comptes" style="display:none;">
        <span class="nav-icon">👥</span> Comptes utilisateurs
      </div>
    </div>

    <div class="sidebar-user">
      <div class="user-info">
        <div class="user-avatar" id="user-avatar" style="background:var(--ci-vert);">D</div>
        <div>
          <div class="user-name" id="user-name">—</div>
          <div class="user-role" id="user-role-label">—</div>
        </div>
      </div>
      <button class="logout-btn" onclick="doLogout()">🚪 Déconnexion</button>
    </div>
  </aside>

  <!-- MAIN -->
  <main class="main">
    <div class="topbar">
      <div class="topbar-title" id="topbar-title">Tableau de bord</div>
      <span class="topbar-year">2025–2026</span>
      <div class="search-wrap">
        <span>🔍</span>
        <input type="text" id="global-search" placeholder="Rechercher un élève, une école…" oninput="onSearch(this.value)">
      </div>
      <button class="btn btn-primary" id="btn-add" onclick="openAddEleve()">＋ Ajouter</button>
    </div>

    <div class="content">

      <!-- ══ DASHBOARD ══════════════════════════════════════ -->
      <div id="page-dashboard" class="page active">
        <div class="stats-grid">
          <div class="stat-card vert">
            <div class="stat-label">Total élèves</div>
            <div class="stat-value" id="stat-eleves">0</div>
            <div class="stat-sub">Inscrits dans la base</div>
          </div>
          <div class="stat-card orange">
            <div class="stat-label">Notes saisies</div>
            <div class="stat-value" id="stat-notes">0</div>
            <div class="stat-sub">Enregistrements</div>
          </div>
          <div class="stat-card bleu">
            <div class="stat-label">Écoles</div>
            <div class="stat-value" id="stat-ecoles">0</div>
            <div class="stat-sub">Dans la base</div>
          </div>
          <div class="stat-card gold">
            <div class="stat-label">Taux de saisie</div>
            <div class="stat-value" id="stat-taux">—</div>
            <div class="stat-sub">Dernière évaluation</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
          <div class="card">
            <div class="card-header"><h3>📋 Derniers élèves enregistrés</h3>
              <button class="btn btn-secondary btn-sm" onclick="showPage('eleves')">Voir tout →</button>
            </div>
            <div class="table-wrap">
              <table><thead><tr><th>Nom & Prénoms</th><th>Classe</th><th>École</th><th>Matric.</th></tr></thead>
              <tbody id="dash-eleves-table"></tbody></table>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h3>📊 Dernières notes saisies</h3>
              <button class="btn btn-secondary btn-sm" onclick="showPage('resultats')">Voir →</button>
            </div>
            <div class="table-wrap">
              <table><thead><tr><th>Élève</th><th>Éval.</th><th>Moy.</th><th>Mention</th></tr></thead>
              <tbody id="dash-notes-table"></tbody></table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><h3>📉 Répartition par classe</h3></div>
          <div style="padding:20px;" id="dash-chart"></div>
        </div>
      </div>

      <!-- ══ GESTION DES ÉLÈVES ══════════════════════════════ -->
      <div id="page-eleves" class="page">
        <div class="card">
          <div class="card-header">
            <h3>👦 Base des élèves</h3>
            <div class="card-actions">
              <button class="btn btn-secondary btn-sm" onclick="importElevesCSV()">📥 Import CSV</button>
              <button class="btn btn-secondary btn-sm" onclick="exportElevesCSV()">⬇ Export</button>
              <button class="btn btn-primary btn-sm" onclick="openAddEleve()">＋ Ajouter</button>
            </div>
          </div>
          <div class="filter-bar">
            <select class="filter-select" id="filt-classe" onchange="renderEleves()">
              <option value="">Toutes les classes</option>
              <option>CP1</option><option>CP2</option><option>CE1</option>
              <option>CE2</option><option>CM1</option><option>CM2</option>
            </select>
            <select class="filter-select" id="filt-sexe" onchange="renderEleves()">
              <option value="">Tous les sexes</option>
              <option value="M">Masculin</option><option value="F">Féminin</option>
            </select>
            <select class="filter-select" id="filt-ecole-eleve" onchange="renderEleves()">
              <option value="">Toutes les écoles</option>
            </select>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr>
                <th>Matricule</th><th>Nom & Prénoms</th><th>Sexe</th><th>Classe</th>
                <th class="hide-sm">Date naiss.</th><th>École</th><th>Actions</th>
              </tr></thead>
              <tbody id="table-eleves"></tbody>
            </table>
          </div>
          <div class="pag-row">
            <div class="pag-info" id="pag-info-eleves"></div>
            <div class="pag-btns" id="pag-btns-eleves"></div>
          </div>
        </div>
        <input type="file" id="csv-input" style="display:none" accept=".csv,.xlsx" onchange="handleImportFile(this)">
      </div>

      <!-- ══ SAISIE DES NOTES ════════════════════════════════ -->
      <div id="page-saisie" class="page">
        <div style="display:grid;grid-template-columns:320px 1fr;gap:20px;">
          <div class="card" style="padding:20px;">
            <div class="section-title">Sélection</div>
            <div class="form-field">
              <label>Élève</label>
              <select class="filter-select" id="sel-eleve" style="width:100%;padding:10px;font-size:13px;" onchange="onEleveSelect()">
                <option value="">-- Choisir un élève --</option>
              </select>
            </div>
            <div id="eleve-card" style="display:none;background:var(--surface);border-radius:8px;padding:12px;font-size:12px;margin-bottom:12px;">
              <div style="font-weight:700;font-size:14px;margin-bottom:6px;" id="ec-nom"></div>
              <div id="ec-info" style="color:var(--text2);line-height:1.8;"></div>
            </div>
            <div class="form-field">
              <label>Type d'évaluation</label>
              <select class="filter-select" id="sel-eval" style="width:100%;padding:10px;font-size:13px;" onchange="buildNoteForm()">
                <option value="">-- Choisir --</option>
                <option value="composition1">Composition 1</option>
                <option value="composition2">Composition 2</option>
                <option value="composition3">Composition 3</option>
                <option value="composition4">Composition 4</option>
                <option value="examen_blanc1">Examen Blanc 1</option>
                <option value="examen_blanc2">Examen Blanc 2</option>
              </select>
            </div>
            <div id="existing-note-info" style="display:none;background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:10px;font-size:12px;color:var(--ci-orange);margin-bottom:8px;"></div>
          </div>
          <div class="card" style="padding:20px;" id="note-form-card">
            <div class="empty-state">
              <div class="empty-icon">✏️</div>
              <p>Sélectionner un élève et une évaluation pour commencer la saisie</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ RÉSULTATS & STATS ════════════════════════════════ -->
      <div id="page-resultats" class="page">
        <div class="card" style="margin-bottom:16px;">
          <div class="card-header"><h3>📈 Résultats des évaluations</h3>
            <div class="card-actions">
              <select class="filter-select" id="filt-res-eval" onchange="renderResultats()">
                <option value="">Toutes évaluations</option>
                <option value="composition1">Composition 1</option>
                <option value="composition2">Composition 2</option>
                <option value="composition3">Composition 3</option>
                <option value="composition4">Composition 4</option>
                <option value="examen_blanc1">Examen Blanc 1</option>
                <option value="examen_blanc2">Examen Blanc 2</option>
              </select>
              <select class="filter-select" id="filt-res-classe" onchange="renderResultats()">
                <option value="">Toutes classes</option>
                <option>CP1</option><option>CP2</option><option>CE1</option>
                <option>CE2</option><option>CM1</option><option>CM2</option>
              </select>
              <button class="btn btn-secondary btn-sm" onclick="exportResultatsCSV()">⬇ Export</button>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr>
                <th>Élève</th><th>Classe</th><th>École</th><th>Évaluation</th>
                <th>Total</th><th>Moyenne</th><th>Mention</th><th>Actions</th>
              </tr></thead>
              <tbody id="table-resultats"></tbody>
            </table>
          </div>
          <div class="pag-row">
            <div class="pag-info" id="pag-info-res"></div>
            <div class="pag-btns" id="pag-btns-res"></div>
          </div>
        </div>
        <div class="stats-section" id="stats-charts"></div>
      </div>

      <!-- ══ BULLETINS ══════════════════════════════════════ -->
      <div id="page-bulletins" class="page">
        <div style="display:grid;grid-template-columns:300px 1fr;gap:20px;">
          <div class="card" style="padding:20px;">
            <div class="section-title">Générer un bulletin</div>
            <div class="form-field">
              <label>Élève</label>
              <select class="filter-select" id="bul-eleve" style="width:100%;padding:10px;" onchange="genBulletin()">
                <option value="">-- Choisir --</option>
              </select>
            </div>
            <div class="form-field">
              <label>Évaluation</label>
              <select class="filter-select" id="bul-eval" style="width:100%;padding:10px;" onchange="genBulletin()">
                <option value="">-- Toutes --</option>
                <option value="composition1">Composition 1</option>
                <option value="composition2">Composition 2</option>
                <option value="composition3">Composition 3</option>
                <option value="composition4">Composition 4</option>
                <option value="examen_blanc1">Examen Blanc 1</option>
                <option value="examen_blanc2">Examen Blanc 2</option>
              </select>
            </div>
            <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px;" onclick="printBulletin()">🖨️ Imprimer</button>
          </div>
          <div id="bulletin-preview">
            <div class="card" style="padding:32px;text-align:center;color:var(--text3);">
              <div style="font-size:48px;margin-bottom:12px;">📄</div>
              <p>Sélectionner un élève pour générer son bulletin</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ ÉCOLES & STRUCTURES ════════════════════════════ -->
      <div id="page-ecoles" class="page">
        <div class="card">
          <div class="card-header"><h3>🏫 Écoles & Circonscriptions</h3>
            <button class="btn btn-primary btn-sm" onclick="openAddEcole()">＋ Ajouter une école</button>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr>
                <th>Nom de l'école</th><th>Code</th><th>IEPP</th><th>DRENAET</th><th>Élèves</th><th>Actions</th>
              </tr></thead>
              <tbody id="table-ecoles"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ══ EXPORT / SYNCHRO ════════════════════════════════ -->
      <div id="page-export" class="page">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <div class="card">
            <div class="card-header"><h3>📤 Exporter les données</h3></div>
            <div style="padding:20px;display:flex;flex-direction:column;gap:10px;">
              <p style="font-size:13px;color:var(--text2);margin-bottom:4px;">Télécharger les données en CSV :</p>
              <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="exportElevesCSV()">👦 Export liste des élèves (.csv)</button>
              <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="exportResultatsCSV()">📊 Export résultats complets (.csv)</button>
              <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="exportKoboChoices()">🔗 Export KoboToolbox choices (.csv)</button>
              <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="exportJSON()">📦 Export JSON complet</button>
              <div style="border-top:1px solid var(--border);margin-top:8px;padding-top:12px;">
                <button class="btn btn-orange" style="width:100%;justify-content:center;" onclick="exportAll()">📦 Tout exporter</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h3>📥 Importer des données</h3></div>
            <div style="padding:20px;display:flex;flex-direction:column;gap:12px;">
              <div id="import-drop"
                style="border:2px dashed var(--border);border-radius:10px;padding:28px;text-align:center;cursor:pointer;transition:all 0.2s;"
                onclick="document.getElementById('import-file').click()"
                ondragover="event.preventDefault();this.style.borderColor='var(--ci-vert)'"
                ondragleave="this.style.borderColor=''"
                ondrop="event.preventDefault();this.style.borderColor='';handleImportFileDrop(event)">
                <div style="font-size:36px;margin-bottom:8px;">📁</div>
                <p style="font-weight:600;font-size:14px;">Glisser ou cliquer</p>
                <p style="font-size:12px;color:var(--text3);margin-top:4px;">Excel (.xlsx) ou CSV (.csv) — liste d'élèves</p>
                <input type="file" id="import-file" style="display:none" accept=".csv,.xlsx" onchange="handleImportFile(this)">
              </div>
              <div id="import-result" style="display:none;"></div>
              <button class="btn btn-primary" id="btn-save-import" style="display:none;justify-content:center;" onclick="saveImport()">💾 Enregistrer dans la base</button>
              <p style="font-size:11px;color:var(--text3);">Colonnes reconnues : nom, prenoms, matricule, date_naissance, lieu_naissance, sexe, classe, ecole</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ COMPTES UTILISATEURS ════════════════════════════ -->
      <div id="page-comptes" class="page">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <div class="card">
            <div class="card-header"><h3>👥 Comptes utilisateurs</h3></div>
            <div style="padding:16px;" id="users-list"></div>
          </div>
          <div class="card">
            <div class="card-header"><h3 id="compte-form-title">➕ Nouveau compte</h3></div>
            <div style="padding:20px;display:flex;flex-direction:column;gap:12px;">
              <input type="hidden" id="edit-login-orig">
              <div class="form-field"><label>Identifiant</label><input type="text" id="new-login" placeholder="prenom.nom"></div>
              <div class="form-field"><label>Nom complet</label><input type="text" id="new-nom-user" placeholder="NOM PRÉNOMS"></div>
              <div class="form-field"><label>Mot de passe</label><input type="password" id="new-pass" placeholder="••••••••"></div>
              <div class="form-field"><label>Confirmer</label><input type="password" id="new-pass2" placeholder="••••••••"></div>
              <div class="form-field">
                <label>Rôle</label>
                <select class="filter-select" id="new-role" style="width:100%;padding:10px;">
                  <option value="admin">🔴 Administrateur</option>
                  <option value="coordinateur">🟡 Coordonnateur régional</option>
                  <option value="correspondant">🟢 Correspondant IEPP</option>
                  <option value="directeur">🟣 Directeur d&#39;école</option>
                  <option value="instituteur">🔵 Instituteur / Bénévole</option>
                  <option value="cppp">🔷 CPPP / CPI</option>
                  <option value="cabinet">⚫ Cabinet / Décideur</option>
                  <option value="lecteur">⚪ Lecteur</option>
                </select>
              </div>
              <div id="compte-error" style="display:none;background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:10px;font-size:13px;color:var(--danger);"></div>
              <div style="display:flex;gap:8px;">
                <button class="btn btn-primary" style="flex:1;justify-content:center;" onclick="saveCompte()">💾 Enregistrer</button>
                <button class="btn btn-secondary" onclick="resetCompteForm()">✕</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:20px;">
          <div class="card-header"><h3>📋 Droits par rôle — CDC v2</h3></div>
          <div style="padding:20px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;font-size:11px;">
            <div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:#DC2626;margin-bottom:5px;">🔴 Administrateur</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Tout accès<br>✅ Gestion comptes<br>✅ Import/Export<br>✅ Toutes structures<br>✅ Passage classe</p>
            </div>
            <div style="background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:var(--ci-orange);margin-bottom:5px;">🟡 Coordonnateur</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Sa DRENAET<br>✅ Saisie + résultats<br>✅ Export régional<br>❌ Gestion comptes<br>❌ Passage classe</p>
            </div>
            <div style="background:#F5F3FF;border:1px solid #DDD6FE;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:#7C3AED;margin-bottom:5px;">🟣 Directeur d'école</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Son école<br>✅ Saisie + suppression<br>✅ Valide passages<br>✅ Tous niveaux école<br>❌ Gestion comptes</p>
            </div>
            <div style="background:#ECFEFF;border:1px solid #A5F3FC;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:#0891B2;margin-bottom:5px;">🔵 Instituteur / Bénévole</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Sa classe uniquement<br>✅ Saisie notes<br>✅ Passage classe<br>❌ Autres classes<br>❌ Suppression</p>
            </div>
            <div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:#1A56DB;margin-bottom:5px;">🔷 CPPP / CPI</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Consultation<br>✅ Statistiques secteur<br>❌ Saisie notes<br>❌ Suppression<br>❌ Passage classe</p>
            </div>
            <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:var(--ci-vert);margin-bottom:5px;">🟢 Correspondant IEPP</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Son IEPP<br>✅ Saisie + résultats<br>❌ Export global<br>❌ Suppression<br>❌ Passage classe</p>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:#0D1B2A;margin-bottom:5px;">⚫ Cabinet</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Lecture nationale<br>✅ Stats agrégées<br>✅ Tableaux de bord<br>❌ Aucune modification<br>❌ Gestion comptes</p>
            </div>
            <div style="background:#F9FAFB;border:1px solid #F3F4F6;border-radius:8px;padding:10px;">
              <p style="font-weight:700;color:#6B7280;margin-bottom:5px;">⚪ Lecteur</p>
              <p style="line-height:1.9;color:var(--text2);">✅ Consultation seule<br>❌ Toute modification<br>❌ Import/Export<br>❌ Gestion comptes<br>❌ Passage classe</p>
            </div>
          </div>
          <div style="padding:0 20px 16px;font-size:11px;color:var(--text3);">
            <strong style="color:var(--text2);">Code 501 :</strong> peut être saisi à la place d'une note pour signaler une absence (ABS) ou un abandon — exclu du calcul de moyenne, affiché "ABS" sur le bulletin.
          </div>
        </div>
      </div>

    </div><!-- /content -->
  </main>
</div><!-- /app -->

<!-- ══════════════════════════════════════════════════════════ -->
<!-- MODAL ÉLÈVE                                                -->
<!-- ══════════════════════════════════════════════════════════ -->
<div class="modal-overlay" id="modal-eleve" onclick="closeModal('modal-eleve',event)">
  <div class="modal" onclick="event.stopPropagation()">
    <div class="modal-header">
      <h3 id="modal-eleve-title">Ajouter un élève</h3>
      <button class="modal-close" onclick="closeModal('modal-eleve')">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="form-group"><label class="form-field"><label>Nom</label><input type="text" id="e-nom" placeholder="NOM"></label></div>
        <div class="form-group"><label class="form-field"><label>Prénom(s)</label><input type="text" id="e-prenoms" placeholder="Prénoms"></label></div>
        <div class="form-group"><label class="form-field"><label>Matricule</label><input type="text" id="e-matricule" placeholder="CI-2025-XXXXX"></label></div>
        <div class="form-group"><label class="form-field"><label>Sexe</label>
          <select id="e-sexe" class="filter-select" style="width:100%;padding:9px;">
            <option value="M">Masculin</option><option value="F">Féminin</option>
          </select></label>
        </div>
        <div class="form-group"><label class="form-field"><label>Date de naissance</label><input type="date" id="e-ddn"></label></div>
        <div class="form-group"><label class="form-field"><label>Lieu de naissance</label><input type="text" id="e-lieu" placeholder="Ville"></label></div>
        <div class="form-group"><label class="form-field"><label>Classe</label>
          <select id="e-classe" class="filter-select" style="width:100%;padding:9px;">
            <option>CP1</option><option>CP2</option><option>CE1</option>
            <option>CE2</option><option>CM1</option><option>CM2</option>
          </select></label>
        </div>
        <div class="form-group"><label class="form-field"><label>École</label>
          <select id="e-ecole" class="filter-select" style="width:100%;padding:9px;" ></select>
          </label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-eleve')">Annuler</button>
      <button class="btn btn-primary" onclick="saveEleve()">💾 Enregistrer</button>
    </div>
  </div>
</div>

<!-- MODAL ÉCOLE -->
<div class="modal-overlay" id="modal-ecole" onclick="closeModal('modal-ecole',event)">
  <div class="modal" onclick="event.stopPropagation()">
    <div class="modal-header"><h3>Ajouter une école</h3><button class="modal-close" onclick="closeModal('modal-ecole')">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="form-group full"><label class="form-field"><label>Nom de l'école</label><input type="text" id="ec-nom-f" placeholder="École Primaire de ..."></label></div>
        <div class="form-group"><label class="form-field"><label>Code d'ouverture</label><input type="text" id="ec-code" placeholder="CI-2025-XXXX"></label></div>
        <div class="form-group"><label class="form-field"><label>IEPP</label><input type="text" id="ec-iepp" placeholder="IEPP ..."></label></div>
        <div class="form-group"><label class="form-field"><label>DRENAET</label><input type="text" id="ec-drena" placeholder="DRENAET ..."></label></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-ecole')">Annuler</button>
      <button class="btn btn-primary" onclick="saveEcole()">💾 Enregistrer</button>
    </div>
  </div>
</div>

<!-- MODAL DÉTAIL NOTE -->
<div class="modal-overlay" id="modal-detail-note" onclick="closeModal('modal-detail-note',event)">
  <div class="modal" onclick="event.stopPropagation()">
    <div class="modal-header"><h3 id="detail-note-title">Détail des notes</h3><button class="modal-close" onclick="closeModal('modal-detail-note')">✕</button></div>
    <div class="modal-body" id="detail-note-body"></div>
    <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal('modal-detail-note')">Fermer</button>
    <button class="btn btn-orange" id="btn-passage" style="display:none;" onclick="passageFromModal()">🎓 Passage en classe supérieure</button>
  </div>
  </div>
</div>

<script>
// ══════════════════════════════════════════════════════════════
// DONNÉES
// ══════════════════════════════════════════════════════════════
const _enc = s => btoa(unescape(encodeURIComponent(s)));

const DEFAUT_USERS = [
  { login:'admin',         nom:'Administrateur',  pass:_enc('Admin@2026'),   role:'admin' },
  { login:'diomande',      nom:'DIOMANDE YAYA',          pass:_enc('Desps@2026'),   role:'admin' },
  { login:'coordinateur',  nom:'Coordonnateur DRENAET',  pass:_enc('Coord@2026'),   role:'coordinateur' },
  { login:'directeur',     nom:"Directeur d\u2019\u00c9cole",      pass:_enc('Direc@2026'),   role:'directeur' },
  { login:'instituteur',   nom:'Instituteur / Bénévole', pass:_enc('Instit@2026'),  role:'instituteur' },
  { login:'cppp',          nom:'CPPP / CPI',             pass:_enc('Cppp@2026'),    role:'cppp' },
  { login:'cabinet',       nom:'Cabinet / Décideur',     pass:_enc('Cabin@2026'),   role:'cabinet' },
  { login:'lecteur',       nom:'Lecteur',                pass:_enc('Lect@2026'),    role:'lecteur' },
];

const DEFAUT_ECOLES = [
  { id:'ec1', nom:'École Primaire Publique Cocody',    code:'CI-AB-001', iepp:'IEPP Cocody',   drena:'DRENAET Abidjan 1' },
  { id:'ec2', nom:'École Primaire Publique Bouaflé Centre', code:'CI-BF-001', iepp:'IEPP Bouaflé Centre', drena:'DRENAET Bouaflé' },
  { id:'ec3', nom:'École Primaire Publique Sinfra 2',  code:'CI-SF-002', iepp:'IEPP Sinfra 2', drena:'DRENAET Sinfra' },
  { id:'ec4', nom:'École Primaire Publique Divo 3',    code:'CI-DV-003', iepp:'IEPP Divo 3',   drena:'DRENAET Divo' },
];

const DEFAUT_ELEVES = [
  { id:'el1',  nom:'KONAN',    prenoms:'Jean-Baptiste',  matricule:'CI-2025-001', sexe:'M', ddn:'2015-03-12', lieu:'Abidjan',  classe:'CM2', ecole_id:'ec1' },
  { id:'el2',  nom:'DIALLO',   prenoms:'Aminata',        matricule:'CI-2025-002', sexe:'F', ddn:'2016-07-22', lieu:'Bouaflé',  classe:'CM1', ecole_id:'ec2' },
  { id:'el3',  nom:'COULIBALY',prenoms:'Ibrahim',        matricule:'CI-2025-003', sexe:'M', ddn:'2017-01-05', lieu:'Sinfra',   classe:'CE2', ecole_id:'ec3' },
  { id:'el4',  nom:'TRAORE',   prenoms:'Fatoumata',      matricule:'CI-2025-004', sexe:'F', ddn:'2017-09-14', lieu:'Divo',     classe:'CE2', ecole_id:'ec4' },
  { id:'el5',  nom:'BAMBA',    prenoms:'Souleymane',     matricule:'CI-2025-005', sexe:'M', ddn:'2018-04-30', lieu:'Abidjan',  classe:'CE1', ecole_id:'ec1' },
  { id:'el6',  nom:'TOURÉ',    prenoms:'Marie-Claire',   matricule:'CI-2025-006', sexe:'F', ddn:'2018-11-18', lieu:'Bouaflé',  classe:'CE1', ecole_id:'ec2' },
  { id:'el7',  nom:'KONE',     prenoms:'Abdoulaye',      matricule:'CI-2025-007', sexe:'M', ddn:'2019-02-25', lieu:'Sinfra',   classe:'CP2', ecole_id:'ec3' },
  { id:'el8',  nom:'YAO',      prenoms:'Cécile',         matricule:'CI-2025-008', sexe:'F', ddn:'2019-06-10', lieu:'Divo',     classe:'CP2', ecole_id:'ec4' },
  { id:'el9',  nom:'OUATTARA', prenoms:'Moussa',         matricule:'CI-2025-009', sexe:'M', ddn:'2020-01-03', lieu:'Abidjan',  classe:'CP1', ecole_id:'ec1' },
  { id:'el10', nom:'DEMBELE',  prenoms:'Kadiatou',       matricule:'CI-2025-010', sexe:'F', ddn:'2020-08-17', lieu:'Bouaflé',  classe:'CP1', ecole_id:'ec2' },
];

// Notes de démonstration
const DEFAUT_NOTES = [
  { id:'n1', eleve_id:'el1', eval_type:'composition1', classe:'CM2',
    notes:{ cm2_dictee:16, cm2_exploitation:38, cm2_maths:42, cm2_eveil:36, cm2_eps:15 } },
  { id:'n2', eleve_id:'el2', eval_type:'composition1', classe:'CM1',
    notes:{ cecm_dictee:14, cecm_exploitation:35, cecm_maths:40, cecm_eveil:38 } },
  { id:'n3', eleve_id:'el3', eval_type:'composition1', classe:'CE2',
    notes:{ cecm_dictee:12, cecm_exploitation:30, cecm_maths:35, cecm_eveil:32 } },
  { id:'n4', eleve_id:'el4', eval_type:'composition2', classe:'CE2',
    notes:{ cecm_dictee:17, cecm_exploitation:42, cecm_maths:44, cecm_eveil:40 } },
  { id:'n5', eleve_id:'el5', eval_type:'composition1', classe:'CE1',
    notes:{ cecm_dictee:15, cecm_exploitation:38, cecm_maths:36, cecm_eveil:35 } },
  { id:'n6', eleve_id:'el7', eval_type:'composition1', classe:'CP2',
    notes:{ cp_dictee:8, cp_lecture:7, cp_ecriture:9, cp_maths:8, cp_eveil:7, cp_edhc:9, cp_dessin:8, cp_poesie:7 } },
  { id:'n7', eleve_id:'el8', eval_type:'composition1', classe:'CP2',
    notes:{ cp_dictee:9, cp_lecture:9, cp_ecriture:8, cp_maths:10, cp_eveil:8, cp_edhc:9, cp_dessin:7, cp_poesie:8 } },
];

// ── Chargement DB ──
const DB = { users:[], ecoles:[], eleves:[], notes:[] };
function loadDB() {
  DB.users   = JSON.parse(localStorage.getItem('pgnep_users')   || 'null') || [...DEFAUT_USERS];
  DB.ecoles  = JSON.parse(localStorage.getItem('pgnep_ecoles')  || 'null') || [...DEFAUT_ECOLES];
  DB.eleves  = JSON.parse(localStorage.getItem('pgnep_eleves')  || 'null') || [...DEFAUT_ELEVES];
  DB.notes   = JSON.parse(localStorage.getItem('pgnep_notes')   || 'null') || [...DEFAUT_NOTES];
}
function save(key) { localStorage.setItem('pgnep_'+key, JSON.stringify(DB[key])); }

// ══════════════════════════════════════════════════════════════
// AUTH
// ══════════════════════════════════════════════════════════════
let currentUser = null;
const ROLE_COLORS = {
  admin:'#DC2626', coordinateur:'#D97706', correspondant:'#059669',
  directeur:'#7C3AED', instituteur:'#0891B2', cppp:'#1A56DB',
  cabinet:'#0D1B2A', lecteur:'#6B7280'
};
const ROLE_LABELS = {
  admin:'Administrateur', coordinateur:'Coordonnateur régional',
  correspondant:'Correspondant IEPP', directeur:"Directeur d\u2019\u00e9cole",
  instituteur:'Instituteur / Bénévole', cppp:'CPPP / CPI',
  cabinet:'Cabinet / Décideur', lecteur:'Lecteur'
};

function doLogin() {
  const login = document.getElementById('login-user').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-error');
  errEl.style.display = 'none';
  if (!login || !pass) { errEl.textContent='Champs obligatoires.'; errEl.style.display='block'; return; }
  const user = DB.users.find(u => u.login===login && u.pass===_enc(pass));
  if (!user) { errEl.textContent='Identifiant ou mot de passe incorrect.'; errEl.style.display='block'; document.getElementById('login-pass').value=''; return; }
  currentUser = { login:user.login, nom:user.nom, role:user.role };
  document.getElementById('login-screen').style.display='none';
  document.getElementById('app').classList.add('visible');
  applyRoleUI();
  initApp();
  showNotif(`👋 Bienvenue, ${user.nom}`, 'success');
}

function doLogout() {
  if (!confirm('Déconnexion ?')) return;
  currentUser = null;
  document.getElementById('login-screen').style.display='flex';
  document.getElementById('app').classList.remove('visible');
  document.getElementById('login-user').value='';
  document.getElementById('login-pass').value='';
}

function applyRoleUI() {
  const r = currentUser.role;
  document.getElementById('user-name').textContent = currentUser.nom;
  document.getElementById('user-role-label').textContent = ROLE_LABELS[r] || r;
  document.getElementById('user-avatar').textContent = currentUser.nom.charAt(0).toUpperCase();
  document.getElementById('user-avatar').style.background = ROLE_COLORS[r] || 'var(--ci-vert)';
  // Admin uniquement
  document.getElementById('nav-comptes').style.display = r==='admin' ? 'flex' : 'none';
  document.getElementById('btn-add').style.display = r==='lecteur' ? 'none' : 'flex';
}

// Hiérarchie des droits CDC v2
function canEdit()   { return currentUser && !['lecteur','cabinet','cppp'].includes(currentUser.role); }
function canDelete() { return currentUser && ['admin','directeur'].includes(currentUser.role); }
function canPassage(){ return currentUser && ['instituteur','directeur','admin'].includes(currentUser.role); }

// ══════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════
const PAGE_LABELS = {
  dashboard:'Tableau de bord', eleves:'Gestion des élèves',
  saisie:'Saisie des notes', resultats:'Résultats & Statistiques',
  bulletins:'Bulletins de notes', ecoles:'Écoles & Structures',
  export:'Export / Synchronisation', comptes:'Comptes utilisateurs'
};

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-'+name);
  if (!pageEl) return;
  pageEl.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.getAttribute('onclick')===`showPage('${name}')`) n.classList.add('active');
  });
  document.getElementById('topbar-title').textContent = PAGE_LABELS[name] || name;
  if (name==='eleves')    { renderEleves(); populateEcoleFilter(); }
  if (name==='resultats') { renderResultats(); renderStatsCharts(); }
  if (name==='bulletins') { populateBulletinSelects(); }
  if (name==='comptes')   { renderUsersList(); }
  if (name==='ecoles')    { renderEcoles(); }
  if (name==='saisie')    { populateSaisieEleves(); }
}

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
window.onload = function() {
  loadDB();
  setTimeout(() => document.getElementById('login-user').focus(), 100);
};

function initApp() {
  updateStats();
  renderDashboard();
}

function updateStats() {
  document.getElementById('stat-eleves').textContent = DB.eleves.length;
  document.getElementById('stat-notes').textContent  = DB.notes.length;
  document.getElementById('stat-ecoles').textContent = DB.ecoles.length;
  document.getElementById('badge-eleves').textContent = DB.eleves.length;
  // Taux de saisie
  const total = DB.eleves.length;
  const saisis = [...new Set(DB.notes.map(n=>n.eleve_id))].length;
  document.getElementById('stat-taux').textContent = total > 0 ? Math.round(saisis/total*100)+'%' : '—';
}

// ══════════════════════════════════════════════════════════════
// CALCUL DES NOTES
// ══════════════════════════════════════════════════════════════
// v501 : si la valeur est 501 (ABS), on l'exclut du calcul
function noteVal(v) { return (v === 501 || v === '501') ? null : (parseFloat(v) || 0); }

function calcNote(note) {
  const n = note.notes;
  const c = note.classe;
  let keys=[], baremes={}, totalBareme=0;

  if (c==='CP1' || c==='CP2') {
    keys = ['cp_dictee','cp_lecture','cp_ecriture','cp_maths','cp_eveil','cp_edhc','cp_dessin','cp_poesie'];
    keys.forEach(k => baremes[k] = 10);
  } else if (note.eval_type==='examen_blanc1' || note.eval_type==='examen_blanc2') {
    keys = ['cm2_dictee','cm2_exploitation','cm2_maths','cm2_eveil','cm2_eps'];
    baremes = { cm2_dictee:20, cm2_exploitation:50, cm2_maths:50, cm2_eveil:50, cm2_eps:20 };
  } else {
    keys = ['cecm_dictee','cecm_exploitation','cecm_maths','cecm_eveil'];
    baremes = { cecm_dictee:20, cecm_exploitation:50, cecm_maths:50, cecm_eveil:50 };
  }

  let total=0, baremeEffectif=0, nbAbs=0;
  keys.forEach(k => {
    const v = noteVal(n[k]);
    if (v === null) { nbAbs++; }
    else { total += v; baremeEffectif += baremes[k]; }
    totalBareme += baremes[k];
  });

  // Calcul du div proportionnel au barème effectif (matières non-ABS)
  const div = baremeEffectif > 0 ? baremeEffectif / 20 : 1;
  const moy = baremeEffectif > 0 ? Math.round((total / div) * 100) / 100 : 0;
  const maxMoy = 20;
  return { total, bareme: totalBareme, baremeEffectif, moy, maxMoy, nbAbs };
}

// Seuils officiels CDC v2 — moyenne ramenée sur 20
function getMention(moy, maxMoy) {
  // Ramener la moyenne sur 20 pour appliquer les seuils officiels
  const m20 = maxMoy > 0 ? (moy / maxMoy) * 20 : 0;
  if (m20 >= 19)   return { label:'Excellent',   cls:'badge-vert',   color:'var(--ci-vert)' };
  if (m20 >= 17)   return { label:'Très Bien',   cls:'badge-bleu',   color:'var(--bleu)' };
  if (m20 >= 15)   return { label:'Bien',        cls:'badge-bleu',   color:'#1D4ED8' };
  if (m20 >= 13)   return { label:'Assez Bien',  cls:'badge-orange', color:'var(--ci-orange)' };
  if (m20 >= 10)   return { label:'Passable',    cls:'badge-gold',   color:'#92700A' };
  return           { label:'Insuffisant',        cls:'badge-red',    color:'var(--danger)' };
}

const EVAL_LABELS = {
  composition1:'Composition 1', composition2:'Composition 2',
  composition3:'Composition 3', composition4:'Composition 4',
  examen_blanc1:'Examen Blanc 1', examen_blanc2:'Examen Blanc 2'
};

// ══════════════════════════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════════════════════════
function renderDashboard() {
  // Derniers élèves
  const tEL = document.getElementById('dash-eleves-table');
  const lastEleves = DB.eleves.slice(-8).reverse();
  tEL.innerHTML = lastEleves.length ? lastEleves.map(e => {
    const ec = DB.ecoles.find(x=>x.id===e.ecole_id);
    return `<tr><td><strong>${e.nom}</strong> ${e.prenoms}</td><td><span class="badge badge-vert">${e.classe}</span></td><td style="font-size:12px;">${ec?ec.nom:'—'}</td><td style="font-size:11px;font-family:'JetBrains Mono',monospace;">${e.matricule}</td></tr>`;
  }).join('') : '<tr><td colspan="4" class="empty-state"><p>Aucun élève</p></td></tr>';

  // Dernières notes
  const tN = document.getElementById('dash-notes-table');
  const lastNotes = DB.notes.slice(-6).reverse();
  tN.innerHTML = lastNotes.length ? lastNotes.map(n => {
    const el = DB.eleves.find(e=>e.id===n.eleve_id);
    const { moy, maxMoy } = calcNote(n);
    const men = getMention(moy, maxMoy);
    return `<tr>
      <td style="font-size:12px;">${el ? el.nom+' '+el.prenoms : '—'}</td>
      <td><span class="badge badge-gray" style="font-size:10px;">${EVAL_LABELS[n.eval_type]||n.eval_type}</span></td>
      <td><strong>${moy.toFixed(2)}</strong>/${maxMoy}</td>
      <td><span class="badge ${men.cls}" style="font-size:10px;">${men.label}</span></td>
    </tr>`;
  }).join('') : '<tr><td colspan="4" class="empty-state"><p>Aucune note</p></td></tr>';

  // Graphique répartition par classe
  const classes = ['CP1','CP2','CE1','CE2','CM1','CM2'];
  const counts = classes.map(c => DB.eleves.filter(e=>e.classe===c).length);
  const maxC = Math.max(...counts, 1);
  const colors = ['#006B3F','#00843D','#F77F00','#E07000','#1A56DB','#0D40A0'];
  document.getElementById('dash-chart').innerHTML = `
    <div class="bar-chart">
      ${classes.map((c,i) => `
        <div class="bar-row">
          <div class="bar-label">${c}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${Math.round(counts[i]/maxC*100)}%;background:${colors[i]};">
              <span>${counts[i]}</span>
            </div>
          </div>
          <div class="bar-val">${counts[i]} élève${counts[i]>1?'s':''}</div>
        </div>`).join('')}
    </div>`;
}

// ══════════════════════════════════════════════════════════════
// ÉLÈVES
// ══════════════════════════════════════════════════════════════
let elevesPage = 0;
const PAGE_SIZE = 12;
let searchTerm = '';

function getElevesFiltres() {
  let data = DB.eleves;
  const fc = document.getElementById('filt-classe')?.value;
  const fs = document.getElementById('filt-sexe')?.value;
  const fe = document.getElementById('filt-ecole-eleve')?.value;
  if (fc) data = data.filter(e=>e.classe===fc);
  if (fs) data = data.filter(e=>e.sexe===fs);
  if (fe) data = data.filter(e=>e.ecole_id===fe);
  if (searchTerm) data = data.filter(e=>JSON.stringify(e).toLowerCase().includes(searchTerm));
  return data;
}

function renderEleves() {
  const data = getElevesFiltres();
  const pg = elevesPage;
  const pageData = data.slice(pg*PAGE_SIZE, (pg+1)*PAGE_SIZE);
  const tbody = document.getElementById('table-eleves');

  tbody.innerHTML = pageData.length ? pageData.map(e => {
    const ec = DB.ecoles.find(x=>x.id===e.ecole_id);
    const idx = DB.eleves.indexOf(e);
    return `<tr>
      <td><code style="font-family:'JetBrains Mono',monospace;font-size:11px;">${e.matricule}</code></td>
      <td><strong>${e.nom}</strong> ${e.prenoms}</td>
      <td><span class="badge ${e.sexe==='F'?'badge-orange':'badge-bleu'}">${e.sexe==='F'?'Féminin':'Masculin'}</span></td>
      <td><span class="badge badge-vert">${e.classe}</span></td>
      <td class="hide-sm" style="font-size:12px;">${e.ddn||'—'}</td>
      <td style="font-size:12px;">${ec?ec.nom:'—'}</td>
      <td><div class="actions-cell">
        <button class="icon-btn" onclick="viewEleve(${idx})" title="Voir">👁</button>
        ${canEdit()?`<button class="icon-btn" onclick="editEleve(${idx})" title="Modifier">✏️</button>`:''}
        ${canDelete()?`<button class="icon-btn" onclick="deleteEleve(${idx})" title="Supprimer">🗑</button>`:''}
      </div></td>
    </tr>`;
  }).join('') : `<tr><td colspan="7"><div class="empty-state"><div class="empty-icon">🔍</div><p>Aucun résultat</p></div></td></tr>`;

  renderPag('eleves', data.length, pg, (p) => { elevesPage=p; renderEleves(); });
}

function populateEcoleFilter() {
  const sel = document.getElementById('filt-ecole-eleve');
  const selModal = document.getElementById('e-ecole');
  const opts = DB.ecoles.map(e=>`<option value="${e.id}">${e.nom}</option>`).join('');
  if(sel) { const first=sel.options[0]; sel.innerHTML=''; sel.appendChild(first); sel.insertAdjacentHTML('beforeend',opts); }
  if(selModal) selModal.innerHTML = '<option value="">-- École --</option>'+opts;
}

let editingEleveIdx = null;
function openAddEleve() {
  if (!canEdit()) { showNotif('🔒 Accès refusé', 'error'); return; }
  editingEleveIdx = null;
  document.getElementById('modal-eleve-title').textContent = '➕ Ajouter un élève';
  ['e-nom','e-prenoms','e-matricule','e-lieu'].forEach(id => document.getElementById(id).value='');
  document.getElementById('e-sexe').value='M';
  document.getElementById('e-classe').value='CP1';
  document.getElementById('e-ddn').value='';
  populateEcoleFilter();
  document.getElementById('modal-eleve').classList.add('active');
}
function editEleve(idx) {
  if (!canEdit()) { showNotif('🔒 Accès refusé', 'error'); return; }
  editingEleveIdx = idx;
  const e = DB.eleves[idx];
  document.getElementById('modal-eleve-title').textContent = '✏️ Modifier l\'élève';
  document.getElementById('e-nom').value       = e.nom;
  document.getElementById('e-prenoms').value   = e.prenoms;
  document.getElementById('e-matricule').value = e.matricule;
  document.getElementById('e-sexe').value      = e.sexe;
  document.getElementById('e-ddn').value       = e.ddn||'';
  document.getElementById('e-lieu').value      = e.lieu||'';
  document.getElementById('e-classe').value    = e.classe;
  populateEcoleFilter();
  document.getElementById('e-ecole').value = e.ecole_id||'';
  document.getElementById('modal-eleve').classList.add('active');
}
function viewEleve(idx) {
  const e = DB.eleves[idx];
  const ec = DB.ecoles.find(x=>x.id===e.ecole_id);
  const notesEleve = DB.notes.filter(n=>n.eleve_id===e.id);
  let html = `<div style="background:var(--surface);border-radius:8px;padding:16px;margin-bottom:16px;">
    <h4 style="margin-bottom:10px;">${e.nom} ${e.prenoms}</h4>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;">
      <div><strong>Matricule :</strong> ${e.matricule}</div>
      <div><strong>Classe :</strong> ${e.classe}</div>
      <div><strong>Sexe :</strong> ${e.sexe==='F'?'Féminin':'Masculin'}</div>
      <div><strong>Naissance :</strong> ${e.ddn||'—'}</div>
      <div><strong>Lieu :</strong> ${e.lieu||'—'}</div>
      <div><strong>École :</strong> ${ec?ec.nom:'—'}</div>
    </div>
  </div>`;
  if (notesEleve.length) {
    html += '<h4 style="margin-bottom:10px;">Résultats</h4><table style="width:100%;font-size:12px;border-collapse:collapse;">'
    + '<thead><tr><th style="text-align:left;padding:6px;border-bottom:2px solid var(--border);">Évaluation</th><th style="padding:6px;border-bottom:2px solid var(--border);">Total</th><th style="padding:6px;border-bottom:2px solid var(--border);">Moy.</th><th style="padding:6px;border-bottom:2px solid var(--border);">Mention</th></tr></thead><tbody>';
    notesEleve.forEach(n => {
      const { total, bareme, moy, maxMoy } = calcNote(n);
      const men = getMention(moy, maxMoy);
      html += `<tr><td style="padding:6px;border-bottom:1px solid #F3F4F6;">${EVAL_LABELS[n.eval_type]||n.eval_type}</td><td style="padding:6px;border-bottom:1px solid #F3F4F6;text-align:center;">${total}/${bareme}</td><td style="padding:6px;border-bottom:1px solid #F3F4F6;text-align:center;font-weight:700;">${moy.toFixed(2)}</td><td style="padding:6px;border-bottom:1px solid #F3F4F6;"><span class="badge ${men.cls}">${men.label}</span></td></tr>`;
    });
    html += '</tbody></table>';
  } else html += '<p style="color:var(--text3);font-size:13px;">Aucune note saisie pour cet élève.</p>';

  document.getElementById('detail-note-title').textContent = e.nom+' '+e.prenoms;
  document.getElementById('detail-note-body').innerHTML = html;
  // Afficher bouton passage si droits suffisants
  const btnP = document.getElementById('btn-passage');
  if (btnP) {
    btnP.style.display = canPassage() ? 'flex' : 'none';
    btnP.setAttribute('data-idx', idx);
  }
  document.getElementById('modal-detail-note').classList.add('active');
}

function passageFromModal() {
  const btn = document.getElementById('btn-passage');
  const idx = parseInt(btn.getAttribute('data-idx'));
  passageClasse(idx);
}
function saveEleve() {
  const nom      = document.getElementById('e-nom').value.trim().toUpperCase();
  const prenoms  = document.getElementById('e-prenoms').value.trim();
  const matric   = document.getElementById('e-matricule').value.trim();
  const sexe     = document.getElementById('e-sexe').value;
  const ddn      = document.getElementById('e-ddn').value;
  const lieu     = document.getElementById('e-lieu').value.trim();
  const classe   = document.getElementById('e-classe').value;
  const ecole_id = document.getElementById('e-ecole').value;
  if (!nom||!prenoms) { showNotif('Nom et prénom obligatoires', 'error'); return; }
  const rec = { nom, prenoms, matricule:matric||genId('CI-2025'), sexe, ddn, lieu, classe, ecole_id };
  if (editingEleveIdx !== null) { DB.eleves[editingEleveIdx] = { ...DB.eleves[editingEleveIdx], ...rec }; showNotif('✅ Élève modifié', 'success'); }
  else { rec.id = genId('el'); DB.eleves.unshift(rec); showNotif('✅ Élève ajouté', 'success'); }
  save('eleves');
  closeModal('modal-eleve');
  updateStats();
  renderEleves();
  renderDashboard();
}
function deleteEleve(idx) {
  if (!canDelete()) { showNotif('🔒 Accès refusé', 'error'); return; }
  if (!confirm('Supprimer cet élève et toutes ses notes ?')) return;
  const id = DB.eleves[idx].id;
  DB.eleves.splice(idx,1);
  DB.notes = DB.notes.filter(n=>n.eleve_id!==id);
  save('eleves'); save('notes');
  updateStats(); renderEleves(); renderDashboard();
  showNotif('🗑 Élève supprimé', 'info');
}

// ══════════════════════════════════════════════════════════════
// SAISIE DES NOTES
// ══════════════════════════════════════════════════════════════
const MATIERES = {
  CP: [
    { key:'cp_dictee',   label:'Dictée',                 max:10 },
    { key:'cp_lecture',  label:'Lecture',                max:10 },
    { key:'cp_ecriture', label:'Écriture',               max:10 },
    { key:'cp_maths',    label:'Mathématiques',          max:10 },
    { key:'cp_eveil',    label:'Éveil au Milieu',        max:10 },
    { key:'cp_edhc',     label:'EDHC',                   max:10 },
    { key:'cp_dessin',   label:'Dessin',                 max:10 },
    { key:'cp_poesie',   label:'Poésie / Musique / Chant',max:10 },
  ],
  CECM: [
    { key:'cecm_dictee',       label:'Dictée',                max:20 },
    { key:'cecm_exploitation', label:'Exploitation de Texte', max:50 },
    { key:'cecm_maths',        label:'Mathématiques',         max:50 },
    { key:'cecm_eveil',        label:'Éveil au Milieu',       max:50 },
  ],
  CM2_EXAMEN: [
    { key:'cm2_dictee',       label:'Dictée',                max:20 },
    { key:'cm2_exploitation', label:'Exploitation de Texte', max:50 },
    { key:'cm2_maths',        label:'Mathématiques',         max:50 },
    { key:'cm2_eveil',        label:'Éveil au Milieu',       max:50 },
    { key:'cm2_eps',          label:'EPS',                   max:20 },
  ],
};

function getBloc(classe, evalType) {
  if (classe==='CP1' || classe==='CP2') return 'CP';
  if ((evalType==='examen_blanc1'||evalType==='examen_blanc2') && classe==='CM2') return 'CM2_EXAMEN';
  return 'CECM';
}

function populateSaisieEleves() {
  const sel = document.getElementById('sel-eleve');
  sel.innerHTML = '<option value="">-- Choisir un élève --</option>' +
    DB.eleves.map(e=>`<option value="${e.id}">${e.nom} ${e.prenoms} (${e.classe})</option>`).join('');
}

function onEleveSelect() {
  const id = document.getElementById('sel-eleve').value;
  const card = document.getElementById('eleve-card');
  if (!id) { card.style.display='none'; buildNoteForm(); return; }
  const e = DB.eleves.find(x=>x.id===id);
  const ec = DB.ecoles.find(x=>x.id===e.ecole_id);
  card.style.display='block';
  document.getElementById('ec-nom').textContent = e.nom+' '+e.prenoms;
  document.getElementById('ec-info').innerHTML = `Matricule : ${e.matricule}<br>Classe : <strong>${e.classe}</strong><br>École : ${ec?ec.nom:'—'}`;
  buildNoteForm();
}

function buildNoteForm() {
  const eleveId  = document.getElementById('sel-eleve').value;
  const evalType = document.getElementById('sel-eval').value;
  const formCard = document.getElementById('note-form-card');
  const existInfo = document.getElementById('existing-note-info');
  existInfo.style.display = 'none';

  if (!eleveId || !evalType) {
    formCard.innerHTML = '<div class="empty-state"><div class="empty-icon">✏️</div><p>Sélectionner un élève et une évaluation</p></div>';
    return;
  }

  const eleve = DB.eleves.find(e=>e.id===eleveId);
  const bloc  = getBloc(eleve.classe, evalType);
  const matieres = MATIERES[bloc];
  const existing = DB.notes.find(n=>n.eleve_id===eleveId && n.eval_type===evalType);

  if (existing) {
    existInfo.style.display='block';
    existInfo.textContent='⚠️ Des notes existent déjà pour cette évaluation. La sauvegarde les mettra à jour.';
  }

  const titres = { CP:'NOTES CP (sur 10 par matière)', CECM:'NOTES CE / CM (Compositions)', CM2_EXAMEN:'NOTES CM2 — Examen Blanc' };
  const totaux = { CP:'/80 — Moy. /10', CECM:'/170 — Moy. /20', CM2_EXAMEN:'/190 — Moy. /20' };

  formCard.innerHTML = `
    <div class="notes-group">
      <div class="notes-group-title">📝 ${titres[bloc]}</div>
      ${matieres.map(m => {
        const val = existing ? (existing.notes[m.key]||'') : '';
        return `<div class="note-row">
          <div class="note-label">${m.label}</div>
          <div class="note-bareme">sur ${m.max}</div>
          <input type="number" class="note-input" id="inp-${m.key}"
            value="${val}" min="0" max="${m.max}" step="0.5"
            placeholder="0–${m.max} / 501" oninput="validateNote(this,${m.max}); calcLive()">
        </div>`;
      }).join('')}
    </div>
    <div class="result-bar" id="result-bar">
      <div>
        <div class="result-total" id="res-total">Total : — ${totaux[bloc]}</div>
        <div class="result-mention" id="res-mention">—</div>
      </div>
      <div class="result-moyenne" id="res-moy">—</div>
    </div>
    <div style="display:flex;gap:10px;margin-top:16px;">
      ${canEdit()?`<button class="btn btn-primary" onclick="saveNote()">💾 Enregistrer les notes</button>`:''}
      <button class="btn btn-secondary" onclick="clearNoteForm()">✕ Effacer</button>
    </div>
  `;
  calcLive();
}

function validateNote(inp, max) {
  const raw = inp.value.trim();
  if (raw === '') { inp.classList.remove('error','valid'); return; }
  // Code 501 = Absent / Abandon — accepté sans erreur
  if (raw === '501') { inp.classList.remove('error'); inp.classList.add('valid'); inp.style.color='var(--text2)'; return; }
  inp.style.color = '';
  const v = parseFloat(raw);
  if (isNaN(v) || v < 0 || v > max) { inp.classList.add('error'); inp.classList.remove('valid'); }
  else { inp.classList.remove('error'); inp.classList.add('valid'); }
}

function calcLive() {
  const eleveId  = document.getElementById('sel-eleve').value;
  const evalType = document.getElementById('sel-eval').value;
  if (!eleveId||!evalType) return;
  const eleve = DB.eleves.find(e=>e.id===eleveId);
  const bloc  = getBloc(eleve.classe, evalType);
  const matieres = MATIERES[bloc];
  let total=0, anyFilled=false;
  matieres.forEach(m => {
    const inp = document.getElementById('inp-'+m.key);
    if (inp && inp.value.trim()!=='') { anyFilled=true; }
  });
  if (!anyFilled) return;
  const tmpNote = { eleve_id:eleveId, eval_type:evalType, classe:eleve.classe, notes:{} };
  matieres.forEach(m => {
    const inp=document.getElementById('inp-'+m.key);
    if (inp) {
      const raw = inp.value.trim();
      tmpNote.notes[m.key] = raw==='501' ? 501 : (parseFloat(raw)||0);
    }
  });
  const { moy, maxMoy, bareme } = calcNote(tmpNote);
  const men = getMention(moy, maxMoy);
  const {total:t2, bareme:b2, moy:m2, maxMoy:mx2, nbAbs:na2} = calcNote(tmpNote);
  const men2 = getMention(m2, mx2);
  document.getElementById('res-total').textContent = `Total : ${t2}/${b2}${na2>0?' ('+na2+' ABS)':''}`;
  document.getElementById('res-moy').textContent   = m2.toFixed(2)+'/20';
  document.getElementById('res-mention').textContent = men2.label;
}

function saveNote() {
  const eleveId  = document.getElementById('sel-eleve').value;
  const evalType = document.getElementById('sel-eval').value;
  if (!eleveId||!evalType) { showNotif('Sélectionner un élève et une évaluation', 'error'); return; }
  const eleve = DB.eleves.find(e=>e.id===eleveId);
  const bloc  = getBloc(eleve.classe, evalType);
  const matieres = MATIERES[bloc];
  let valid=true;
  const notesObj={};
  matieres.forEach(m => {
    const inp=document.getElementById('inp-'+m.key);
    if (!inp || inp.value.trim()==='') { valid=false; return; }
    const raw = inp.value.trim();
    if (raw === '501') { notesObj[m.key]=501; return; } // ABS/Abandon
    const v=parseFloat(raw);
    if (isNaN(v)||v<0||v>m.max) { valid=false; inp.classList.add('error'); return; }
    notesObj[m.key]=v;
  });
  if (!valid) { showNotif('Corriger les erreurs avant d\'enregistrer', 'error'); return; }

  const existing = DB.notes.findIndex(n=>n.eleve_id===eleveId && n.eval_type===evalType);
  const rec = { id: existing>=0?DB.notes[existing].id:genId('n'), eleve_id:eleveId, eval_type:evalType, classe:eleve.classe, notes:notesObj, horodatage:new Date().toISOString() };
  if (existing>=0) DB.notes[existing]=rec;
  else DB.notes.unshift(rec);
  save('notes');
  updateStats();
  renderDashboard();
  showNotif('✅ Notes enregistrées avec succès', 'success');
}

function clearNoteForm() {
  document.getElementById('sel-eleve').value='';
  document.getElementById('sel-eval').value='';
  document.getElementById('eleve-card').style.display='none';
  document.getElementById('existing-note-info').style.display='none';
  document.getElementById('note-form-card').innerHTML='<div class="empty-state"><div class="empty-icon">✏️</div><p>Sélectionner un élève et une évaluation</p></div>';
}

// ══════════════════════════════════════════════════════════════
// RÉSULTATS
// ══════════════════════════════════════════════════════════════
let resPage = 0;
function renderResultats() {
  let data = DB.notes;
  const fe = document.getElementById('filt-res-eval')?.value;
  const fc = document.getElementById('filt-res-classe')?.value;
  if (fe) data = data.filter(n=>n.eval_type===fe);
  if (fc) data = data.filter(n=>n.classe===fc);
  if (searchTerm) data = data.filter(n=>JSON.stringify(n).toLowerCase().includes(searchTerm));

  const pageData = data.slice(resPage*PAGE_SIZE, (resPage+1)*PAGE_SIZE);
  const tbody = document.getElementById('table-resultats');
  tbody.innerHTML = pageData.length ? pageData.map(n => {
    const el = DB.eleves.find(e=>e.id===n.eleve_id);
    const ec = DB.ecoles.find(x=>x.id===el?.ecole_id);
    const { total, bareme, moy, maxMoy } = calcNote(n);
    const men = getMention(moy, maxMoy);
    return `<tr>
      <td><strong>${el?el.nom+' '+el.prenoms:'—'}</strong></td>
      <td><span class="badge badge-vert">${n.classe}</span></td>
      <td style="font-size:12px;">${ec?ec.nom:'—'}</td>
      <td><span class="badge badge-gray">${EVAL_LABELS[n.eval_type]||n.eval_type}</span></td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:12px;">${total}/${bareme}</td>
      <td><strong>${moy.toFixed(2)}</strong>/${maxMoy}</td>
      <td><span class="badge ${men.cls}">${men.label}</span></td>
      <td><div class="actions-cell">
        <button class="icon-btn" onclick="viewDetailNote('${n.id}')" title="Détail">👁</button>
        ${canEdit()?`<button class="icon-btn" onclick="editNoteFromResult('${n.id}')" title="Modifier">✏️</button>`:''}
        ${canDelete()?`<button class="icon-btn" onclick="deleteNote('${n.id}')" title="Supprimer">🗑</button>`:''}
      </div></td>
    </tr>`;
  }).join('') : `<tr><td colspan="8"><div class="empty-state"><div class="empty-icon">📊</div><p>Aucun résultat</p></div></td></tr>`;

  renderPag('res', data.length, resPage, (p) => { resPage=p; renderResultats(); });
}

function viewDetailNote(noteId) {
  const n = DB.notes.find(x=>x.id===noteId);
  if (!n) return;
  const el = DB.eleves.find(e=>e.id===n.eleve_id);
  const { total, bareme, moy, maxMoy } = calcNote(n);
  const men = getMention(moy, maxMoy);
  const bloc = getBloc(n.classe, n.eval_type);
  const matieres = MATIERES[bloc];

  let html = `<div style="background:var(--surface);border-radius:8px;padding:12px;margin-bottom:16px;font-size:13px;">
    <strong>${el?el.nom+' '+el.prenoms:'—'}</strong> — ${n.classe} — ${EVAL_LABELS[n.eval_type]||n.eval_type}
  </div>
  <table style="width:100%;font-size:13px;border-collapse:collapse;margin-bottom:16px;">
    <thead><tr>
      <th style="text-align:left;padding:7px 10px;background:var(--surface);border-bottom:2px solid var(--border);">Matière</th>
      <th style="padding:7px 10px;background:var(--surface);border-bottom:2px solid var(--border);">Barème</th>
      <th style="padding:7px 10px;background:var(--surface);border-bottom:2px solid var(--border);">Note</th>
    </tr></thead><tbody>`;
  matieres.forEach(m => {
    const val = n.notes[m.key]??'—';
    const displayVal = (val===501||val==='501') ? '<span style="color:var(--text3);font-style:italic;">ABS</span>' : val;
    html += `<tr><td style="padding:7px 10px;border-bottom:1px solid #F3F4F6;">${m.label}</td><td style="padding:7px 10px;border-bottom:1px solid #F3F4F6;text-align:center;color:var(--text3);">/${m.max}</td><td style="padding:7px 10px;border-bottom:1px solid #F3F4F6;text-align:center;font-weight:700;">${displayVal}</td></tr>`;
  });
  html += `</tbody></table>
  <div class="result-bar">
    <div><div class="result-total">Total : ${total}/${bareme}</div><div class="result-mention">${men.label}</div></div>
    <div class="result-moyenne">${moy.toFixed(2)}/${maxMoy}</div>
  </div>`;
  document.getElementById('detail-note-title').textContent = `Notes — ${el?el.nom:'?'} — ${EVAL_LABELS[n.eval_type]||n.eval_type}`;
  document.getElementById('detail-note-body').innerHTML = html;
  document.getElementById('modal-detail-note').classList.add('active');
}

// ── Passage en classe supérieure ────────────────────────────
function passageClasse(idx) {
  if (!canPassage()) { showNotif('🔒 Accès refusé', 'error'); return; }
  const e = DB.eleves[idx];
  const ordre = ['CP1','CP2','CE1','CE2','CM1','CM2'];
  const i = ordre.indexOf(e.classe);
  if (i < 0) { showNotif('Classe inconnue', 'error'); return; }
  if (i === ordre.length - 1) {
    if (!confirm(`${e.nom} ${e.prenoms} est en CM2. Confirmer la fin de cycle primaire et l'archivage ?`)) return;
    DB.eleves[idx].statut = 'fin_cycle';
    DB.eleves[idx].classe_archive = 'CM2';
    showNotif(`✅ ${e.nom} — Fin de cycle CM2 archivée`, 'success');
  } else {
    const nouvelle = ordre[i+1];
    if (!confirm(`Passer ${e.nom} ${e.prenoms} de ${e.classe} vers ${nouvelle} ?`)) return;
    DB.eleves[idx].classe = nouvelle;
    showNotif(`✅ ${e.nom} passé en ${nouvelle}`, 'success');
  }
  save('eleves'); renderEleves(); updateStats(); renderDashboard();
  closeModal('modal-detail-note');
}

function editNoteFromResult(noteId) {
  const n = DB.notes.find(x=>x.id===noteId);
  if (!n) return;
  showPage('saisie');
  setTimeout(() => {
    document.getElementById('sel-eleve').value = n.eleve_id;
    onEleveSelect();
    document.getElementById('sel-eval').value = n.eval_type;
    buildNoteForm();
    const bloc = getBloc(n.classe, n.eval_type);
    MATIERES[bloc].forEach(m => {
      const inp=document.getElementById('inp-'+m.key);
      if(inp && n.notes[m.key]!==undefined) { inp.value=n.notes[m.key]; validateNote(inp,m.max); }
    });
    calcLive();
  }, 100);
}

function deleteNote(noteId) {
  if (!canDelete()) { showNotif('🔒 Accès refusé', 'error'); return; }
  if (!confirm('Supprimer ces notes ?')) return;
  DB.notes = DB.notes.filter(n=>n.id!==noteId);
  save('notes'); updateStats(); renderResultats(); renderDashboard();
  showNotif('🗑 Notes supprimées', 'info');
}

function renderStatsCharts() {
  const container = document.getElementById('stats-charts');
  if (!container) return;
  // Répartition des mentions
  const mentions = ['Excellent','Très Bien','Bien','Assez Bien','Passable','Insuffisant'];
  const mentionColors = ['var(--ci-vert)','var(--bleu)','var(--bleu)','var(--ci-orange)','#92700A','var(--danger)'];
  const mentionCounts = mentions.map(m => DB.notes.filter(n => { const {moy,maxMoy}=calcNote(n); return getMention(moy,maxMoy).label===m; }).length);

  // Moyennes par classe
  const classes = ['CP1','CP2','CE1','CE2','CM1','CM2'];
  const moyClasses = classes.map(c => {
    const notesC = DB.notes.filter(n=>n.classe===c);
    if (!notesC.length) return 0;
    const sum = notesC.reduce((acc,n) => { const {moy,maxMoy}=calcNote(n); return acc+(moy/maxMoy*20); }, 0);
    return Math.round(sum/notesC.length*10)/10;
  });

  const maxMoy = Math.max(...moyClasses, 1);
  const classColors = ['#006B3F','#00843D','#F77F00','#E07000','#1A56DB','#0D40A0'];

  container.innerHTML = `
    <div class="chart-card">
      <div class="chart-title">📊 Répartition des mentions</div>
      <div class="bar-chart">
        ${mentions.map((m,i) => `
          <div class="bar-row">
            <div class="bar-label">${m}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width:${mentionCounts[i]?(mentionCounts[i]/Math.max(...mentionCounts,1)*100):0}%;background:${mentionColors[i]};">
                <span>${mentionCounts[i]}</span>
              </div>
            </div>
            <div class="bar-val">${mentionCounts[i]}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="chart-card">
      <div class="chart-title">📈 Moyenne générale par classe (ramenée sur 20)</div>
      <div class="bar-chart">
        ${classes.map((c,i) => `
          <div class="bar-row">
            <div class="bar-label">${c}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width:${Math.round(moyClasses[i]/maxMoy*100)}%;background:${classColors[i]};">
                <span>${moyClasses[i]>0?moyClasses[i]:''}</span>
              </div>
            </div>
            <div class="bar-val">${moyClasses[i]>0?moyClasses[i]+'/20':'—'}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ══════════════════════════════════════════════════════════════
// BULLETINS
// ══════════════════════════════════════════════════════════════
function populateBulletinSelects() {
  const sel = document.getElementById('bul-eleve');
  sel.innerHTML = '<option value="">-- Choisir un élève --</option>' +
    DB.eleves.map(e=>`<option value="${e.id}">${e.nom} ${e.prenoms} (${e.classe})</option>`).join('');
}

function genBulletin() {
  const eleveId  = document.getElementById('bul-eleve').value;
  const evalType = document.getElementById('bul-eval').value;
  const preview  = document.getElementById('bulletin-preview');

  if (!eleveId) { preview.innerHTML='<div class="card" style="padding:32px;text-align:center;color:var(--text3);"><div style="font-size:48px;margin-bottom:12px;">📄</div><p>Sélectionner un élève</p></div>'; return; }

  const el = DB.eleves.find(e=>e.id===eleveId);
  const ec = DB.ecoles.find(x=>x.id===el.ecole_id);
  const notesEleve = evalType ? DB.notes.filter(n=>n.eleve_id===eleveId && n.eval_type===evalType) : DB.notes.filter(n=>n.eleve_id===eleveId);

  if (!notesEleve.length) {
    preview.innerHTML = '<div class="card" style="padding:24px;color:var(--text3);text-align:center;"><p>Aucune note trouvée pour cet élève / cette évaluation.</p></div>';
    return;
  }

  const bulletins = notesEleve.map(n => {
    const { total, bareme, moy, maxMoy } = calcNote(n);
    const men = getMention(moy, maxMoy);
    const bloc = getBloc(n.classe, n.eval_type);
    const matieres = MATIERES[bloc];
    const mentionColor = men.color;

    return `<div class="bulletin" style="margin-bottom:20px;" id="bul-${n.id}">
      <div class="bulletin-header">
        <div class="bulletin-ci">
          <strong>RÉPUBLIQUE DE CÔTE D'IVOIRE</strong><br>
          Union – Discipline – Travail<br>
          MENAET
        </div>
        <div class="bulletin-title">
          <h2>BULLETIN DE NOTES</h2>
          <p>Cycle Primaire — Année scolaire 2025–2026</p>
          <p style="margin-top:4px;font-weight:600;color:var(--ci-orange);">${EVAL_LABELS[n.eval_type]||n.eval_type}</p>
        </div>
        <div class="bulletin-ci">
          <strong>${ec?ec.nom:''}</strong><br>
          ${ec?ec.iepp:''}<br>
          ${ec?ec.drena:''}<br>
          Code : ${ec?ec.code:''}
        </div>
      </div>

      <div class="bulletin-eleve-info">
        <div class="bi-row"><span class="bi-label">Nom :</span><span class="bi-val">${el.nom}</span></div>
        <div class="bi-row"><span class="bi-label">Prénoms :</span><span class="bi-val">${el.prenoms}</span></div>
        <div class="bi-row"><span class="bi-label">Matricule :</span><span class="bi-val">${el.matricule}</span></div>
        <div class="bi-row"><span class="bi-label">Classe :</span><span class="bi-val">${el.classe}</span></div>
        <div class="bi-row"><span class="bi-label">Date naiss. :</span><span class="bi-val">${el.ddn||'—'}</span></div>
        <div class="bi-row"><span class="bi-label">Sexe :</span><span class="bi-val">${el.sexe==='F'?'Féminin':'Masculin'}</span></div>
      </div>

      <table class="bulletin-table">
        <thead><tr><th>Matière</th><th>Barème</th><th>Note obtenue</th></tr></thead>
        <tbody>
          ${matieres.map(m=>{const v=n.notes[m.key];const disp=(v===501||v==='501')?'<em style="color:#9CA3AF;">ABS</em>':(v??'—');return `<tr><td>${m.label}</td><td style="text-align:center;">/${m.max}</td><td style="text-align:center;font-weight:700;">${disp}</td></tr>`;}).join('')}
          <tr class="bulletin-total-row">
            <td><strong>TOTAL</strong></td>
            <td style="text-align:center;"><strong>/${bareme}</strong></td>
            <td style="text-align:center;"><strong>${total}</strong></td>
          </tr>
        </tbody>
      </table>

      <div class="bulletin-mention">
        <div style="font-size:13px;margin-bottom:8px;">Moyenne : <strong>${moy.toFixed(2)} / ${maxMoy}</strong></div>
        <span class="mention-badge" style="background:${mentionColor}20;color:${mentionColor};border:2px solid ${mentionColor}40;">${men.label}</span>
      </div>

      <div style="display:flex;justify-content:space-between;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);font-size:11px;color:var(--text3);">
        <div>Signature CPPP / CPI : _______________</div>
        <div>Signature Directeur : _______________</div>
        <div>Cachet de l'école</div>
      </div>
    </div>`;
  }).join('');

  preview.innerHTML = bulletins;
}

function printBulletin() {
  const content = document.getElementById('bulletin-preview').innerHTML;
  if (!content || content.includes('Sélectionner')) { showNotif('Générer un bulletin avant d\'imprimer', 'error'); return; }
  const win = window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>Bulletin PGNEP</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Plus Jakarta Sans',sans-serif;padding:20px;background:#fff;}
      .bulletin{border:2px solid #006B3F;border-radius:10px;padding:20px;margin-bottom:30px;page-break-after:always;}
      .bulletin-header{display:flex;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid #006B3F;font-size:11px;}
      .bulletin-title{text-align:center;flex:1;padding:0 12px;}
      .bulletin-title h2{font-size:15px;font-weight:800;color:#006B3F;}
      .bulletin-eleve-info{display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:12px;font-size:11px;}
      .bi-row{display:flex;gap:6px;}.bi-label{font-weight:600;min-width:80px;}
      .bulletin-table{width:100%;border-collapse:collapse;font-size:11px;margin-bottom:12px;}
      .bulletin-table th{background:#006B3F;color:#fff;padding:5px 8px;text-align:left;}
      .bulletin-table td{padding:5px 8px;border-bottom:1px solid #ddd;}
      .bulletin-table tr:nth-child(even) td{background:#f0faf5;}
      .bulletin-total-row td{font-weight:700;background:#d1ead0!important;}
      .bulletin-mention{text-align:center;margin-top:10px;}
      .mention-badge{display:inline-block;padding:5px 18px;border-radius:20px;font-weight:800;font-size:13px;}
    </style></head><body>${content}</body></html>`);
  win.document.close();
  win.focus();
  setTimeout(()=>win.print(), 500);
}

// ══════════════════════════════════════════════════════════════
// ÉCOLES
// ══════════════════════════════════════════════════════════════
let editingEcoleIdx = null;
function openAddEcole() {
  editingEcoleIdx = null;
  ['ec-nom-f','ec-code','ec-iepp','ec-drena'].forEach(id => document.getElementById(id).value='');
  document.getElementById('modal-ecole').classList.add('active');
}
function saveEcole() {
  const nom   = document.getElementById('ec-nom-f').value.trim();
  const code  = document.getElementById('ec-code').value.trim();
  const iepp  = document.getElementById('ec-iepp').value.trim();
  const drena = document.getElementById('ec-drena').value.trim();
  if (!nom) { showNotif('Nom de l\'école obligatoire', 'error'); return; }
  const rec = { id:genId('ec'), nom, code, iepp, drena };
  DB.ecoles.push(rec);
  save('ecoles'); updateStats(); renderEcoles();
  closeModal('modal-ecole');
  showNotif('✅ École ajoutée', 'success');
}
function renderEcoles() {
  const tbody = document.getElementById('table-ecoles');
  tbody.innerHTML = DB.ecoles.map((e,i) => {
    const nb = DB.eleves.filter(el=>el.ecole_id===e.id).length;
    return `<tr>
      <td><strong>${e.nom}</strong></td>
      <td><code style="font-size:11px;">${e.code}</code></td>
      <td style="font-size:12px;">${e.iepp||'—'}</td>
      <td style="font-size:12px;">${e.drena||'—'}</td>
      <td><span class="badge badge-vert">${nb}</span></td>
      <td><div class="actions-cell">
        ${canDelete()?`<button class="icon-btn" onclick="deleteEcole(${i})">🗑</button>`:''}
      </div></td>
    </tr>`;
  }).join('') || '<tr><td colspan="6" class="empty-state"><p>Aucune école</p></td></tr>';
}
function deleteEcole(idx) {
  if (!canDelete()) { showNotif('🔒 Accès refusé', 'error'); return; }
  if (!confirm('Supprimer cette école ?')) return;
  DB.ecoles.splice(idx,1); save('ecoles'); renderEcoles(); updateStats();
  showNotif('🗑 École supprimée', 'info');
}

// ══════════════════════════════════════════════════════════════
// IMPORT / EXPORT
// ══════════════════════════════════════════════════════════════
let importedEleves = [];

function handleImportFileDrop(event) {
  const file = event.dataTransfer.files[0];
  if (file) parseImportFile(file);
}
function handleImportFile(input) {
  const file = input.files[0];
  if (file) parseImportFile(file);
}
function parseImportFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    const text = e.target.result;
    const lines = text.replace(/\r/g,'').split('\n').filter(Boolean);
    const sep = text.includes(';') ? ';' : ',';
    const HEADERS_MAP = { nom:'nom', prenoms:'prenoms', prénoms:'prenoms', matricule:'matricule', sexe:'sexe', date_naissance:'ddn', ddn:'ddn', lieu_naissance:'lieu', lieu:'lieu', classe:'classe', ecole:'ecole_id', école:'ecole_id' };
    const rawHeaders = lines[0].split(sep).map(h=>h.replace(/"/g,'').trim().toLowerCase());
    const headers = rawHeaders.map(h => HEADERS_MAP[h]||h);
    importedEleves = [];
    for (let i=1;i<lines.length;i++) {
      const vals = lines[i].split(sep).map(v=>v.replace(/"/g,'').trim());
      const rec = {};
      headers.forEach((h,j) => { if(h) rec[h]=vals[j]||''; });
      if (rec.nom) importedEleves.push(rec);
    }
    const preview = document.getElementById('import-result');
    preview.style.display = 'block';
    preview.innerHTML = `<div style="background:#ECFDF5;border:1px solid #6EE7B7;border-radius:8px;padding:12px;font-size:13px;">✅ <strong>${importedEleves.length} élève(s)</strong> détecté(s) — ${file.name}</div>`;
    document.getElementById('btn-save-import').style.display = importedEleves.length ? 'flex' : 'none';
  };
  reader.readAsText(file, 'UTF-8');
}
function saveImport() {
  let added=0, skipped=0;
  const existMat = new Set(DB.eleves.map(e=>e.matricule).filter(Boolean));
  importedEleves.forEach(e => {
    if (e.matricule && existMat.has(e.matricule)) { skipped++; return; }
    // Trouver l'école
    let ecole_id = '';
    if (e.ecole_id) {
      const found = DB.ecoles.find(x=>x.nom.toLowerCase().includes(e.ecole_id.toLowerCase())||x.id===e.ecole_id);
      if (found) ecole_id = found.id;
    }
    DB.eleves.push({ id:genId('el'), nom:(e.nom||'').toUpperCase(), prenoms:e.prenoms||'', matricule:e.matricule||genId('CI-2025'), sexe:e.sexe||'M', ddn:e.ddn||'', lieu:e.lieu||'', classe:e.classe||'CP1', ecole_id });
    existMat.add(e.matricule); added++;
  });
  save('eleves'); updateStats(); renderDashboard();
  document.getElementById('btn-save-import').style.display='none';
  document.getElementById('import-result').innerHTML = `<div style="background:#ECFDF5;border:1px solid #6EE7B7;border-radius:8px;padding:12px;font-size:13px;">✅ ${added} élève(s) importé(s)${skipped?`, ${skipped} doublon(s) ignoré(s)`:''}</div>`;
  importedEleves=[];
  showNotif(`✅ ${added} élève(s) importé(s)`, 'success');
}

function exportElevesCSV() {
  const keys=['matricule','nom','prenoms','sexe','ddn','lieu','classe','ecole_id'];
  let csv='Matricule;Nom;Prénoms;Sexe;Date naiss.;Lieu naiss.;Classe;École\n';
  DB.eleves.forEach(e => {
    const ec=DB.ecoles.find(x=>x.id===e.ecole_id);
    csv += `"${e.matricule}";"${e.nom}";"${e.prenoms}";"${e.sexe}";"${e.ddn||''}";"${e.lieu||''}";"${e.classe}";"${ec?ec.nom:''}"\n`;
  });
  dlCSV(csv, `PGNEP_eleves_${today()}.csv`);
  showNotif('⬇ Export élèves téléchargé', 'success');
}

function exportResultatsCSV() {
  let csv='Élève;Classe;École;Évaluation;Total;Barème;Moyenne;Mention\n';
  DB.notes.forEach(n => {
    const el=DB.eleves.find(e=>e.id===n.eleve_id);
    const ec=DB.ecoles.find(x=>x.id===el?.ecole_id);
    const {total,bareme,moy,maxMoy}=calcNote(n);
    const men=getMention(moy,maxMoy);
    csv += `"${el?el.nom+' '+el.prenoms:''}";"${n.classe}";"${ec?ec.nom:''}";"${EVAL_LABELS[n.eval_type]||n.eval_type}";"${total}";"${bareme}";"${moy.toFixed(2)}";"${men.label}"\n`;
  });
  dlCSV(csv, `PGNEP_resultats_${today()}.csv`);
  showNotif('⬇ Export résultats téléchargé', 'success');
}

function exportKoboChoices() {
  let csv='list_name;name;label;nom;prenoms;date_naissance;lieu_naissance;matricule;classe\n';
  DB.eleves.forEach(e => {
    csv += `"eleves";"${e.id}";"${e.nom} ${e.prenoms}";"${e.nom}";"${e.prenoms}";"${e.ddn||''}";"${e.lieu||''}";"${e.matricule}";"${e.classe}"\n`;
  });
  dlCSV(csv, `PGNEP_kobo_choices_${today()}.csv`);
  showNotif('⬇ Export KoboToolbox choices téléchargé', 'success');
}

function exportJSON() {
  const data = { meta:{ export_date:new Date().toISOString(), annee_scolaire:'2025-2026', programme:'PGNEP', source:'PGNEP v2.0' }, ecoles:DB.ecoles, eleves:DB.eleves, notes:DB.notes };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`PGNEP_export_${today()}.json`; a.click();
  showNotif('⬇ Export JSON téléchargé', 'success');
}

function exportAll() {
  exportElevesCSV(); setTimeout(()=>exportResultatsCSV(),300); setTimeout(()=>exportJSON(),600);
}

function dlCSV(csv, filename) {
  const blob = new Blob(['\uFEFF'+csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=filename; a.click();
}

// ══════════════════════════════════════════════════════════════
// COMPTES UTILISATEURS
// ══════════════════════════════════════════════════════════════
const ROLE_LABEL_SHORT = { admin:'🔴 Admin', coordinateur:'🟡 Coordinateur', correspondant:'🟢 Correspondant', cppp:'🔵 CPPP', lecteur:'⚪ Lecteur' };
let editingLoginOrig = null;

function renderUsersList() {
  document.getElementById('users-list').innerHTML = DB.users.map(u => `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px;display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <div style="width:36px;height:36px;border-radius:50%;background:${ROLE_COLORS[u.role]||'#6B7280'}20;color:${ROLE_COLORS[u.role]||'#6B7280'};display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">${u.nom.charAt(0)}</div>
      <div style="flex:1;min-width:0;">
        <p style="font-weight:600;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${u.nom}</p>
        <p style="font-size:11px;color:var(--text3);">@${u.login}</p>
      </div>
      <span class="badge badge-gray" style="font-size:10px;">${ROLE_LABEL_SHORT[u.role]||u.role}</span>
      <div class="actions-cell">
        <button class="icon-btn" onclick="editCompte('${u.login}')">✏️</button>
        ${u.login!==currentUser?.login?`<button class="icon-btn" onclick="deleteCompte('${u.login}')">🗑</button>`:'<span style="opacity:0.3;padding:5px;">🔒</span>'}
      </div>
    </div>`).join('');
}

function resetCompteForm() {
  document.getElementById('compte-form-title').textContent = '➕ Nouveau compte';
  document.getElementById('edit-login-orig').value = '';
  editingLoginOrig = null;
  ['new-login','new-nom-user','new-pass','new-pass2'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('new-role').value='correspondant';
  document.getElementById('compte-error').style.display='none';
}

function editCompte(login) {
  const u = DB.users.find(x=>x.login===login);
  if (!u) return;
  editingLoginOrig = login;
  document.getElementById('compte-form-title').textContent='✏️ Modifier le compte';
  document.getElementById('edit-login-orig').value=login;
  document.getElementById('new-login').value=login;
  document.getElementById('new-nom-user').value=u.nom;
  document.getElementById('new-pass').value='';
  document.getElementById('new-pass2').value='';
  document.getElementById('new-role').value=u.role;
  document.getElementById('compte-error').style.display='none';
}

function saveCompte() {
  const errEl=document.getElementById('compte-error');
  errEl.style.display='none';
  const orig=editingLoginOrig;
  const login=document.getElementById('new-login').value.trim().toLowerCase();
  const nom=document.getElementById('new-nom-user').value.trim();
  const pass=document.getElementById('new-pass').value;
  const pass2=document.getElementById('new-pass2').value;
  const role=document.getElementById('new-role').value;
  const err=msg=>{errEl.textContent=msg;errEl.style.display='block';};
  if(!login||!nom){err('Champs obligatoires.');return;}
  if(!orig&&!pass){err('Mot de passe obligatoire pour un nouveau compte.');return;}
  if(pass&&pass.length<6){err('Mot de passe : 6 caractères minimum.');return;}
  if(pass&&pass!==pass2){err('Mots de passe différents.');return;}
  if(!orig&&DB.users.find(u=>u.login===login)){err('Identifiant déjà utilisé.');return;}
  if(orig){
    const idx=DB.users.findIndex(u=>u.login===orig);
    DB.users[idx].nom=nom;DB.users[idx].role=role;
    if(pass)DB.users[idx].pass=_enc(pass);
    if(orig===currentUser?.login){currentUser.nom=nom;currentUser.role=role;applyRoleUI();}
    showNotif('✅ Compte modifié','success');
  } else {
    DB.users.push({login,nom,pass:_enc(pass),role});
    showNotif('✅ Compte créé','success');
  }
  save('users');renderUsersList();resetCompteForm();
}

function deleteCompte(login) {
  if(login===currentUser?.login){showNotif('Impossible de supprimer votre propre compte','error');return;}
  const admin=DB.users.filter(u=>u.role==='admin');
  if(admin.length===1&&DB.users.find(u=>u.login===login)?.role==='admin'){showNotif('Impossible de supprimer le dernier admin','error');return;}
  if(!confirm(`Supprimer le compte "${login}" ?`))return;
  DB.users=DB.users.filter(u=>u.login!==login);
  save('users');renderUsersList();showNotif('🗑 Compte supprimé','info');
}

// ══════════════════════════════════════════════════════════════
// PAGINATION
// ══════════════════════════════════════════════════════════════
function renderPag(key, total, pg, onPage) {
  const pages=Math.ceil(total/PAGE_SIZE)||1;
  const info=document.getElementById('pag-info-'+key);
  const btns=document.getElementById('pag-btns-'+key);
  if(!info||!btns)return;
  const s=total?pg*PAGE_SIZE+1:0;
  const e=Math.min((pg+1)*PAGE_SIZE,total);
  info.textContent=`${s}–${e} sur ${total} entrée${total>1?'s':''}`;
  let h=`<button class="pag-btn" ${pg===0?'disabled':''} onclick="(${onPage.toString()})(${pg-1})">‹</button>`;
  const st=Math.max(0,pg-2);const en=Math.min(pages-1,st+4);
  for(let i=st;i<=en;i++) h+=`<button class="pag-btn ${i===pg?'active':''}" onclick="(${onPage.toString()})(${i})">${i+1}</button>`;
  h+=`<button class="pag-btn" ${pg>=pages-1?'disabled':''} onclick="(${onPage.toString()})(${pg+1})">›</button>`;
  btns.innerHTML=h;
}

// ══════════════════════════════════════════════════════════════
// RECHERCHE GLOBALE
// ══════════════════════════════════════════════════════════════
function onSearch(val) {
  searchTerm=val.toLowerCase();
  renderEleves(); renderResultats();
}

// ══════════════════════════════════════════════════════════════
// UTILITAIRES
// ══════════════════════════════════════════════════════════════
function genId(prefix='id') { return prefix+'-'+Date.now().toString(36)+Math.random().toString(36).slice(2,5); }
function today() { return new Date().toISOString().slice(0,10); }

function closeModal(id, event) {
  if (!event || event.target===document.getElementById(id))
    document.getElementById(id).classList.remove('active');
}

function showNotif(msg, type='info') {
  const el=document.createElement('div');
  el.className=`notif notif-${type}`;el.textContent=msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),3500);
}

function importElevesCSV() { document.getElementById('csv-input').click(); }
</script>
</body>
</html>
