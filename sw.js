const CACHE_NAME = 'zagy-v2'; // 🔥 CAMBIA ESTE NÚMERO CADA VEZ QUE SUBAS CAMBIOS
const STATIC_ASSETS = [
  './',
  './index.html',
  './css/estilos.css',
  './js/app.js',
  './manifest.json'
];

// INSTALACIÓN: Precachea solo lo esencial
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ACTIVACIÓN: Limpia cachés viejas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// FETCH: HTML y JS siempre desde RED primero (nunca caché viejo)
self.addEventListener('fetch', (e) => {
  const { request } = e;
  const url = new URL(request.url);

  // 1. Si es tu propio dominio y es HTML/JS/CSS/JSON → NETWORK FIRST
  if (url.origin === self.location.origin) {
    const isCritical = request.destination === 'document' || 
                       request.destination === 'script' || 
                       request.destination === 'style' ||
                       request.url.endsWith('.json');

    if (isCritical) {
      e.respondWith(
        fetch(request)
          .then(networkRes => {
            // Actualiza la caché con la versión fresca
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            return networkRes;
          })
          .catch(() => caches.match(request)) // Si no hay internet, usa caché
      );
      return;
    }
  }

  // 2. Imágenes y lo demás → CACHE FIRST (está bien que sean viejas)
  e.respondWith(
    caches.match(request).then(cached => {
      return cached || fetch(request).then(networkRes => {
        const clone = networkRes.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return networkRes;
      });
    })
  );
});