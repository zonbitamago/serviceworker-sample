importScripts("precache-manifest.4be8b3e28c2369925712a11c52e8f19f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute(
    new RegExp(".*.js"),
    workbox.strategies.networkFirst()
  );

  workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
      // Use a custom cache name
      cacheName: "css-cache"
    })
  );

  workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: "image-cache",
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images
          maxEntries: 20,
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60
        })
      ]
    })
  );
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

