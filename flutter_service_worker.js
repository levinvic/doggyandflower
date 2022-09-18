'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b96e1f597d0344e96e0de9b6ee15b77d",
"index.html": "232269e801b80c0f945cc117011235a5",
"/": "232269e801b80c0f945cc117011235a5",
"main.dart.js": "db23b991a55cfa63a7e71def723f93fc",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "468d655f56fb8c29457f357285b5eee1",
"icons/Icon-maskable-192.png": "468d655f56fb8c29457f357285b5eee1",
"icons/Icon-maskable-512.png": "468d655f56fb8c29457f357285b5eee1",
"icons/Icon-512.png": "468d655f56fb8c29457f357285b5eee1",
"manifest.json": "31693ebe52e36b17625388fc089c7cc6",
".git/config": "454108475fd1df51c581e9b73df06ea2",
".git/objects/61/ff9f30712a833d22a1fe850abc7c7efadc74a9": "dc74f8f73f6582b8bd64f447fc4cfe0d",
".git/objects/03/b74c34e40b5556d7fc4ba502107f52d5149776": "8d17c8fa4006eb98e2d3daca5c2c6961",
".git/objects/04/96ce0f326ce30c17252900d21139b899f3d5f6": "10a56747f9555e4e0d41c151bba24148",
".git/objects/04/243583f4849dabce40ea07c8500693a07d6f44": "389d57b0df608c0fd6eff7d6fa20b5fa",
".git/objects/35/463e247d1b8ff9154b19e875b88d0de65f53e6": "bbfca0dcc2df381a898f621ca96bcb99",
".git/objects/58/e2168026e1f368fdbe26a62331e6b965b7966b": "08b8f3eca48668514b90a7a8c4fe83f5",
".git/objects/94/fae881e2c0ff2398990593606365a448e70087": "3cb1bc626d3764b9c0e2043320f1b4d6",
".git/objects/5a/dee35728e3797c5fc217e00df078581fa449d7": "e77de3cbdf5de6c5ad6c5afb48897f4a",
".git/objects/b5/cb2e559ddf60291dcfeb5983159911502e04ce": "dd5b4fe39d535e390f769ddbfb88d102",
".git/objects/d9/1136cc842e4302bfd745f5470bbebea9bdcfdb": "d49c4dd86901229aebb722d09ef9fee3",
".git/objects/da/eeb91dfe5d926f310e240c740ab00c3875f565": "2a4f5229733085a93094347b83d1c5b1",
".git/objects/e2/6d36ca816244e9ec96fe7a57d208a06381c44e": "4df3362f33beea2f04c5d9e1632a0f25",
".git/objects/eb/92cd304a72b219f1300725eebafdd7ee98913c": "ccb6b802aff79e86cb1511a40cd54131",
".git/objects/ee/a4dcded4e8b2d07de9c68f24d7f2e34a4925d3": "0681ab5e53a0d702d046296dd41392e1",
".git/objects/fc/fd81bed738618e3f10e95ab08499318ce8f782": "0e867e8717dd3a249a754ecf73da7f4e",
".git/objects/e3/8b3d4cdbb320ad46786d7cd24a6b4554ce2e86": "4b7aa613615a110c55ce0974702c6055",
".git/objects/ca/b46c10eb368dfcac4c9b3af964ff408d00040d": "8d7d3815a19c73de2ce3fe7be4e52720",
".git/objects/e4/507ffb613251bedf24f0ab3cd11223a672c470": "453e1351c10b13365be454f51eaf410e",
".git/objects/18/74a641f531139011afb85edd570af4ffa2fb63": "a68eb2945a70fb607ce193234a3fe3c2",
".git/objects/27/56ad276d69edac06344e69dc3814ecb76f8be9": "90854bcf89fad7a2626e8ee39f183c86",
".git/objects/27/5571c84eedfc12adbea1581ff51c6ab687375c": "ee6447b4581d2a74a8504c81f99c0fc8",
".git/objects/pack/pack-fa0123d56356a329339d7256455b8c6c3082902c.pack": "8fd2d754000d63a970f40670fb14286f",
".git/objects/pack/pack-fa0123d56356a329339d7256455b8c6c3082902c.idx": "df36453a8948bd1cdebe2677429d0555",
".git/objects/7d/4c9061782f5be51804f6f6f52d2ccabd42ad42": "1de6491665474c14655761c2ab6b9f2a",
".git/objects/7c/4ad0b264caed6fcde18e496f27feb4db034ab0": "3d27b63d1eb2dd3049fc9863b85efc84",
".git/objects/87/723c1993b1fa555c47c174950729ef507c906a": "91f747b55c6f1dd0eecc720a3e9b7cbf",
".git/objects/87/63b7a08223192a50fe6748e604a1e8e231e949": "5da60f627a73fed7609fd584dd6917e0",
".git/objects/1a/a3e1ebeffb01092f46d470a936e9ce22fd1f1a": "f0161a706d213cbc03e0458baeed95b4",
".git/objects/28/96f4b950f4e3764316633cac67785ce32ba9a2": "ec7bbfba1dbe7365b07749cfd3000b64",
".git/objects/7b/d795dffeb47a966af6da0d3c1f46be40c276a8": "83953e9d4ad19f6ee1a9106e10bc62c1",
".git/objects/7b/e45592050e3ae844ffd2158507f5b48510af4b": "fb6e6c445204e581d9caf919d17b0e45",
".git/objects/7e/dcbf217461f700250b5da9bbeff5640f4c48b6": "58eb115c3c62095b885530395af6b376",
".git/objects/19/2a456d126722148e502c5a9638ee30d53f6807": "c6acc3573b05714a6e7247428ef208e8",
".git/objects/26/4930b92578016b0edbf86211420c1b23d51cfe": "a01d4944fe995c117a9f3fdddd2bf144",
".git/objects/09/2840fc5262dce85d2b753c853bdfd5fa0858c6": "66cbbef2e36c60d8bd44a541f5e34ca6",
".git/objects/53/98250b6e9695c80bef12b7c7ef9b7dcf5245b4": "0c14f90314c204d7406f2577df75db65",
".git/objects/30/551b2b6256704f528d1a34a3a9cd2acbcb28d6": "4cf5ff15142ce953ed8ff8d3e589e8b9",
".git/objects/30/4e0d1dbeac32c26c712431c34d02faa3e2bf15": "cc17cc137dfea87c4548244d929ddeb3",
".git/objects/5e/b4f69ae458f857bb8c4d06ba9410f449be83f5": "80fc6b637cfc9be9f8586c8100423566",
".git/objects/01/fc00e36adf5cb4a54de26cedd6630359c2ada8": "4a66b6cfc996e72750c1f48fc553a16a",
".git/objects/97/3b0283b9b8eb050e0743fc898480ac7a70ce0e": "b4836fb19673fbdcbc4c2d259fcd85eb",
".git/objects/97/9ff59e13becc65e5f053eaec4cfab281130994": "d88144f86be84fb6c011efffeef437b5",
".git/objects/97/23f5194095604831f20cc67545716093f3d937": "062cdd723da4889a3ee2d0d21e0cdefa",
".git/objects/d4/4fbe13e65c57e3f55e26d8407bdde158dc000b": "a495a172bb70b77cbb0aa5723ad457c0",
".git/objects/d4/c38ad1ecf1254a0eea4c6ee0ffc8087a1f9edd": "40f41a54b8d598e300dc2383dd33c32d",
".git/objects/a8/93328695f97c7a35f721aa72a6da2bc97b4ae6": "3e74749245236ea3f2ec175838b8e87d",
".git/objects/a6/473818e50250faf604893b73127651b1f2547e": "b3843a7190ab7feb6f9e312e18362dd5",
".git/objects/c3/65b4c6ee9d88ca4e392000b0377524df9e9f4d": "e35b845b50ca5e8c33485e4c2c4291fa",
".git/objects/f6/d8fcd0b3ee4bfdd40a384d92c2a7e085017ad3": "b7762ac6bfa1d36ae803913647a61bff",
".git/objects/e7/8015e952af089876d84bcfbaa0d2e38a211ae2": "8504d30ad4ddeef77152c59073d9c41f",
".git/objects/ce/4029bc94ca31aec42956eca25b83546c53243b": "a334fee096eb6a4ea7a4ad605fc4cb6e",
".git/objects/46/35f802d4a63119431183763058ecdff2bfeaa5": "b8b666cd33c1fd053b2996b6402e3909",
".git/objects/41/918b66cd7f1ec93eab896862de6971368df8ac": "3d346fa869bccbc0188ffd25bc9e764a",
".git/objects/8d/1e228ec6896042674bfb0fbd97f77ce16853d1": "57a4f243c032a9dbfb49c05cb5a6e599",
".git/objects/76/216604ed883311a8c660d28eaf6682817db54c": "4bc659dc5962bd14519d529a53877b1b",
".git/objects/1c/a30f47dd46a35a9ed7ae0b4421369b89c01a15": "f58ce2506facb4acc61cbea920ef6bf2",
".git/objects/22/282bf6718b200b6f46547d028308b0d7c2879e": "590ec8d92c7069cd2999a9389d3446fe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5bec077c554911a175c474d51c5d275",
".git/logs/refs/heads/main": "b5bec077c554911a175c474d51c5d275",
".git/logs/refs/remotes/origin/HEAD": "3d347e64217d4dd61cb248c315d888eb",
".git/logs/refs/remotes/origin/main": "e6e19a3c342ffa01ad7636f292a9567b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d40224676058fac10855bf402485332e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d40224676058fac10855bf402485332e",
".git/index": "f0279b4a106134f5263be15833857e16",
".git/packed-refs": "a9757010020105e012c5540baa65c30c",
".git/COMMIT_EDITMSG": "f232a2360a9d239a854478e6a2fb0b44",
".git/FETCH_HEAD": "418f17ea55304f84e602adb846d1adb1",
".git/sourcetreeconfig": "f3163d181de80c52617585ce44d52d1b",
"assets/AssetManifest.json": "1801afc6fbd2d7b495139abe826b89aa",
"assets/NOTICES": "23b296cc97e264178e91c29b4519f8f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/coffee.png": "762d43a28d8088f0a294811f2e081a7a",
"assets/assets/images/mockup.png": "2ec9e0b08217f7a2383a961ce73c0e63",
"assets/assets/images/coffee3.png": "7646ff392c92110c585cbed1beb9c1ef",
"assets/assets/images/coffee2.png": "23cbcc0c8ce4c54f10f90de086b19e68",
"assets/assets/slides/background-1.jpeg": "f8ed4d3704b14706eb036222b7ca4045",
"assets/assets/slides/background.jpeg": "d9418faee4ffef09d5142d2281040011",
"assets/assets/slides/background-2.jpeg": "2a495deff8fae15f2b30f535d1576ca1",
"assets/assets/slides/background-3.jpeg": "a1789d9a53f146cb6178e9db14b5e244",
"assets/assets/logo/logo_name.svg": "13525360ef71a507eb10ce4d4f408658",
"assets/assets/logo/logo_text.png": "0b78ae381bd4c66c0394fc37cea78284",
"assets/assets/logo/logo.png": "2af7b2e72abedc2bce98944653429354",
"assets/assets/logo/logo_icon.png": "aa04971f5a403dd24bcaf06f55b093c1",
"assets/assets/logo/logo.svg": "925b17733e3fc58fc1e60125e3c2fcab",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
