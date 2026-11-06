/* sw.js — Le Perroquet · PGNEP : ouverture hors ligne.
   Met en cache la plateforme et la sert quand le réseau est absent.
   Ne touche JAMAIS aux données (Supabase / API / requêtes non-GET ignorées). */
var VERSION = 'pgnep-v3.1-offline-1';
var CACHE = VERSION;
var CORE = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(CORE.map(function (u) { return c.add(new Request(u, { cache: 'reload' })).catch(function () {}); }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('pgnep-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('message', function (e) {
  if (e.data === 'SKIP_WAITING' || (e.data && e.data.type === 'SKIP_WAITING')) self.skipWaiting();
});

function isData(url) {
  return /supabase\.co|supabase\.in|firebaseio|firestore\.googleapis|identitytoolkit|securetoken|googleapis\.com\/(identitytoolkit|v1)/.test(url.hostname + url.pathname);
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.protocol.indexOf('http') !== 0 || isData(url)) return;

  /* Pages : réseau d'abord (nouvelle version si dispo), copie en cache sinon */
  if (req.mode === 'navigate') {
    e.respondWith(
      new Promise(function (res, rej) {
        var t = setTimeout(rej, 4000);
        fetch(req).then(function (r) { clearTimeout(t); res(r); }, function (er) { clearTimeout(t); rej(er); });
      }).then(function (r) {
        if (r && r.ok) { var c = r.clone(); caches.open(CACHE).then(function (ca) { ca.put('index.html', c); }); }
        return r;
      }).catch(function () {
        return caches.match('index.html').then(function (m) { return m || caches.match('./') || new Response('Hors ligne', { status: 503 }); });
      })
    );
    return;
  }

  /* Autres ressources (images, polices, bibliothèques) : cache puis mise à jour en arrière-plan */
  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (r) {
        if (r && (r.ok || r.type === 'opaque')) { var c = r.clone(); caches.open(CACHE).then(function (ca) { ca.put(req, c); }); }
        return r;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});
