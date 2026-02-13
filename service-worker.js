// Bump cache name when shipping UI/layout changes so mobile Safari refreshes reliably.
const CACHE_NAME = "acnh-checklist-v4-1-22header-smartheader-fix-d5-fossil";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data-inline.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./data/fish.json",
  "./data/bugs.json",
  "./data/sea.json",
  "./data/fossil.json",
  "./assets/sea/Akoyagai.png",
  "./assets/sea/Amaebi.png",
  "./assets/sea/Awabi.png",
  "./assets/sea/Baigai.png",
  "./assets/sea/Chinanago.png",
  "./assets/sea/Daiougusokumushi.png",
  "./assets/sea/DungenessCrab.png",
  "./assets/sea/Fujitsubo.png",
  "./assets/sea/Gazami.png",
  "./assets/sea/Hiramushi.png",
  "./assets/sea/Hitode.png",
  "./assets/sea/Hotaruika.png",
  "./assets/sea/Hotate.png",
  "./assets/sea/Hoya.png",
  "./assets/sea/Iseebi.png",
  "./assets/sea/Isogintyaku.png",
  "./assets/sea/Kabutogani.png",
  "./assets/sea/Kairoudouketsu.png",
  "./assets/sea/Kaki.png",
  "./assets/sea/Koumoridako.png",
  "./assets/sea/Kurumaebi.png",
  "./assets/sea/Mendako.png",
  "./assets/sea/Mizukurage.png",
  "./assets/sea/Muhrugai.png",
  "./assets/sea/Namako.png",
  "./assets/sea/Oumugai.png",
  "./assets/sea/Paipuuni.png",
  "./assets/sea/Sazae.png",
  "./assets/sea/Senjunamako.png",
  "./assets/sea/Shako.png",
  "./assets/sea/Shakogai.png",
  "./assets/sea/Takaashigani.png",
  "./assets/sea/Tako.png",
  "./assets/sea/Tarabagani.png",
  "./assets/sea/Umibudou.png",
  "./assets/sea/Umiushi.png",
  "./assets/sea/Uni.png",
  "./assets/sea/Wakame.png",
  "./assets/sea/Zuwaigani.png",
  "./assets/sea/robusuta-.png",
  "./assets/fossil/T%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/T%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/T%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%81%82%E3%81%97%E3%81%82%E3%81%A8%E3%81%AE%E3%81%8B%E3%81%9B%E3%81%8D.png",
  "./assets/fossil/%E3%81%95%E3%82%93%E3%82%88%E3%81%86%E3%81%A1%E3%82%85%E3%81%86.png",
  "./assets/fossil/%E3%81%97%E3%81%9D%E3%81%A1%E3%82%87%E3%81%86.png",
  "./assets/fossil/%E3%82%A2%E3%82%A6%E3%82%B9%E3%83%88%E3%83%A9%E3%83%AD%E3%83%94%E3%83%86%E3%82%AF%E3%82%B9.png",
  "./assets/fossil/%E3%82%A2%E3%82%AB%E3%83%B3%E3%83%88%E3%82%B9%E3%83%86%E3%82%AC.png",
  "./assets/fossil/%E3%82%A2%E3%83%8E%E3%83%9E%E3%83%AD%E3%82%AB%E3%83%AA%E3%82%B9.png",
  "./assets/fossil/%E3%82%A2%E3%83%B3%E3%82%AD%E3%83%AD%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%A2%E3%83%B3%E3%82%AD%E3%83%AD%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%82%A2%E3%83%B3%E3%82%AD%E3%83%AD%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%82%A2%E3%83%B3%E3%83%A2%E3%83%8A%E3%82%A4%E3%83%88.png",
  "./assets/fossil/%E3%82%A2%E3%83%BC%E3%82%B1%E3%83%AD%E3%83%B3%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%A2%E3%83%BC%E3%82%B1%E3%83%AD%E3%83%B3%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%82%A4%E3%82%B0%E3%82%A2%E3%83%8E%E3%83%89%E3%83%B3%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%A4%E3%82%B0%E3%82%A2%E3%83%8E%E3%83%89%E3%83%B3%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%82%A4%E3%82%B0%E3%82%A2%E3%83%8E%E3%83%89%E3%83%B3%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%82%A6%E3%83%B3%E3%82%B3%E3%81%AE%E3%81%8B%E3%81%9B%E3%81%8D.png",
  "./assets/fossil/%E3%82%AA%E3%83%95%E3%82%BF%E3%83%AB%E3%83%A2%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%AA%E3%83%95%E3%82%BF%E3%83%AB%E3%83%A2%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%82%B1%E3%83%84%E3%82%A1%E3%83%AB%E3%82%B3%E3%82%A2%E3%83%88%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%B1%E3%83%84%E3%82%A1%E3%83%AB%E3%82%B3%E3%82%A2%E3%83%88%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%86%E3%82%88%E3%81%8F.png",
  "./assets/fossil/%E3%82%B1%E3%83%84%E3%82%A1%E3%83%AB%E3%82%B3%E3%82%A2%E3%83%88%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%95%E3%82%88%E3%81%8F.png",
  "./assets/fossil/%E3%82%B3%E3%83%8F%E3%82%AF.png",
  "./assets/fossil/%E3%82%B5%E3%83%A1%E3%81%AE%E3%81%AF%E3%81%AE%E3%81%8B%E3%81%9B%E3%81%8D.png",
  "./assets/fossil/%E3%82%B8%E3%83%A5%E3%83%A9%E3%83%9E%E3%82%A4%E3%82%A2.png",
  "./assets/fossil/%E3%82%B9%E3%83%86%E3%82%B4%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%B9%E3%83%86%E3%82%B4%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%82%B9%E3%83%86%E3%82%B4%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%82%B9%E3%83%94%E3%83%8E%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%B9%E3%83%94%E3%83%8E%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%82%B9%E3%83%94%E3%83%8E%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%82%B9%E3%83%9F%E3%83%AD%E3%83%89%E3%83%B3%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%82%B9%E3%83%9F%E3%83%AD%E3%83%89%E3%83%B3%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%80%E3%83%B3%E3%82%AF%E3%83%AB%E3%82%AA%E3%82%B9%E3%83%86%E3%82%A6%E3%82%B9.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%8E%E3%83%8B%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%8E%E3%83%8B%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%97%E3%83%AD%E3%83%89%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%97%E3%83%AD%E3%83%89%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%8F%E3%81%B3.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%97%E3%83%AD%E3%83%89%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%93%E3%81%97.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%97%E3%83%AD%E3%83%89%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%97%E3%83%AD%E3%83%89%E3%82%AF%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD%E3%81%AE%E3%81%95%E3%81%8D.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%97%E3%83%AD%E3%83%89%E3%82%AF%E3%82%B9%E3%81%AE%E3%82%80%E3%81%AD.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%A1%E3%83%88%E3%83%AD%E3%83%89%E3%83%B3%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%87%E3%82%A3%E3%83%A1%E3%83%88%E3%83%AD%E3%83%89%E3%83%B3%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%88%E3%83%AA%E3%82%B1%E3%83%A9%E3%83%88%E3%83%97%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%88%E3%83%AA%E3%82%B1%E3%83%A9%E3%83%88%E3%83%97%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%88%E3%83%AA%E3%82%B1%E3%83%A9%E3%83%88%E3%83%97%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%83%91%E3%82%AD%E3%82%B1%E3%83%95%E3%82%A1%E3%83%AD%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%91%E3%82%AD%E3%82%B1%E3%83%95%E3%82%A1%E3%83%AD%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%91%E3%83%A9%E3%82%B5%E3%82%A6%E3%83%AD%E3%83%AD%E3%83%95%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%91%E3%83%A9%E3%82%B5%E3%82%A6%E3%83%AD%E3%83%AD%E3%83%95%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%91%E3%83%A9%E3%82%B5%E3%82%A6%E3%83%AD%E3%83%AD%E3%83%95%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%83%95%E3%82%BF%E3%83%90%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%95%E3%82%BF%E3%83%90%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%95%E3%82%BF%E3%83%90%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%83%96%E3%83%A9%E3%82%AD%E3%82%AA%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%96%E3%83%A9%E3%82%AD%E3%82%AA%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%93%E3%81%97.png",
  "./assets/fossil/%E3%83%96%E3%83%A9%E3%82%AD%E3%82%AA%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%83%96%E3%83%A9%E3%82%AD%E3%82%AA%E3%82%B5%E3%82%A6%E3%83%AB%E3%82%B9%E3%81%AE%E3%82%80%E3%81%AD.png",
  "./assets/fossil/%E3%83%97%E3%83%86%E3%83%A9%E3%83%8E%E3%83%89%E3%83%B3%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%97%E3%83%86%E3%83%A9%E3%83%8E%E3%83%89%E3%83%B3%E3%81%AE%E3%81%86%E3%82%88%E3%81%8F.png",
  "./assets/fossil/%E3%83%97%E3%83%86%E3%83%A9%E3%83%8E%E3%83%89%E3%83%B3%E3%81%AE%E3%81%95%E3%82%88%E3%81%8F.png",
  "./assets/fossil/%E3%83%9E%E3%83%B3%E3%83%A2%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%9E%E3%83%B3%E3%83%A2%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%9F%E3%83%AD%E3%82%AF%E3%83%B3%E3%83%9F%E3%83%B3%E3%82%AE%E3%82%A2.png",
  "./assets/fossil/%E3%83%A1%E3%82%AC%E3%82%BB%E3%83%AD%E3%83%97%E3%82%B9%E3%81%AE%E3%81%82%E3%81%9F%E3%81%BE.png",
  "./assets/fossil/%E3%83%A1%E3%82%AC%E3%82%BB%E3%83%AD%E3%83%97%E3%82%B9%E3%81%AE%E3%81%8B%E3%82%89%E3%81%A0.png",
  "./assets/fossil/%E3%83%A1%E3%82%AC%E3%82%BB%E3%83%AD%E3%83%97%E3%82%B9%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD.png",
  "./assets/fossil/%E3%83%A1%E3%82%AC%E3%83%AD%E3%82%B1%E3%83%AD%E3%82%B9%E3%81%AE%E3%81%B2%E3%81%A0%E3%82%8A%E3%81%AF%E3%82%93%E3%81%97%E3%82%93.png",
  "./assets/fossil/%E3%83%A1%E3%82%AC%E3%83%AD%E3%82%B1%E3%83%AD%E3%82%B9%E3%81%AE%E3%81%BF%E3%81%8E%E3%81%AF%E3%82%93%E3%81%97%E3%82%93.png",
  "./assets/fossil/%E3%83%A6%E3%83%BC%E3%82%B9%E3%83%86%E3%83%8E%E3%83%97%E3%83%86%E3%83%AD%E3%83%B3.png",
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
