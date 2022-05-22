'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "03a6ecc1dbc74cfaacfeb8b1f09b8998",
".git/config": "35db117047c6b8fef21b8e6d2e3d1919",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9213ba1add8ec03e4b4112cd53146289",
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
".git/index": "3cb2c244541157924c6e08fa3a54688b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb1e4ab5288de7938762e831ce1c9078",
".git/logs/refs/heads/main": "eb1e4ab5288de7938762e831ce1c9078",
".git/logs/refs/remotes/origin/HEAD": "f1283685c9db01b70049b790dbb5800a",
".git/logs/refs/remotes/origin/main": "19ac7be6b0c16261888dc4c401dc10d3",
".git/objects/04/33ee37a9ee0ffdf254f8816d4d4c0c80c40f0c": "99c15c3c743eae67ddadd7d03cd57645",
".git/objects/04/ae2edaa65d4ba56719631ca51f53630b9088b3": "370b69dd3b79fc9857ff1520ed018fbd",
".git/objects/06/22ae66e8bf97fca8f90a307522a8d642712a70": "9c51c44cba429e1343b60e5a2da03138",
".git/objects/07/f42f017b971eeeba0499da24eac0f20877f9b3": "498ecc4e253711d5c1b2352c22d46281",
".git/objects/0d/1ba7b9a08a5b1595ba9d882717371a9bc3c481": "e3273a25f9894bca3807528dfaff6856",
".git/objects/19/78fd6de097e2103223d4a4ce0b7a44d7330d47": "39e0150809efdfb6313172577953a52c",
".git/objects/22/e831d1ceec06c13c6747f0a30f12ad8940ecd9": "75c491fa221fbf7449feeb096abf5e7a",
".git/objects/24/b125389b83c68fbc9a6f4303f74b7cdc621ad6": "f6638c271bb6ac34ed2112d91a074857",
".git/objects/28/8a9c83ffea4d06684b5df914c553b5da498624": "100027a78b963e87112c8ddb1e1835b7",
".git/objects/29/5f2c15c446bcb79875e0972bef3dc11dc01a76": "06d6b2dc4367db9b0a3e1fa6ccc45777",
".git/objects/2d/b767925cbfa4eaf77a09f4dd6e6bdce03e4f1f": "33e75e433397f80f80edbe2751cfb7e9",
".git/objects/34/4587080da4a46e115a9966cb1a2110bf0d281c": "c6d57e1e9efeded300da0961dd721b43",
".git/objects/34/9eb55960d40ff325b4690fb54fc27d1485ea87": "62d07cc50b375231122ba2aace6cddf8",
".git/objects/3e/ce3bd6beb57fc4c6e413668521622c95698d55": "682df34058c4761d1d71dbacbb0cfed1",
".git/objects/42/2b4520108cc6752bcd16744f1d8510d37e63ee": "877a687dccb34d6839536e648eca89e6",
".git/objects/44/ad114130f947091bce33d0c8d1b9d5af0ad776": "fb62c4bd5c8995f1b7b41f45172463a2",
".git/objects/44/d6deb5f2c149ca6b1412c325d37b82d7f3721a": "90f17b47ebca6ca36729bb28c0d14e7d",
".git/objects/4b/6794c74ae46c9afccf627ae9703c3b8c526daa": "54cc6020cf735b1af1624bb36fe0e133",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/99932dc52037f3850c8ce99f2c75ad6436abe5": "cf04f6fef9a35fa03774775a6906005a",
".git/objects/5d/2a1e3be0d4de8cfc66e558ca1aca2034ce7295": "672301f5fddd10279aeb2774c2c97737",
".git/objects/61/93d5db80131f19ea79a430c2b4f4eacd8748eb": "9ce1436c634043351a4c104b25a88c4f",
".git/objects/64/6f7f60039fc1da48cbb85fc96583947b5442e2": "dddc512f269df8fa9dfb3c810bc54378",
".git/objects/64/80d3247c90578ed7c2c9d5b2632b3ab0df09ee": "9d6f122cc64427dc0300471556145c90",
".git/objects/64/aca0e91f147293e6737a6843a60f0b5c191f8e": "65e8daaa85350b4fd36e09eafca3e015",
".git/objects/6b/5e150ff9165ac8820a92445f23b8edac9c41fb": "dc9bbe740a51d3824a0843b250cbbbd2",
".git/objects/6c/57ca32ae986834206e1edb6499469771c1f89e": "9a0a7d3636a15361749362d18f9970e6",
".git/objects/71/1e453c70c3aa72694331c3d43e7c8573d7596c": "4f218a76563e0d7b80c626a4a653c99d",
".git/objects/76/b9f6be1df5186b815184ae929dab7f02e3c192": "06be47c01230268244545c7eb19db225",
".git/objects/7b/7d7a9342d7bad9b8e5a0a1453c5144859eaa51": "2ed03cfb113f66896a354c64af1fb237",
".git/objects/85/d57f5c10479820b9b64f57bbd8a2420d3800eb": "1e4ae76286e59b04e72459e0c9650974",
".git/objects/88/80452e9ba70c6493de66aa78b6c69d226146fd": "22662107c5b133256c9756cd0413e699",
".git/objects/89/00143d93ea2da27e27139f23f9d1d0520b5d8f": "23ab75fc746f64f25e8eb1ca55b78a6d",
".git/objects/89/35ce92f5a2b3e2c3a77dc442bf6876475892a0": "7264946dd48d979fc73103c44d67f410",
".git/objects/8a/238208acfc8ed14e62b938f6419b59402a8852": "efd694c79e2ffbef3e03bf5d561fb90e",
".git/objects/8a/f8291304e9850fa8853b9b85015aaf70b06ef1": "71336fe117f84691ef72e2f9b99c7b5d",
".git/objects/8c/f7f60c322afd55a32b6fa739856b769119e037": "e809f114906a457fc933d083ce78a439",
".git/objects/90/7bb0ae3d377062e92066fa799cdbe73b535a0a": "b0a068c09026bb9401c433575144f610",
".git/objects/91/b85bae47f8e971615eea8edf0eabaf2ac30fec": "f3156a2aa4e771f35c5af473969ed749",
".git/objects/91/d16e1ab93054cac7d5c1f28663ec3d8137f21d": "5aede3dd1775b425c27bb32e1f1daeb0",
".git/objects/98/7e21ae1b483014afac1f2da88e869b2d87eeef": "c2c0761418edb84c870b631865a26963",
".git/objects/9f/f15de72032098d29ac9d4b86abcdec5edf29d9": "0885d819ce88c76420dca85a42f3e8be",
".git/objects/a9/0f020d7a983c3bec2874ab764a3e164acec056": "071a589c1cc576ca254bcd6555e3a0c7",
".git/objects/b0/3c14bbef1a3ede32abcd3616f56cc56698eac8": "5d6974d437e9ee4f06aca1dcb7bdc36d",
".git/objects/b2/b0b03dc91921427e4fe7500b834cfe3fad04d7": "7d834539804c7ace610f9c228c89c80d",
".git/objects/b3/3a1cb0265a108580cdca3d4cc508d9ac47b769": "cde687243f2a8a546aa7b6fb11665415",
".git/objects/bb/650206119b2760400bb921d8ae994f9eab925a": "6f5e1465c01099ef43bdd348d761bdbd",
".git/objects/c3/f0e450ae263f4e28892747a4717c352473d25c": "a07f58ead85ccdbec3e1b68bc33a0e25",
".git/objects/c8/769ae383f3bd73176b0e0642e534fcf09e8a8c": "08e0da48beb42f5f45aea959dc8eea13",
".git/objects/c8/cd5cf589a481ae91578fcd7fc2359afc5da2a8": "ccd923768d1c3874fb7f870d727e7dfa",
".git/objects/cd/26f5521a1bc582e8bdc68e23e28bb349c81b1c": "621426f6bae808f0db4511604b465809",
".git/objects/d0/e0122189eb9e33be5142a053b51e34689ed84a": "0fe06ed11d90ca1d3fa842519dd5f30b",
".git/objects/d6/0cf5e9a8db4e80f433ed1b5c319d1d2613cd92": "ce2feb5005036a620356de823806c95a",
".git/objects/df/3f472b6011c5afede5f069c1739221be1ae301": "76ce9a4f746ee4908d36994131f4a0ef",
".git/objects/df/916beb822c769b2092a2dfd2d3793a570063db": "33e6c580d1955acdbd2739c27000c5cf",
".git/objects/e2/faec964318069917cd73ae5b7ab42a03cfb53e": "061ccc5938b35a87fd0796fd19ff48b4",
".git/objects/e4/42bcea5ee8e8ef53ee130c65b5170064b244ac": "721c68e197600b7866ff2224e761821e",
".git/objects/e6/17bd50e45aace08feedebef4f37e50de427d56": "2746b893211f3e4e83840c9b3bc3cd91",
".git/objects/e7/14b54120c75465e64d54d16a5607d3035eb285": "e4e209ab121362171d16941260ebe837",
".git/objects/f9/2f27b8a04d76adf239c0bdb37d1371072cec4e": "1b3cd16a70d46ab5713f9dfc7f96ebd5",
".git/objects/fa/fe8986c9788b607fb602255128cdcba68cf605": "fcba01f478067fe5d43a9f386f75a659",
".git/objects/fd/682be0e7b7319518739a57a3a8e67cfa9ddb82": "0b695effbaedf68b596d3d3f5ac2e15e",
".git/objects/pack/pack-fd1135ae4d79b0b474fc52bf6d246e83b4eaf01a.idx": "c9f501468bea23638daa06b6a6ca8ae8",
".git/objects/pack/pack-fd1135ae4d79b0b474fc52bf6d246e83b4eaf01a.pack": "4f117b3e2349fbd2a9083022fdf4176b",
".git/ORIG_HEAD": "a78cec8db93034e0702e89008ee4aef5",
".git/packed-refs": "5593867ceb1c4314d4b4492fa1bd8715",
".git/refs/heads/main": "83095f0e5c4f9c5b30970d783ece2e4f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "83095f0e5c4f9c5b30970d783ece2e4f",
".git/sourcetreeconfig.json": "2f2e4834de4af385df68578ea9a3d710",
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
"assets/NOTICES": "352d353802735e10e4d85d901a943e34",
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
"index.html": "8dfb765899c7a7ae347a0456db1f26ab",
"/": "8dfb765899c7a7ae347a0456db1f26ab",
"main.dart.js": "d0595c284ac904b755aa7450bf1b5a53",
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
