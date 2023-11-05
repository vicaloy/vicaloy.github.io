'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dc58d18eb243ab56425781198bbfc8cf",
"index.html": "500d49cfb55f469d6549d4df6d579db0",
"/": "500d49cfb55f469d6549d4df6d579db0",
"main.dart.js": "bac0ebd4f6d27bb5a3a23b5f1ea50276",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "90799d62ca790e2283cb7120f2cdaa02",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "187dfe833a90225a3b6a4454dee0ef64",
".git/ORIG_HEAD": "1795914c721ed659daff32d4839d7095",
".git/config": "aff62bc3bbbde956bf11e92449da8824",
".git/objects/59/e40630d67b071fdc18ee1cb0553c85f7e4103a": "f7131df9bea394a94214f377e8fe9e77",
".git/objects/6f/5cac19b005646241cbc191e6b7262d2748d973": "acbb4a018365586bc4bcea7a93dcb97f",
".git/objects/9b/272a3d6f5aa5e773481b16edf7700c798f6461": "2dad2aa2efd7cbd9ecdcb2e80750a245",
".git/objects/04/24015416097ec075b0cf8c6d3149646432b792": "8bd40a1d64b22bdbf36acdce8deb4b7c",
".git/objects/6a/f1ae0a97cee3c8949459a6a3c39f354bdc664f": "5d264bd034cb19d3eac638ce2ee9f62c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/b3ead28dbd48fc6ce2be5263d93975fffbc5e1": "fe20e97f838180e0c9f68b070f6f780e",
".git/objects/93/85d2f855adcd241e6fd99fbe2b5e91292aaebc": "96ecd3852810a89b2663f7068e2e8d2f",
".git/objects/05/301f064377e8f68a89d28816d15d137949a496": "7a235883945e431a107d3f09e8d64592",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/2dbed8c4b558fbd76df382ff6490036f3c6703": "aafee9e1667e61ffa2699798983ed466",
".git/objects/ad/fc50fd5778cdc24ec24e26cd777547c3acea6b": "25e151395b7bb5ab39a319aad9055908",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/862deba13300287b52cab09251f640dc007ba0": "e0090782e13a02e62a5d63e41a94172a",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/bd/01b64aa3f6e5502c08c2e6bb4dabf3b770c636": "91f75f83da725c2c1af0b582e88fadfe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f4/e4e4f9371e118099bb10279bed0b1567d15220": "4e15425ab28f6bef87bc1ba46892df68",
".git/objects/f4/4cb07aa5ea7479f6738e4c64936e9144ee46e9": "adce1c8cb7d0e887dcd2c90e45e842ba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/16a9eda0b25a2c7c1305df4c54b54a890a5066": "177a54c6b98c31bd81dce1f45c6d069e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/4e/95b20dc829a10672dcea30ac132089bc22b8d2": "2a0ab02ba66615d70afe1e54a6c677b2",
".git/objects/18/44cf24f212e12a34e9bcd3d8dc6ecb99fd646d": "baa6fcd297615d1b695f7072ed209dc6",
".git/objects/18/c8576e3084c765e26f9ea321aa92c40eedee22": "52e571701b9b456b1425ab7dedbe2345",
".git/objects/11/2a1d65e43296f2b5eeddf6237c51622d103908": "015712a4359781856aa44f59ca84de74",
".git/objects/86/7a37877d1f10936c5211c39daa90b6d271c505": "c8dc049162a83cf9b9dd53ac84f8ec78",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/691b4f6111370eb5a2d9138819fa2ce4bc8fa8": "6619fd7af6c36dc207ac29b0ac7206eb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/130a102fcb2ae373dac4bacd1bb4c13e2ada2c": "f378588ce26bdb1539998c613b0a3950",
".git/objects/55/67f96943053a1ca61c77a063c5516e6ea3cce9": "68f8e50b9503c761167df23d691fdf46",
".git/objects/64/8a9d8fc5458921a3c196dd3b71000335d70606": "ac3cd1af6a988b83d84b04a00ed7279f",
".git/objects/90/0bbf8d60d57ac45c579086dfceabf0a86ccb4b": "6fcc0e65638f1f04df700b7f8032e3e3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/b7df937a6ade15cf096dafcc99a0bdf60738f8": "94680a391e67e58f09311ff1936a9d93",
".git/objects/a7/83d8ecfc3779f7eb8023f4a15691d11574b6a8": "7448520cf3d06dc5907e938a8e0a8d66",
".git/objects/dc/2767a834836d2bbe6e62d9f82436e4d7330f07": "8613fa8c785f701ad5d78dbb82dcfd24",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/964fcede84908ae8655cbc78f35951a83b8725": "147cdcd546c08fb9de74c909d1f87983",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/69ddd2a37a0b087b64df348e94ce226917d4ab": "898dedeb1dd4ac8ee5c56ba1dc4f4a5d",
".git/objects/ef/143a5a05fa3a4b7eed49e8b117fe64d6eb7156": "e88e65b1d2e12fcc9bd1e257179d3f18",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/56d8a76d4a8947114cbd0a5f1fdf32d6a6005f": "fcc240d70580828dc263064aec763809",
".git/objects/ff/4cb3dd8e1b6bd3f950a0c55b2d3502a01eb87b": "2085e0527af4b25e17eb3dc44935c6ed",
".git/objects/c2/ab83f58e37817c5ecc43a8104b29b5cac155a6": "5e6cc691f0b87fa7d3a2887da702b306",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e0/ad2b87db8c3c92ab03b58e122801d8e9dc0132": "513e03ae0c13095ef6ff9d8b60fc424d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a259f2b07cd84c9e67f62363274388128b14e9": "50c606c853eec1a4381eb9f163b1d3b9",
".git/objects/71/67b72409e3f52aa0436b337b128c2cfb91e11b": "016d66e0b7307a5d45948c02d97d5801",
".git/objects/2b/f86bf1cb303541a5f5ae40a6479e0a4dba21ff": "54aa090117d3c177489bd9f4702e87a5",
".git/objects/7f/23ebeac5ed7d08f71b387d55b5b4f4f082a4f5": "73b70639966545689b3bb32431e2e526",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "714ec30988b1da2b578ddb743e3b502a",
".git/logs/refs/heads/main": "714ec30988b1da2b578ddb743e3b502a",
".git/logs/refs/remotes/origin/main": "2bebed86b49da6ecb0ffc712192771c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1795914c721ed659daff32d4839d7095",
".git/refs/remotes/origin/main": "1795914c721ed659daff32d4839d7095",
".git/index": "3b0d6a59ec1727c66420393244e5ce40",
".git/COMMIT_EDITMSG": "1df5ee28c9955544f2ebe06a6c829b57",
".git/FETCH_HEAD": "b41df17687a0a628b02488433dcce596",
"assets/dotenv": "c6aac097c73a5ff4c6d764735f960933",
"assets/AssetManifest.json": "75da70a625d795acf94262a86c934fcd",
"assets/NOTICES": "730b84421d35283f8592f9796c7aa724",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ccd1f09fdd1bdadceacba124c68114a7",
"assets/fonts/MaterialIcons-Regular.otf": "cff4cef4e74dc7f561604be445535e9f",
"assets/assets/orange-separator.svg": "bd9bca02fa965685d4cb19d16d9a87fd",
"assets/assets/pinkwave.svg": "203984026c7382fd3e2a2848a603d1b7",
"assets/assets/instagram.svg": "ca92f2ed9dedaf3aead854e8b8299b16",
"assets/assets/blueseparator.svg": "ff74553dcb1438ad278af22781aec6f4",
"assets/assets/facebook.svg": "efbf750d2d9b7635340e1ccbcbf42d02",
"assets/assets/balloons.svg": "4b21ea706f9206f5fa53a219efe47f31",
"assets/assets/whatsapp.svg": "3a7e36c10c0ef2218c07f94baec46959",
"assets/assets/greenwave.svg": "74bdfd8f9add896077909169b26361af",
"assets/assets/flags.png": "39b88ebdf6f4e47f831e50175ec25989",
"assets/assets/chechichi_logo.png": "90799d62ca790e2283cb7120f2cdaa02",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
