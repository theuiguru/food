self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open('static').then(function(cache) {
      cache.addAll(['/', '/index.html', '/assets/food.css', '/assets/food.js', '/manifest.json', '/assets/poweredBy4sq.png', '/assets/food/burger.jpg', '/assets/food/burrito.jpg', '/assets/food/chicken.jpg', '/assets/food/halal.jpg', '/assets/food/nachos.jpg', '/assets/food/pizza.jpg', '/assets/food/sandwich.jpg', '/assets/food/taco.jpg', '/assets/food/vegetarian.jpg']);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function(res) {
          return caches.open('dynamic').then(function(cache) {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});