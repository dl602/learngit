  
self.importScripts('data/courses.js');

    var appShellFiles = [
        '/learngit/index.html',
        '/learngit/style.css']
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