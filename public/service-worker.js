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
      return cache.match(event.request).then(function(response) {
        //console.log("cache request: " + event.request.url);
        var fetchPromise = fetch(event.request).then(
          function(networkResponse) {
            // if we got a response from the cache, update the cache
            //console.log("fetch completed: " + event.request.url, networkResponse);
            if (networkResponse) {
              //console.debug("updated cached page: " + event.request.url, networkResponse);
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          },
          function(e) {
            // rejected promise - just ignore it, we're offline
            //console.log("Error in fetch()", e);
          }
        );

        // respond from the cache, or the network
        return response || fetchPromise;
      });
    })
  );
});
