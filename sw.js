const CACHE_VERSION = 'v2';
const CACHE_STATIC = `zagy-static-${CACHE_VERSION}`;
const CACHE_IMAGES = `zagy-images-${CACHE_VERSION}`;
const CACHE_FONTS  = `zagy-fonts-${CACHE_VERSION}`;
const CACHE_CDN    = `zagy-cdn-${CACHE_VERSION}`;

// ═══════════════════════════════════════════════════════
// 1. ARCHIVOS ESENCIALES (se instalan inmediatamente)
// ═══════════════════════════════════════════════════════
// IMPORTANTE: Agrega aquí TODAS las imágenes que quieras
// disponibles offline desde el primer segundo.
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/css/estilos.css',          // <-- tu HTML usa css/estilos.css
  '/js/app.js',                // <-- tu HTML usa js/app.js
  '/manifest.json',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  '/assets/logoZagy.webp',

  // Imágenes del hero y UI (obligatorias)
  '/assets/06 mundial.webp',
  '/assets/01 albedo.avif',
  '/assets/02 capibara.avif',
  '/assets/05 goku.avif',
  '/assets/03 zeroTwo.jpg',
  '/assets/06.webp',
  '/assets/07 hombre.avif',
  '/assets/08 mujer.avif',
  '/assets/10 moda.avif',
  '/assets/09 zapatilla.jpg',
  '/assets/11 reloj.jpg',
  '/assets/12 perfume.jpg',
  '/assets/13 joyeria.jpg',
  '/assets/14 licores.jpg',
  '/assets/15 mandoPlay.jpg',
  '/assets/peru.svg',
  '/assets/usa.svg',
  '/assets/quechua.webp',

  // Si quieres que TODAS las fotos de productos estén offline
  // desde el inicio, agrégalas aquí también. Ejemplo:
  // '/assets/01 SOPORTE IMANTADO/01.webp',
  // '/assets/21 DISPENSADOR DE JABÓN/00.webp',
  // ... (una por cada imagen que tengas en assets/)
];

// ═══════════════════════════════════════════════════════
// 2. INSTALACIÓN — Precache de lo esencial
// ═══════════════════════════════════════════════════════
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) => {
      // addAll falla si UNA sola URL da 404, por eso usamos map + catch
      return Promise.all(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] No se pudo cachear:', url, err.message);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// ═══════════════════════════════════════════════════════
// 3. ACTIVACIÓN — Limpia caches viejas
// ═══════════════════════════════════════════════════════
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('zagy-') && !name.includes(CACHE_VERSION))
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// ═══════════════════════════════════════════════════════
// 4. HELPERS DE ESTRATEGIAS
// ═══════════════════════════════════════════════════════
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.status === 200) {
    cache.put(request, response.clone());
  }
  return response;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then((response) => {
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  return cached || fetchPromise;
}

async function networkFirst(request, cacheName, fallbackUrl) {
  const cache = await caches.open(cacheName);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    if (fallbackUrl) return cache.match(fallbackUrl);
    throw err;
  }
}

// ═══════════════════════════════════════════════════════
// 5. FETCH — Intercepta TODO y decide estrategia
// ═══════════════════════════════════════════════════════
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // --- 5.1 NAVEGACIÓN (HTML) ---
  // Estrategia: Network First. Si hay internet, trae lo nuevo.
  // Si no hay internet, sirve el index.html del cache (SPA fallback).
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, CACHE_STATIC, '/index.html'));
    return;
  }

  // --- 5.2 IMÁGENES LOCALES Y DE PRODUCTOS ---
  // Estrategia: Cache First. Sirve inmediato del disco.
  // Si no está, la descarga y la guarda para la próxima vez.
  if (
    request.destination === 'image' ||
    /\.(webp|avif|jpg|jpeg|png|gif|svg|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(request, CACHE_IMAGES));
    return;
  }

  // --- 5.3 FUENTES DE GOOGLE ---
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ) {
    event.respondWith(staleWhileRevalidate(request, CACHE_FONTS));
    return;
  }

  // --- 5.4 CDN (Remixicon, Swiper, etc.) ---
  if (
    url.hostname === 'cdn.jsdelivr.net' ||
    url.hostname === 'unpkg.com' ||
    url.hostname === 'cdnjs.cloudflare.com'
  ) {
    event.respondWith(staleWhileRevalidate(request, CACHE_CDN));
    return;
  }

  // --- 5.5 CSS / JS LOCALES (estáticos) ---
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'manifest'
  ) {
    event.respondWith(cacheFirst(request, CACHE_STATIC));
    return;
  }

  // --- 5.6 TODO LO DEMÁS ---
  event.respondWith(networkFirst(request, CACHE_STATIC));
});