self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

var cacheName = 'cw2-1';

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [
            '/pwa/data',
            '/pwa/data/img/math.jpg',
            'pwa/data/img/science.jpg',
            'pwa/index.html'
          ]
        );
      })
    );
  });