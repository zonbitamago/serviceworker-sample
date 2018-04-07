importScripts("precache-manifest.897e2ca5775467ebc9afd3f6b08cca0c.js", "https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute(
    new RegExp(".*.js"),
    workbox.strategies.networkFirst()
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

