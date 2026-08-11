/* Service Worker — Le Perroquet · PGNEP
   Objectif : rendre l'application installable (Android + PC) et toujours à jour.
   - Page & manifeste : RÉSEAU d'abord (jamais de version périmée) ; repli cache si hors-ligne.
   - Icônes & manifeste : mis en cache (nécessaires à l'installation).
   - Fichiers volumineux (fiches PDF, etc.) : réseau direct, NON mis en cache (évite de saturer). */
const CACHE = 'perroquet-v1';
const ASSETS = ['./manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isDoc = req.mode === 'navigate'
    || url.pathname.endsWith('/')
    || url.pathname.endsWith('index.html')
    || url.pathname.endsWith('manifest.json');

  if (isDoc) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Icônes/manifeste : cache d'abord. Le reste (PDF, etc.) : réseau, repli cache éventuel.
  if (ASSETS.some((a) => url.pathname.endsWith(a.replace('./','')))) {
    e.respondWith(caches.match(req).then((r) => r || fetch(req)));
    return;
  }
  e.respondWith(fetch(req).catch(() => caches.match(req)));
});
