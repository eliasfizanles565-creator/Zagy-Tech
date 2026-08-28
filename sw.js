const CACHE_NAME = 'zagy-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/css/estilos.css',
  '/src/js/app.js',
  '/assets/icon-192.png',
  '/assets/icon-512.png'
  // Agrega aquí más assets si quieres que carguen offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});