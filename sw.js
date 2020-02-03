self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

var cacheName = 'cw2-2';
var coursesImages = [];
for(var i=0; i<lesson.length; i++) {
CoursesImages.push('data/img/'+lesson[i].slug+'.jpg');
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