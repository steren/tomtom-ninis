const cacheVersion = 'v1';
const cacheName = 'sounds-' + cacheVersion;

var urlsToCache = [
  "/",
  "sounds/amsterdam.mp3",
  "sounds/bomb-defusal.mp3",
  "sounds/cette-annee.mp3",
  "sounds/croise-pas.mp3",
  "sounds/famille-ami-travail.mp3",
  "sounds/kissme.mp3",
  "sounds/lambert.mp3",
  "sounds/on-est-tous.mp3",
  "sounds/palalalalalalalalalala.mp3",
  "sounds/ski.mp3",
  "sounds/straight-through-those-doors.mp3",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('Caching sounds');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});