  
self.importScripts('data/courses.js');
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    });
    var cacheName = 'cw2-1';


    var appShellFiles = [
        '/learngit/index.html',
        '/learngit/style.css',
      'learngit/data',
    'learngit/data/placeholder.png']
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