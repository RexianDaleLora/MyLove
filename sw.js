/* ═══════════════════════════════════════════════
   Service Worker — Our Little World 💚
   Strategy: Network-first (always loads fresh
   from GitHub when online), falls back to cache
   when offline.
═══════════════════════════════════════════════ */

const CACHE = 'our-world-v1';

const PRECACHE = [
  '/MyLove/',
  '/MyLove/index.html',
  '/MyLove/tab/letter.html',
  '/MyLove/tab/quotes.html',
  '/MyLove/manifest.json',
];

/* ── Install: pre-cache the main pages ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

/* ── Activate: clean up old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* ── Fetch: network first, cache fallback ── */
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache a fresh copy every time we successfully fetch
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => {
        // Offline fallback: serve from cache
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // If nothing cached, return the main page
          return caches.match('/index.html');
        });
      })
  );
});
