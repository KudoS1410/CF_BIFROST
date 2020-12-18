self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            // return cache.addAll(['./', "./src/main.css", "./images/logo192.png", "./images/logo512.png"]);
            return cache.addAll([ "./images/logo192.png", "./images/logo512.png"]);
        })
    );
    console.log("installed");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});