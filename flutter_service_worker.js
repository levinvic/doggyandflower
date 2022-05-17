'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7e786a17b9da91e2fe17a45fe63fb3e2",
".git/config": "35db117047c6b8fef21b8e6d2e3d1919",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "80a9f2b7dd9d39307c29660448c402eb",
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
".git/index": "659abfa34bb12a37583cddd84844b59a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d90378e1056311efdb370073dda97c74",
".git/logs/refs/heads/main": "d90378e1056311efdb370073dda97c74",
".git/logs/refs/remotes/origin/HEAD": "b5f8aa47a53941363604c9a1f009a92e",
".git/logs/refs/remotes/origin/main": "3e5aa44ff5814da026dccc3788da3135",
".git/objects/02/85a8756001d2045fc1b5a893f70876d361907d": "2c9f6261a28eb36e9981180822575f5b",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/06/490d8acc460735c5a71344aa3752beefd313a0": "d6c78b201b908bc062da1c08547803b5",
".git/objects/09/081948143bf8df1bdcbd50746b336bf32528a4": "27f471988235406fcdeb638d10548ff0",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0b/54990531bc23a6a3a9e80e9545dae48559badd": "ba905d4d5917dc166199c8a4fe754ce9",
".git/objects/0c/9634cb9745e500be3d5f677985209c48b474d3": "7f7fec100953f74201d7c763c93dc205",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/18/c31459019dd9a222c53c7bb8e9870aa6498d88": "a02030e2833b91c5e5596c166a49ce4b",
".git/objects/1f/7be56549404e826c2e3c524f7e3c07d0ee3d6e": "488641498e36adf3ae90975b3d08db43",
".git/objects/22/be40f18d620fcaaf2b719da6be7bddff8d2599": "d7cfa0c099c6d9be49e505c5dce63dd2",
".git/objects/22/e78b151405cc2c5fc35cbb6c06f8b4b4a1a16f": "b4f40d477712b85c1b70b92a6fd2f8b8",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/6f142042ab409870e1f661f1dbf5af38305ec6": "68f42471adbf30a27512f77181e66227",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/924b3a62220312d81a00e449ca345b39d80a55": "45d08887e1bbc1fdb3741ca262e829f7",
".git/objects/2f/d61110a82aaf8b2008cd39b2e47c0b16e72ffb": "a765bb4ff9a5dc5cc343a2edab69e760",
".git/objects/30/8d1aff27a4e76207e0dca0bcb14d7142a6e69e": "af6d06b79dd671fe0b98e81646410ade",
".git/objects/30/aea3cdb50d8be84d6340b84e8f9bb20f9cbb85": "4ddd1c1e26b588532e86b8253cbcbab1",
".git/objects/31/1f4fd4c4b9b8ac2f33bad9d1ae2485dc0f0334": "860622af570b4491663626367ca15b21",
".git/objects/35/dd9799a035068b01a3876de2443ea27f7b1cb2": "8020f8cff473acc86228963a91300d9d",
".git/objects/3e/aac0d7ba87e81bc450b513a63196fb2937c951": "c8bc64f073c5ba814178f388a2900b79",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/dd386e6b6135f2bbbe9b4442a945802d1982cd": "9d7e3f0e7111491a44506ea0674d41f3",
".git/objects/51/79efce2e1372b5e57fe0d310a02c15a3874207": "3cf1e3756ac5c7ff0029d7c98661c3b5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/58/2417af8650a52a77bee7b640125673d715eebf": "f1411c8e86e968f35d7aee0dcb4f4a47",
".git/objects/60/443636c13e9e4c3ae527751242c7ec2d6e71d2": "d552a5e3610e6a35516afa6a2fcb9022",
".git/objects/6a/80d62bc38f185da980cb085775f6868034e9b5": "1d5f503906225c0655034f1d5c4a2fae",
".git/objects/6b/5800374cdaa4449c3e9f3372e3ba6f6cc23619": "9d4c020beccf2de5fdb4e22a595500f8",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/72/34f10d112f91cef736887dc4e38242d73f848c": "72a36f5927bf79756b9786bc72ff25dd",
".git/objects/73/d8aa93e52a28ca3adb1d206c957de6837fe439": "3fbda7a0821121fbc9710abcbcef032c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/12899564b297209ddeed879cf89cc4cbefa848": "b4bcae1e2325771dab11ff6876b2f6ac",
".git/objects/78/d3eabc72ceb9f30efc096382229a716a7ed2d6": "25c2762ce74d2cbdec46c00c653c163e",
".git/objects/79/0f39a1065ab3474249445d6b604e8c84c4293c": "b6690381060071d05866e90fae9d2403",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/10ae673f22e37f591a3c39b39dbd670ec16f85": "925fe779a651f0ca5d14b52befb41f57",
".git/objects/82/c950af4b8588031877a7cdff4376b0d79af893": "402f64e1b7328dbd620b83ce6bb272d4",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/88/10268ca038aef5800fc407590e282db4f4c972": "0eb61080f5179805f1df95c2aa541df8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9a1f567cce7a8318f36e2f4c8868f7839f3b6e": "4c0d80c0da66a12c60868e418957f2b6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8e/1a4910207d3141f457e711ed4366c4bdd34d41": "3b7fb06f1431e068e2ba955364582c8e",
".git/objects/92/f2862bc80e615fab95d257bad2ff9d8fafd74f": "ef8d60cb2d6490d58fdb2b8503ca3035",
".git/objects/9b/5b17a47c101dd23a8c7f57774fb7d0c152b8cd": "75ebc33e74c1eb407512133e62dd7b0c",
".git/objects/9f/0c222ab48cbe1ab8ecd42a65924861a8ad7dbc": "0d85b745e1bf4962eabff6ac3dad165a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a811800a5bab338d0a9ea7380ba0925502df2d": "22fcba51216542928b7972ae1b85208d",
".git/objects/a9/c4e908b5be8063cd714d24dfdbf4fb08c2e277": "ed0caef2d964f68951468af6e1618377",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ad/7a8bee329407001cdd53747475fbf461fa8789": "b4e243b01db237acb0426a55397d4b39",
".git/objects/ad/ef66a538bb7d81131592cccf04e3a7b4465a5b": "ffedab60ae9de3376273927dbfff1b83",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/b1/c079b3d41df86f1ef0491d7a055f10086d0b26": "5867c90850a76133fc0f5562badd8768",
".git/objects/b5/0561d7267f70058408a1411f7c736b67cc2cf5": "ffdc40d8ad4a6674d915ac0f2cf7a3e4",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3a0f46fc9c74dba2b118fb3063d36e533072a": "786efef5c4c30dc4f698fa8aa2924063",
".git/objects/be/57642434224c918d9a1b69977e245c307533e9": "5d600f73a48d29f3b853c9573022edff",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c9/2b4b45729c332f2bb77ba3b7387eb57d15728e": "66d7966db8c991a07ff272fd6e7960ac",
".git/objects/d0/8a4a3ace4efb170bde02b45435b904ab0cf104": "ce1d0e49a47ee143830d43292e3c3b12",
".git/objects/d5/bdb4f166103a3fcfdd779a5a8bdac52a04d5b0": "1a8fdf441e18a6d211e425e2c504d948",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/da/89f849794fabe4dce6e5c0b801bc11c8afdc9c": "8c9b4ff59a9b70444a85e6ed6715bf0d",
".git/objects/dd/49273f11a8e4900ff71038d859ce9e8358428e": "a48cc7946f4a5871006b7dfaca2304d4",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/de/d91d4a70ae515ff8598b0775500d3de91468f2": "28b711195fe689e33f3eed41c025aa86",
".git/objects/df/ea76a20e85104f1de3fe7fdfe98d8cf0cd45fe": "9cafd20dfe7f3e8348d68d13bb903735",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/816e299e253eb58d2186eabed920bcb78b03c1": "23f0c89355cdff209bb4b6e79373c022",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3b1dfcfd508d28ef5dd62f280c6da3d3c6c46e": "f81fcd17bad461f975c8afb2c0a16134",
".git/objects/f2/69c992099a8d236332d37421d6ab49a21156e7": "ab0a4010b4be786efe560fc4f96fd6ae",
".git/objects/f5/1d539e2696c6e57475bb9ed301b51fed401c46": "f912ffe995cc4562323ba608cf9e6716",
".git/objects/fa/bf1f098494658ed7be8e02e577516806f40753": "834dcaaa7292f34525bba4e3c35e6f7c",
".git/packed-refs": "a76632056929a0216b2ec7b27fc53ff1",
".git/refs/heads/main": "9b814c535cf020914e98a8ac37021d5b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9bfcaa417b603bd66ad3aa2a99f32c54",
".git/sourcetreeconfig.json": "5268bc21cdde240e05aa7b853cd9f7d2",
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
"index.html": "2fb955769acaea7f40fbc49da03b0eba",
"/": "8dbf9cf92b408633bb301ddd6829a239",
"main.dart.js": "d6e2aef9547505425ef86cc56c3d1477",
"manifest.json": "e033a420d02b615eb6f86754043c2049",
"version.json": "b96e1f597d0344e96e0de9b6ee15b77d",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/AssetManifest.json": "aee83f6c5816a46287f0359acf911271",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/images/coffee.png": "762d43a28d8088f0a294811f2e081a7a",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/images/coffee2.png": "7646ff392c92110c585cbed1beb9c1ef",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/images/mockup.png": "2ec9e0b08217f7a2383a961ce73c0e63",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/logo/logo.png": "2af7b2e72abedc2bce98944653429354",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/logo/logo.svg": "925b17733e3fc58fc1e60125e3c2fcab",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/logo/logo_icon.png": "aa04971f5a403dd24bcaf06f55b093c1",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/logo/logo_name.svg": "13525360ef71a507eb10ce4d4f408658",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/logo/logo_text.png": "0b78ae381bd4c66c0394fc37cea78284",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/slides/background-1.jpeg": "f8ed4d3704b14706eb036222b7ca4045",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/slides/background-2.jpeg": "2a495deff8fae15f2b30f535d1576ca1",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/slides/background-3.jpeg": "a1789d9a53f146cb6178e9db14b5e244",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/assets/slides/background.jpeg": "d9418faee4ffef09d5142d2281040011",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/NOTICES": "c03ba5f49806b6e1a32d343ce88b1203",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/index.html": "8dbf9cf92b408633bb301ddd6829a239",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/main.dart.js": "b285296c346f06274eeb87cea51913fd",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/manifest.json": "e033a420d02b615eb6f86754043c2049",
"%E6%96%B0%E8%B3%87%E6%96%99%E5%A4%BE/version.json": "b96e1f597d0344e96e0de9b6ee15b77d"
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
