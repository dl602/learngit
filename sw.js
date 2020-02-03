self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

var cacheName = 'cw2-1';
var coursesImages = [];
for(var i=0; i<courses.length; i++) {
CoursesImages.push('data/img/'+courses[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(coursesImages);

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
  caches.open(cacheName).then((cache) => {
  console.log('[Service Worker] Caching all: app shell and content');
  return cache.addAll(contentToCache);
  })
  );
  });