const CACHE_NAME = 'game-cache-v1';
const CACHE_ASSETS = [
    '/', // Main page
    '/nav/home.png',
    '/nav/search.png',
    '/nav/apps.png',
    '/nav/fullscreenbutton.png',
    '/nav/reload.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching assets');
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

// Fetch event to handle requests
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Bypass caching for iframe requests to avoid 404 errors
    if (request.destination === 'iframe') {
        return event.respondWith(fetch(request));
    }

    event.respondWith(
        caches.match(request).then((response) => {
            return response || fetch(request).then((fetchResponse) => {
                // Cache the fetched response for future use
                if (request.url.startsWith(self.origin)) {
                    const responseClone = fetchResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
                }
                return fetchResponse;
            });
        }).catch(() => {
            return new Response('Offline or resource not available.', { status: 404 });
        })
    );
});

// Activate event to clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Clearing old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});