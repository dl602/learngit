  
self.importScripts('data/courses.js');

    var appShellFiles = [
        '/pwa-examples/js13kpwa/',
        '/pwa-examples/js13kpwa/index.html']
        var courseImages = [];
        for(var i=0; i<courses.length; i++) {
          courseImages.push('data/img/'+courses[i].slug+'.jpg');
        }
        var contentToCache = appShellFiles.concat(courseImages);
        
        // Installing Service Worker
        self.addEventListener('install', function(e) {
          console.log('[Service Worker] Install');
          e.waitUntil(
            caches.open(cacheName).then(function(cache) {
              console.log('[Service Worker] Caching all: app shell and content');
              return cache.addAll(contentToCache);
            })
          );
        });