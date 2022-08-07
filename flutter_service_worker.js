'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f441f449722d9a08339ae244318a1e73",
".git/config": "35db117047c6b8fef21b8e6d2e3d1919",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "97a57f6a50fdf3775820b00b412f1463",
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
".git/index": "5bd31db8791fb635d95f619ad0044b5b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3191422c172e86cb60dd9c35799cc899",
".git/logs/refs/heads/main": "3191422c172e86cb60dd9c35799cc899",
".git/logs/refs/remotes/origin/HEAD": "f1283685c9db01b70049b790dbb5800a",
".git/logs/refs/remotes/origin/main": "41fc4dda78178ad4f116161675821d25",
".git/objects/02/7cf7f6a048e0d7418ee9b6a13f60da0688584c": "92970713f49b94c8a83b5c286eb555db",
".git/objects/04/33ee37a9ee0ffdf254f8816d4d4c0c80c40f0c": "99c15c3c743eae67ddadd7d03cd57645",
".git/objects/04/ae2edaa65d4ba56719631ca51f53630b9088b3": "370b69dd3b79fc9857ff1520ed018fbd",
".git/objects/04/fd707e46f8d94da22d783f62c4b775c55f3fe2": "ad9ef2164b9aecb9326cf7356a850ba0",
".git/objects/06/22ae66e8bf97fca8f90a307522a8d642712a70": "9c51c44cba429e1343b60e5a2da03138",
".git/objects/06/c80fba71cec80a40709c5df790e021c2d2584c": "27cd2d2aaedf3aad3d48edd4b2fb9f44",
".git/objects/07/f42f017b971eeeba0499da24eac0f20877f9b3": "498ecc4e253711d5c1b2352c22d46281",
".git/objects/08/8e180e389c3deacd56dd5cd3d9cc148b0ce177": "2ceb7b51c4336e817b3910e485974d12",
".git/objects/0c/b1928bdde7bdb32bcf0c6aa23ecc5ead78ca23": "f59cd45feeab7e76a5b0c81f4ec0e0ec",
".git/objects/0d/1ba7b9a08a5b1595ba9d882717371a9bc3c481": "e3273a25f9894bca3807528dfaff6856",
".git/objects/14/1fea61c5fcb14ac3630c05e87cd41ff3320570": "ae67bed326bc14914622cb41559c0160",
".git/objects/14/3175c8f55a33361cb11a1bc0aba1079e064d2e": "d6bcda85198ee7f82d0b273dd742f707",
".git/objects/16/3014bc79df1804fd60f6db62d1194383c5c0f6": "8f28afc4f3f8a15bdd314b49bccea79e",
".git/objects/19/78fd6de097e2103223d4a4ce0b7a44d7330d47": "39e0150809efdfb6313172577953a52c",
".git/objects/21/18526a84c17ba80811dcc3cd09e6dc777b13ac": "b29c5b97f4ac4f5ddc43f80ca5bff9cf",
".git/objects/21/6bb151fab3e43a874164e12f7cd4aac0f614de": "640da31edaf86e6dca69cd8dc5d5489d",
".git/objects/22/e831d1ceec06c13c6747f0a30f12ad8940ecd9": "75c491fa221fbf7449feeb096abf5e7a",
".git/objects/24/759089617754dcfbf8fb48f97b481c420d0c85": "d4dad5ee91efc6e9754c034eed9e2e8f",
".git/objects/24/b125389b83c68fbc9a6f4303f74b7cdc621ad6": "f6638c271bb6ac34ed2112d91a074857",
".git/objects/27/80489724b45de5586e94479435b25cd048b05a": "efb40f5471440817e4e72a9f6d6cadf9",
".git/objects/27/e83560a9edc6f5fd137e307afff46d81b59747": "aacee5637946e9f61286265df5e8fd15",
".git/objects/28/8a9c83ffea4d06684b5df914c553b5da498624": "100027a78b963e87112c8ddb1e1835b7",
".git/objects/29/5f2c15c446bcb79875e0972bef3dc11dc01a76": "06d6b2dc4367db9b0a3e1fa6ccc45777",
".git/objects/2a/8e07afaf3bd393dd1959393c3cfb2c7b2a424e": "115bbd9db0ce8dd659673279a8eb24d4",
".git/objects/2d/92f1f89b8389fed67763210063556cbb4b2b5c": "4576e76cc09442648023ebc991b3a58c",
".git/objects/2d/b767925cbfa4eaf77a09f4dd6e6bdce03e4f1f": "33e75e433397f80f80edbe2751cfb7e9",
".git/objects/2f/56dd715149677a2fc99b6950ba25adc451daa0": "8ef9a363d8fcd48b8720364230a5fda6",
".git/objects/33/733092a53904394571adbd6cb6e865d32cdb8e": "755a3ac91ea156d2b494c7ca83a32fe1",
".git/objects/33/d3573d8ee899a28e2c2dd11123d8b6d456e82c": "b046821ef6087edeedd81cfaba57b454",
".git/objects/34/4587080da4a46e115a9966cb1a2110bf0d281c": "c6d57e1e9efeded300da0961dd721b43",
".git/objects/34/9eb55960d40ff325b4690fb54fc27d1485ea87": "62d07cc50b375231122ba2aace6cddf8",
".git/objects/36/2ad518256a1e2686c579f753e39e14e1d7d339": "f819c6a5a6ed7f65f189451d8db7589f",
".git/objects/39/802a0221cdf81859978504144642771a48f8cb": "20f34616cf125f6c53a37b867a9e1482",
".git/objects/3e/ce3bd6beb57fc4c6e413668521622c95698d55": "682df34058c4761d1d71dbacbb0cfed1",
".git/objects/41/389334f35aab4ba7b43d6201dc89ba66658356": "dcceea7c13cd93e5e55238dc781eba7e",
".git/objects/41/bacff09582045505ad0cf39eb38583e6681701": "60d827ffff40d0ddb19cca9714c9a490",
".git/objects/42/2b4520108cc6752bcd16744f1d8510d37e63ee": "877a687dccb34d6839536e648eca89e6",
".git/objects/44/ad114130f947091bce33d0c8d1b9d5af0ad776": "fb62c4bd5c8995f1b7b41f45172463a2",
".git/objects/44/d6deb5f2c149ca6b1412c325d37b82d7f3721a": "90f17b47ebca6ca36729bb28c0d14e7d",
".git/objects/46/a4c4ad438c4e850b13319c45e75664e40a0756": "51ef8d5d8b3b59890a58395c2ffda6a6",
".git/objects/4b/6794c74ae46c9afccf627ae9703c3b8c526daa": "54cc6020cf735b1af1624bb36fe0e133",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/980f4d00b6bdb1838a719d58e67d228ea6e69a": "a806a1cfb033e83fd6823fe50deab56b",
".git/objects/4c/396fb6faa0539d1ddcb9d0f51941dff7ad3d53": "0aa30e1a256ed0ab18b8b538ed03fcaf",
".git/objects/4f/f54d9bcb40d589103ee6613e76bbb818db69ee": "cc188af0a62d458221675235aa838946",
".git/objects/50/af5863aa7c4bf9e5c0b4ea00d0445b484fd5b7": "c1f7c5419d0890838c2a250123dc39d1",
".git/objects/50/bcc6864f7824ad7b842a20a9d9593c7ebf2258": "cfb490abe0f1b8b993efb4d2e3f4e2ad",
".git/objects/54/99932dc52037f3850c8ce99f2c75ad6436abe5": "cf04f6fef9a35fa03774775a6906005a",
".git/objects/55/8f7017c39a8e12c7dc3081d4edbb71e51f586a": "860032c5c3dffe55b38237362c7d194d",
".git/objects/59/4063e1fe3fea21464d4b90e0550ece36fb3289": "d8a4ecbb72fad446a6fb98244033527d",
".git/objects/5d/2a1e3be0d4de8cfc66e558ca1aca2034ce7295": "672301f5fddd10279aeb2774c2c97737",
".git/objects/61/7ec5fcc4f3dc12eba18f0873a9c7470be9af42": "9b55b3088e4a0f916b9e3293bf82eeb9",
".git/objects/61/93d5db80131f19ea79a430c2b4f4eacd8748eb": "9ce1436c634043351a4c104b25a88c4f",
".git/objects/61/bcd8a02e15d0fd6c4098b2a3e4396b0091613d": "79ef41e0af865fcd86b62082d25ad8b2",
".git/objects/63/5da4dfc2c57870277df2b22b52f2c94c9f88cd": "3e26e876ed3c94a9357add14864bc6c9",
".git/objects/64/027f4d6cfa252de02f7d56da3126dc37dfc81d": "2cc9ead1478e6c136fc6dd74d498d1ef",
".git/objects/64/2c64985ec7c7f676bb134f3e7d1ec204cb8ad8": "e54f5005cad8e8d6baf5f1ab0e0a0345",
".git/objects/64/6f7f60039fc1da48cbb85fc96583947b5442e2": "dddc512f269df8fa9dfb3c810bc54378",
".git/objects/64/80d3247c90578ed7c2c9d5b2632b3ab0df09ee": "9d6f122cc64427dc0300471556145c90",
".git/objects/64/aca0e91f147293e6737a6843a60f0b5c191f8e": "65e8daaa85350b4fd36e09eafca3e015",
".git/objects/68/d7bde59c73c4a6bf8ce7cea2f7f482a3586471": "b65eee53fa2898cb06eb030f5573c359",
".git/objects/69/ecf93a196522cac16dd1f9a5aae6b85e26b6f2": "08c77ae40f05041d60cb8dbe6fa872cc",
".git/objects/6a/a9a6cf4641f7f134d6b4edf1bcd7755dc90ead": "1e07841db938ad7fd9c2cbb248746ae4",
".git/objects/6b/5e150ff9165ac8820a92445f23b8edac9c41fb": "dc9bbe740a51d3824a0843b250cbbbd2",
".git/objects/6c/57ca32ae986834206e1edb6499469771c1f89e": "9a0a7d3636a15361749362d18f9970e6",
".git/objects/6e/df3399d2fdba11cfad51097b8314300e84c5c3": "0949786812285c43c8fc2963017b908c",
".git/objects/71/1e453c70c3aa72694331c3d43e7c8573d7596c": "4f218a76563e0d7b80c626a4a653c99d",
".git/objects/71/50ebd13c749012247a20f6812b9da5a56393ab": "7b7c53de42d946a328a245d8139414c6",
".git/objects/71/c18c25482665b122023c111555a713daf21135": "6b0fc24ca406550f9c81ab97bea573d3",
".git/objects/72/1b9619cf8d379b26ba5d3aa5d3bf37a2754919": "16d85a682bb72c426a75eb15e87a7407",
".git/objects/72/c71c3978a8d26a4f8756cd9699fe6d81f46b25": "eedd5eb19ea6e207ebd371dfd04dd3c4",
".git/objects/73/bebc4c707ceadee7abaf6b1c37612643713837": "b699605b3463b3d194e94595116a7d92",
".git/objects/75/2aac943aa3fa43cd38b6cfa683065b2b0f3202": "e3289c616cec48753627accafab11cfb",
".git/objects/76/b9f6be1df5186b815184ae929dab7f02e3c192": "06be47c01230268244545c7eb19db225",
".git/objects/79/02000fe7e90444844679780234e194773bc141": "8a60ed2b1a1d7c33a10a6a0f8a0e8c92",
".git/objects/79/c4ec678278ca8ab38a03c0f0f7d3e1d9f0ec7f": "c58b1e22302a0a2b41dd476060cfb574",
".git/objects/7b/7d7a9342d7bad9b8e5a0a1453c5144859eaa51": "2ed03cfb113f66896a354c64af1fb237",
".git/objects/7b/e1ab4c4afc65a7bdc746f409b72592b74bc6f4": "d9f6e7706db7f8e5ef3e4416b803aa8f",
".git/objects/81/954d16a46de6677a713dbe9159550d4d964930": "794274e918543cf7fa2bda6d80678eaf",
".git/objects/83/12e9d0bebd3d33856a0d9a56f567535481fd1d": "383be15ce5bb9122a81c0b1e9e83948e",
".git/objects/85/d57f5c10479820b9b64f57bbd8a2420d3800eb": "1e4ae76286e59b04e72459e0c9650974",
".git/objects/88/80452e9ba70c6493de66aa78b6c69d226146fd": "22662107c5b133256c9756cd0413e699",
".git/objects/89/00143d93ea2da27e27139f23f9d1d0520b5d8f": "23ab75fc746f64f25e8eb1ca55b78a6d",
".git/objects/89/35ce92f5a2b3e2c3a77dc442bf6876475892a0": "7264946dd48d979fc73103c44d67f410",
".git/objects/89/cd90f2256c938e2473358e9fc733f147f30775": "45f432f7e7ac7e62e4bd845cc8959841",
".git/objects/89/fee6b39368c4f99c5f4208163b59772f093fdf": "c74a21aa7b91a62f6816e21c57ce1b92",
".git/objects/8a/238208acfc8ed14e62b938f6419b59402a8852": "efd694c79e2ffbef3e03bf5d561fb90e",
".git/objects/8a/89e8f2df2f1589687d5e00076633f38b989f87": "4e123011d1eb1a2b6a183ccd97de1ac8",
".git/objects/8a/f8291304e9850fa8853b9b85015aaf70b06ef1": "71336fe117f84691ef72e2f9b99c7b5d",
".git/objects/8c/c4b2c5b10386fe7f718db3aa782d5fd9ab340f": "3d285cb2d87a1694dec4d7dbdbe2c35d",
".git/objects/8c/f7f60c322afd55a32b6fa739856b769119e037": "e809f114906a457fc933d083ce78a439",
".git/objects/8d/1b2aca933378f955dbe3188a0be0e9e9420e34": "41ed5b465e25542b05d0bf30dae26482",
".git/objects/8e/0d3801407af72646b20b13d5339552cebc3376": "b16f20f34697bb4e77d8e1811fa67edb",
".git/objects/8e/986f6e5d5a760033e9362bd7aaf7bc601191c4": "e809e3c673bfae2b4c2be124f950b2f6",
".git/objects/90/7bb0ae3d377062e92066fa799cdbe73b535a0a": "b0a068c09026bb9401c433575144f610",
".git/objects/91/b85bae47f8e971615eea8edf0eabaf2ac30fec": "f3156a2aa4e771f35c5af473969ed749",
".git/objects/91/d16e1ab93054cac7d5c1f28663ec3d8137f21d": "5aede3dd1775b425c27bb32e1f1daeb0",
".git/objects/92/34b88daae597b486086c600ae1f423ed1d0ca1": "dd22aabd9e7e51ca5ff390c69f427071",
".git/objects/93/f099ef042f246489df086c8269c973506684b4": "1b5a9adf304fc7aae6144532868c358f",
".git/objects/95/679eb14c0fef7fee8f3d101fb4d93b52b9557c": "9d88a6ac4af773b1e78db75891113697",
".git/objects/96/033e9f870c9ac6d8dc72200a222ff08838ebfe": "aaac879eb741a4d98a37415b5f94ec18",
".git/objects/96/a6ccddaec020e7f83c647e42be87d7e5abfe11": "084bb42d0336207b5c4f20d646f765a3",
".git/objects/98/4e0c5cea597b5aaed116b2bcd8faeb1fb7c377": "a829cf4f06d570fe0f353f7302e2e0b8",
".git/objects/98/7e21ae1b483014afac1f2da88e869b2d87eeef": "c2c0761418edb84c870b631865a26963",
".git/objects/98/f219b766903d990640163ee0edf08fdf4caedf": "1574fb7e9a7a158daf213214577d6d07",
".git/objects/9a/99868ec9b0c643afc0996d7dc872b1405a93ac": "20100923ac13f7bd4cfc61e1b1323051",
".git/objects/9d/1fdc3ddce63f10543a7fb895d41bae64426e5f": "2a11d03aab2da1f75d2ad1fc245502af",
".git/objects/9d/7a2b349629690fbb419cce6d8851526dd99653": "1b1965f31df2126532a5d56787deabd0",
".git/objects/9d/89d4828b6f969ea3ddcefdbaf29911192c5ec8": "0521cc60551cb108041a6d1af79619ec",
".git/objects/9f/f15de72032098d29ac9d4b86abcdec5edf29d9": "0885d819ce88c76420dca85a42f3e8be",
".git/objects/a3/e3c1f959d1bd933b1e1c272fadfc7d410bb0c1": "ca34b8cd6184db32479e183689f229ed",
".git/objects/a9/0f020d7a983c3bec2874ab764a3e164acec056": "071a589c1cc576ca254bcd6555e3a0c7",
".git/objects/af/c6c2c8cb95d25c023d1b67945ec33df6ec109b": "97b7e48a885b7a70a52729b5f665017d",
".git/objects/b0/3c14bbef1a3ede32abcd3616f56cc56698eac8": "5d6974d437e9ee4f06aca1dcb7bdc36d",
".git/objects/b1/a512abfdbb8caa819ad4192753307dfadd252a": "64b9437f35b885272027cc9f6351130e",
".git/objects/b1/d4da86098b378c7d04d76ccbd521294a228466": "8525586a4426366fed8291bc35bab2c6",
".git/objects/b2/b0b03dc91921427e4fe7500b834cfe3fad04d7": "7d834539804c7ace610f9c228c89c80d",
".git/objects/b3/3a1cb0265a108580cdca3d4cc508d9ac47b769": "cde687243f2a8a546aa7b6fb11665415",
".git/objects/b4/052fb0b25098029555f1a8c16db16ba26c9277": "362f239d95a379433fd3dba411ed22f3",
".git/objects/b8/42915f353edea01fb40c619c45dcd67614abcf": "4a7b5dd40290d39254b641847f0dae44",
".git/objects/b9/32169c8bb0bc2398f2aa1309508e0a5d32b849": "1022bb36e07c80dde98f733f0b45ffbd",
".git/objects/bb/47dccc4b3ec607c7a29e0abf83b4a6e900c8b0": "791d258b930f84c80bce21f4c235c559",
".git/objects/bb/650206119b2760400bb921d8ae994f9eab925a": "6f5e1465c01099ef43bdd348d761bdbd",
".git/objects/c3/f0e450ae263f4e28892747a4717c352473d25c": "a07f58ead85ccdbec3e1b68bc33a0e25",
".git/objects/c7/0799b5d5ea43f222022cd18bbf006f90bee420": "7caa54a11415ef0e3310d9e3e9d10bd1",
".git/objects/c7/dd89e1b17463642c306f979c28ab6d89f0bac2": "96d8689453048171358ac6cc160d863e",
".git/objects/c8/67cdb6b7fa5a212f3cc206679badebfedee0e6": "f2f8a0f6f7970a3654c10d90c4d1f7a7",
".git/objects/c8/769ae383f3bd73176b0e0642e534fcf09e8a8c": "08e0da48beb42f5f45aea959dc8eea13",
".git/objects/c8/cd5cf589a481ae91578fcd7fc2359afc5da2a8": "ccd923768d1c3874fb7f870d727e7dfa",
".git/objects/ca/6c0b3d5dd02f379c520a343c4ff239eb889e7c": "521f88cf14111408bc579b819ca65127",
".git/objects/cc/80035d1369dc4e0e00b90e53262c7f81394066": "9eca89a17a6f3d5ea28d3236b4397ca1",
".git/objects/cd/26f5521a1bc582e8bdc68e23e28bb349c81b1c": "621426f6bae808f0db4511604b465809",
".git/objects/d0/e0122189eb9e33be5142a053b51e34689ed84a": "0fe06ed11d90ca1d3fa842519dd5f30b",
".git/objects/d1/4e36dfae900f0ae5fd36dc1839692ffd8e38ef": "ae0858dc931b0c7608baf96dbd451a86",
".git/objects/d3/3e6ca0044a0b390e6b249948bc9ea98025651c": "1ada2bd6b380267dd0dbece741d6af88",
".git/objects/d6/0cf5e9a8db4e80f433ed1b5c319d1d2613cd92": "ce2feb5005036a620356de823806c95a",
".git/objects/d6/3057077f13755766522b33accfbd97de1e7da4": "bcf9781773a01e325ea158098149525e",
".git/objects/d6/f30da3a1912d4457ff84d114da9bbe49eab70b": "9984febc9ea911f4d7e8f3f9ee32effc",
".git/objects/d9/15b8c140698356de26220a82e6ff5f22354b60": "2e6f8622a7cb1e45a6302a4a877a6158",
".git/objects/da/1a1b3e8434618200b967963ad32e97d2165552": "8d627e7f403eba3d5df21604370cd4b2",
".git/objects/db/c0960a67e264ac016392997a019760c6be5710": "2809f813e6071af32f57b0e1b6fc7237",
".git/objects/dc/30519058371d8ac412333b8070b0ef69080a9f": "d0ec9ed14288db79f4e7892299525b4e",
".git/objects/dd/643e81804e1da368360ca790c380a05dcfe55f": "61fd16ca1c88011d74d73a3092a9bef0",
".git/objects/dd/da1d4c7d7d1e74b893efa391d2365ecb25bc0e": "18ce49a6b2fc5367c9fa6a8b48c36dc7",
".git/objects/df/3f472b6011c5afede5f069c1739221be1ae301": "76ce9a4f746ee4908d36994131f4a0ef",
".git/objects/df/916beb822c769b2092a2dfd2d3793a570063db": "33e6c580d1955acdbd2739c27000c5cf",
".git/objects/e2/faec964318069917cd73ae5b7ab42a03cfb53e": "061ccc5938b35a87fd0796fd19ff48b4",
".git/objects/e4/42bcea5ee8e8ef53ee130c65b5170064b244ac": "721c68e197600b7866ff2224e761821e",
".git/objects/e4/6da143e563e29e021c9d5adb649ad9adbfbb3f": "5a6032379bc5fd03375790212c4f5c76",
".git/objects/e6/17bd50e45aace08feedebef4f37e50de427d56": "2746b893211f3e4e83840c9b3bc3cd91",
".git/objects/e7/14b54120c75465e64d54d16a5607d3035eb285": "e4e209ab121362171d16941260ebe837",
".git/objects/eb/c6762411e3079611f64cbbf3c82f4f56971b6a": "b422f6ff3b912c776b776d7f689ff6c2",
".git/objects/ec/41c2403703cf14e8a63fdef5935c122118198c": "b08f61214c7eb42a0d42bc926fa03f93",
".git/objects/f3/e52366a0f37065089a5267c1becae80747a9c4": "2f83e8f91c01eb12daa071c54710ba14",
".git/objects/f4/7ba3ae25547324734212d0991aaa235db46af4": "c547e96cdc229c52954714a7639f864e",
".git/objects/f5/47489f5c78bc7cb030b938b11ea6c0c558b13a": "4a06170e4a040bf01b3031c150af3b3f",
".git/objects/f9/2f27b8a04d76adf239c0bdb37d1371072cec4e": "1b3cd16a70d46ab5713f9dfc7f96ebd5",
".git/objects/fa/fe8986c9788b607fb602255128cdcba68cf605": "fcba01f478067fe5d43a9f386f75a659",
".git/objects/fd/682be0e7b7319518739a57a3a8e67cfa9ddb82": "0b695effbaedf68b596d3d3f5ac2e15e",
".git/objects/fd/f395b4c36b7857b765824af04da2b373c47f26": "f289f7ac7a1af9b36d8bded142c6a075",
".git/objects/fe/c0ce2b611fe8e2ae16d9e0bbe293189bf4fd52": "b34447d13e4b3d57ae8c8583c7dceeeb",
".git/objects/pack/pack-fd1135ae4d79b0b474fc52bf6d246e83b4eaf01a.idx": "c9f501468bea23638daa06b6a6ca8ae8",
".git/objects/pack/pack-fd1135ae4d79b0b474fc52bf6d246e83b4eaf01a.pack": "4f117b3e2349fbd2a9083022fdf4176b",
".git/ORIG_HEAD": "0b6166dfc7a6fcd5404febafe1f8e645",
".git/packed-refs": "5593867ceb1c4314d4b4492fa1bd8715",
".git/refs/heads/main": "38c049947698a70029096e9d90babfff",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "38c049947698a70029096e9d90babfff",
".git/sourcetreeconfig.json": "b211ee63dc0adde9ac9b6ca0dae6e0e1",
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
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7a87bd57d635f79599ca262ba5f1de8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b4b87a4c40aace6f151b37dfe49375ad",
"/": "b4b87a4c40aace6f151b37dfe49375ad",
"main.dart.js": "ee6c54a8f6b92db711ab2fad18873014",
"manifest.json": "e033a420d02b615eb6f86754043c2049",
"version.json": "b96e1f597d0344e96e0de9b6ee15b77d"
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
