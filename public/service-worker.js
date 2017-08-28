self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('static-cache-v1.01')
            .then(function(cache) {
                return cache.addAll([
                    '.',
                    'index.html',
                    'css/main.css',
                    'css/reset.min.css',
                    'js/main.js',
                    'imgs/cm.png',
                    'audio/youlldofookinnuttin.mp3', 
                    'audio/fooked.mp3', 
                    'audio/fookshowtimetoo.mp3', 
                    'audio/fookoff.mp3', 
                    'audio/doesthismicwork.mp3', 
                    'audio/dada.mp3', 
                    'audio/hewontdoshit.mp3', 
                    'audio/whothefuckisthatguy.mp3', 
                    'audio/liltwerp.mp3', 
                    'audio/whatthatmeans.mp3', 
                    'audio/thatswhatimtalkinbout.mp3', 
                    'audio/snake.mp3', 
                    'audio/nocalls.mp3', 
                    'audio/gods.mp3', 
                    'audio/mysticmac.mp3'
                ]);
            })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('static-cache-v1.01').then(function(cache) {
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});