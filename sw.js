/* Service Worker — Le Perroquet · PGNEP
   Cache l'application pour un fonctionnement 100% hors-ligne. */
const CACHE = 'perroquet-pgnep-v1';
const ASSETS = ['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then((c)=>c.addAll(ASSETS)).catch(()=>{})); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks)=>Promise.all(ks.filter((k)=>k!==CACHE).map((k)=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request; if (req.method !== 'GET') return;
  e.respondWith(caches.match(req).then((cached)=> cached || fetch(req).then((res)=>{ try{ const cp=res.clone(); caches.open(CACHE).then((c)=>c.put(req,cp)).catch(()=>{}); }catch(err){} return res; }).catch(()=>cached)));
});
