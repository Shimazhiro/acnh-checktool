// Bump cache name when shipping UI/layout changes so mobile Safari refreshes reliably.
const CACHE_NAME = "acnh-checklist-v4-1-22header-smartheader-fix-d4-sea1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data-inline.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/sea/Wakame.png",
  "./assets/sea/Umibudou.png",
  "./assets/sea/Namako.png",
  "./assets/sea/Senjunamako.png",
  "./assets/sea/Hitode.png",
  "./assets/sea/Uni.png",
  "./assets/sea/Paipuuni.png",
  "./assets/sea/Isogintyaku.png",
  "./assets/sea/Mizukurage.png",
  "./assets/sea/Umiushi.png",
  "./assets/sea/Akoyagai.png",
  "./assets/sea/Muhrugai.png",
  "./assets/sea/Kaki.png",
  "./assets/sea/Hotate.png",
  "./assets/sea/Baigai.png",
  "./assets/sea/Sazae.png",
  "./assets/sea/Awabi.png",
  "./assets/sea/Shakogai.png",
  "./assets/sea/Oumugai.png",
  "./assets/sea/Tako.png",
  "./assets/sea/Mendako.png",
  "./assets/sea/Koumoridako.png",
  "./assets/sea/Hotaruika.png",
  "./assets/sea/Gazami.png",
  "./assets/sea/DungenessCrab.png",
  "./assets/sea/Zuwaigani.png",
  "./assets/sea/Tarabagani.png",
  "./assets/sea/Fujitsubo.png",
  "./assets/sea/Takaashigani.png",
  "./assets/sea/Kurumaebi.png",
  "./assets/sea/Amaebi.png",
  "./assets/sea/Shako.png",
  "./assets/sea/Iseebi.png",
  "./assets/sea/Robusuta.png",
  "./assets/sea/Daiougusokumushi.png",
  "./assets/sea/Kabutogani.png",
  "./assets/sea/Hoya.png",
  "./assets/sea/Chinanago.png",
  "./assets/sea/Hiramushi.png",
  "./assets/sea/Kairoudouketsu.png",
  "./data/fish.json",
  "./data/bugs.json",
  "./data/sea.json"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k.startsWith("acnh-checklist-") && k !== CACHE_NAME).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        try {
          const url = new URL(req.url);
          if (url.origin === self.location.origin && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
        } catch {}
        return res;
      });
    })
  );
});
