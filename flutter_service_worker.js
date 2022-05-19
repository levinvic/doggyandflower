'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5c9597f3c8245907ea71a89d9d39d08e",
".git/config": "35db117047c6b8fef21b8e6d2e3d1919",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "224ba185d3faa9db4f497d26a84f5e96",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "d04ccf88897fe6897d86190b604440bf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a0336342fbdff5da9babdac7bdbf20f",
".git/logs/refs/heads/main": "3a0336342fbdff5da9babdac7bdbf20f",
".git/logs/refs/remotes/origin/HEAD": "f1283685c9db01b70049b790dbb5800a",
".git/logs/refs/remotes/origin/main": "3703a5b26b42d3f6f4fb1ff16bb802c1",
".git/objects/04/33ee37a9ee0ffdf254f8816d4d4c0c80c40f0c": "99c15c3c743eae67ddadd7d03cd57645",
".git/objects/04/ae2edaa65d4ba56719631ca51f53630b9088b3": "370b69dd3b79fc9857ff1520ed018fbd",
".git/objects/07/f42f017b971eeeba0499da24eac0f20877f9b3": "498ecc4e253711d5c1b2352c22d46281",
".git/objects/34/4587080da4a46e115a9966cb1a2110bf0d281c": "c6d57e1e9efeded300da0961dd721b43",
".git/objects/3e/ce3bd6beb57fc4c6e413668521622c95698d55": "682df34058c4761d1d71dbacbb0cfed1",
".git/objects/44/d6deb5f2c149ca6b1412c325d37b82d7f3721a": "90f17b47ebca6ca36729bb28c0d14e7d",
".git/objects/4b/6794c74ae46c9afccf627ae9703c3b8c526daa": "54cc6020cf735b1af1624bb36fe0e133",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/64/6f7f60039fc1da48cbb85fc96583947b5442e2": "dddc512f269df8fa9dfb3c810bc54378",
".git/objects/64/aca0e91f147293e6737a6843a60f0b5c191f8e": "65e8daaa85350b4fd36e09eafca3e015",
".git/objects/89/35ce92f5a2b3e2c3a77dc442bf6876475892a0": "7264946dd48d979fc73103c44d67f410",
".git/objects/8a/238208acfc8ed14e62b938f6419b59402a8852": "efd694c79e2ffbef3e03bf5d561fb90e",
".git/objects/8a/f8291304e9850fa8853b9b85015aaf70b06ef1": "71336fe117f84691ef72e2f9b99c7b5d",
".git/objects/91/d16e1ab93054cac7d5c1f28663ec3d8137f21d": "5aede3dd1775b425c27bb32e1f1daeb0",
".git/objects/a9/0f020d7a983c3bec2874ab764a3e164acec056": "071a589c1cc576ca254bcd6555e3a0c7",
".git/objects/b0/3c14bbef1a3ede32abcd3616f56cc56698eac8": "5d6974d437e9ee4f06aca1dcb7bdc36d",
".git/objects/b2/b0b03dc91921427e4fe7500b834cfe3fad04d7": "7d834539804c7ace610f9c228c89c80d",
".git/objects/b3/3a1cb0265a108580cdca3d4cc508d9ac47b769": "cde687243f2a8a546aa7b6fb11665415",
".git/objects/c3/f0e450ae263f4e28892747a4717c352473d25c": "a07f58ead85ccdbec3e1b68bc33a0e25",
".git/objects/c8/cd5cf589a481ae91578fcd7fc2359afc5da2a8": "ccd923768d1c3874fb7f870d727e7dfa",
".git/objects/df/3f472b6011c5afede5f069c1739221be1ae301": "76ce9a4f746ee4908d36994131f4a0ef",
".git/objects/e2/faec964318069917cd73ae5b7ab42a03cfb53e": "061ccc5938b35a87fd0796fd19ff48b4",
".git/objects/e4/42bcea5ee8e8ef53ee130c65b5170064b244ac": "721c68e197600b7866ff2224e761821e",
".git/objects/fa/fe8986c9788b607fb602255128cdcba68cf605": "fcba01f478067fe5d43a9f386f75a659",
".git/objects/pack/pack-fd1135ae4d79b0b474fc52bf6d246e83b4eaf01a.idx": "c9f501468bea23638daa06b6a6ca8ae8",
".git/objects/pack/pack-fd1135ae4d79b0b474fc52bf6d246e83b4eaf01a.pack": "4f117b3e2349fbd2a9083022fdf4176b",
".git/ORIG_HEAD": "65e4e4529582588cf8cafaeb3143c3f5",
".git/packed-refs": "5593867ceb1c4314d4b4492fa1bd8715",
".git/refs/heads/main": "86e8cbf53a972b644ba97446bccffe24",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "86e8cbf53a972b644ba97446bccffe24",
".git/sourcetreeconfig.json": "839e3ce4a3dfa63af877a3d9ed33d4cc",
"assets/AssetManifest.json": "aee83f6c5816a46287f0359acf911271",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/images/coffee.png": "762d43a28d8088f0a294811f2e081a7a",
"assets/assets/images/coffee2.png": "7646ff392c92110c585cbed1beb9c1ef",
"assets/assets/images/mockup.png": "2ec9e0b08217f7a2383a961ce73c0e63",
"assets/assets/logo/logo.png": "2af7b2e72abedc2bce98944653429354",
"assets/assets/logo/logo.svg": "925b17733e3fc58fc1e60125e3c2fcab",
"assets/assets/logo/logo_icon.png": "aa04971f5a403dd24bcaf06f55b093c1",
"assets/assets/logo/logo_name.svg": "13525360ef71a507eb10ce4d4f408658",
"assets/assets/logo/logo_text.png": "0b78ae381bd4c66c0394fc37cea78284",
"assets/assets/slides/background-1.jpeg": "f8ed4d3704b14706eb036222b7ca4045",
"assets/assets/slides/background-2.jpeg": "2a495deff8fae15f2b30f535d1576ca1",
"assets/assets/slides/background-3.jpeg": "a1789d9a53f146cb6178e9db14b5e244",
"assets/assets/slides/background.jpeg": "d9418faee4ffef09d5142d2281040011",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "c03ba5f49806b6e1a32d343ce88b1203",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c570f76cf92f0dd785ed80a5d66bf66",
"/": "9c570f76cf92f0dd785ed80a5d66bf66",
"main.dart.js": "3bfdc1c107e64b044101dcbb286e7ac1",
"manifest.json": "e033a420d02b615eb6f86754043c2049",
"version.json": "b96e1f597d0344e96e0de9b6ee15b77d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
