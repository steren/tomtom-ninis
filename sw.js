const cacheVersion = 'v1';
const cacheName = 'sounds-' + cacheVersion;

var urlsToCache = [
  "/",
  "sounds/100 m.ogg",
  "sounds/300 m.ogg",
  "sounds/500 m.ogg",
  "sounds/800 m.ogg",
  "sounds/À la fin de la route.ogg",
  "sounds/Après.ogg",
  "sounds/Arrivé.ogg",
  "sounds/C'est parti autoroute.ogg",
  "sounds/Demi tour.ogg",
  "sounds/Deuxième à gauche.ogg",
  "sounds/Dirrigez vous à droite.ogg",
  "sounds/filenames.txt",
  "sounds/Hahaha.ogg",
  "sounds/Peut être sortir.ogg",
  "sounds/Première sortie.ogg",
  "sounds/Prenez la sortie.ogg",
  "sounds/Puis.ogg",
  "sounds/Rond point droite.ogg",
  "sounds/Rond point gauche.ogg",
  "sounds/Rond point traversez.ogg",
  "sounds/Tenez la droite.ogg",
  "sounds/Tenez la gauche.ogg",
  "sounds/Tournez à droite.ogg",
  "sounds/Tournez à gauche.ogg",
  "sounds/Tout droit.ogg",
  "sounds/Tout droit tenez la gauche.ogg",
  "sounds/Virage à droite.ogg",
  "sounds/Virage à gauche.ogg",
  "sounds/Visez deuxième droite.ogg",
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