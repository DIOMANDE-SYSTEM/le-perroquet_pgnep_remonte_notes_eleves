/* ══════════════════════════════════════════════════════════════════════
   Le Perroquet · PGNEP — Service Worker (version 3.1.1)
   • Ne sert JAMAIS un fichier JSON/manifeste à la place d'une page.
   • Navigation : réseau d'abord (8 s) ; en cas d'échec → application en cache ;
     à défaut → page d'erreur avec code (erreur.html), comme 404.html.
   • Les appels vers d'autres sites (Firebase, Supabase, CDN) ne sont PAS touchés.
   ══════════════════════════════════════════════════════════════════════ */
var VERSION = 'perroquet-v3.1.1';
var SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './erreur.html'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return Promise.all(SHELL.map(function (u) {
        return fetch(new Request(u, { cache: 'reload' })).then(function (r) { if (r && r.ok) return c.put(u, r); }).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function withTimeout(p, ms) {
  return new Promise(function (res, rej) {
    var t = setTimeout(function () { rej(new Error('timeout')); }, ms);
    p.then(function (v) { clearTimeout(t); res(v); }, function (e) { clearTimeout(t); rej(e); });
  });
}

function errorPage(code) {
  return caches.match('./erreur.html').then(function (r) {
    if (r) return r.text().then(function (t) {
      return new Response(t.replace(/__CODE__/g, code).replace('data-default=""', 'data-default="' + code + '"'),
        { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    });
    return new Response('<!DOCTYPE html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Erreur ' + code +
      '</title><body style="font-family:Arial,sans-serif;text-align:center;padding:60px 16px"><div style="background:#343434;color:#fff;padding:14px;margin:-60px -16px 40px">LE PERROQUET · PGNEP — MENAET</div>' +
      '<h1 style="font-size:64px;margin:.2em 0">ERREUR ' + code + '</h1><p style="font-size:22px;color:#1f2d4d">Pas de connexion Internet</p>' +
      '<p><a href="./" style="background:#28a745;color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none">Retour page d\'accueil</a></p></body></html>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  });
}

function handleNavigate(req) {
  return withTimeout(fetch(req), 8000).then(function (res) {
    if (res && res.status === 404) return res;                       /* GitHub Pages affiche alors 404.html */
    if (res && res.ok) {
      var p = new URL(req.url).pathname;
      if (/\/$|index\.html$/.test(p)) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put('./index.html', copy); }); }
      return res;
    }
    throw new Error('http ' + (res && res.status));
  }).catch(function () {
    return caches.match('./index.html').then(function (r) { return r || errorPage('RESEAU'); });
  });
}

function staleWhileRevalidate(req) {
  return caches.open(VERSION).then(function (c) {
    return c.match(req).then(function (hit) {
      var net = fetch(req).then(function (r) { if (r && r.ok && r.type === 'basic') c.put(req, r.clone()); return r; }).catch(function () { return hit; });
      return hit || net;
    });
  });
}

function networkFirst(req) {
  return fetch(req).then(function (r) {
    if (r && r.ok) { var cp = r.clone(); caches.open(VERSION).then(function (c) { c.put(req, cp); }); }
    return r;
  }).catch(function () { return caches.match(req); });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;                    /* Firebase, Supabase, CDN : on ne touche à rien */
  if (req.mode === 'navigate') { e.respondWith(handleNavigate(req)); return; }
  if (/supabase-config\.js$/.test(url.pathname)) { e.respondWith(networkFirst(req)); return; }
  e.respondWith(staleWhileRevalidate(req));
});

self.addEventListener('message', function (e) { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });
