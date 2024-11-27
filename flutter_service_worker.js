'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "ab7153f43e879e34ac6832440939f4bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1f846a81b22716637266ac564abb568d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "156abf4e0085c28815f72b5b540293c7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75bac439bd749ea03d330a14e2e68be0",
".git/logs/refs/heads/main": "75bac439bd749ea03d330a14e2e68be0",
".git/logs/refs/remotes/origin/HEAD": "99832279b21c5b4b621d85a9fa2a9acb",
".git/logs/refs/remotes/origin/main": "2a77c097d6a931c5be94dc01f3c06caf",
".git/objects/01/1930abbade3ea70287ab8c5ecef7d39ef21a13": "2f46bebfc82ebd3d6bf09296e3731dc0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/06/9d1964ea5b36391968b41dea27e5fcd8d4e175": "8dcd9aa220a50d754abac15832eb06ab",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/09/f677d302cfc20bc3d94715c4d4c22b0a5128c1": "d02685f2a872d637a684c8b6906d8ce0",
".git/objects/0a/382b4e9d29726ee01a8657104070b8ca667314": "a15040b4ca236ffc2d8914b651917cae",
".git/objects/0b/a11871f360f77baf4066bebe60871c90c0116d": "b365f38c58889ebd9b3a5da8c4682550",
".git/objects/0c/538c99127d88f878287b120a9466f590177c1f": "25249f09cdb0f44c30beba93d58dea5a",
".git/objects/10/4460a871093998c5ee3dadaa9188a69a69c2d1": "d78229fb5ece52d9f1db02e9b67f1d9b",
".git/objects/15/148f990ef9f7db2e4338088d33c37c3d04a5ce": "1597fe2ce9e3d79debd255e4f2a94e11",
".git/objects/15/a15b218a29e09c9190992732698d646e4d659a": "5466b764e3628741545b8bd1e1b16bbc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/21/166c539473f8e097debc38ab0a2eddba16272f": "759e2f35ebaeedaeb48928fc7d0a24d4",
".git/objects/21/3b1780e21769c34707db06fb6d43e6e27148dd": "6dce36e193a788d61a97e3b43dce5abe",
".git/objects/22/3fd8f7033c81b45d092ca308c835ecb26f13df": "79c70d1fc030cbf4d698669fda90eba7",
".git/objects/24/2f4850798a8a2160dbbd4b5a877ed48a616498": "890740bd31ed27fc9bfea9706a7a0f78",
".git/objects/24/643cc37449b4bde54411a80b8ed61258225e34": "be18fb2933244bf8a8bd2190a6447be0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/28/a804d8932aba40f168fd757a74cb718a955a1a": "b6562769232ad5ab1b1ccdd06db11163",
".git/objects/2d/942f471bd587f4eddea7820712311d4d811179": "205c5f4e1b3521e858a163112ab30506",
".git/objects/2f/c1bd1db83efde255bded4daa15bcd6c1a5687b": "3cbd74710e610f214b6c0b8e7e619784",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/3d/4fd8615dcc8e48d5c50ec683c1678eb94d3b9f": "681665d808de9ed4ba523a2e738b02e5",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f4bd21272233e9cbbf4112d6f064a4ae",
".git/objects/41/f24b36055fe388c6cce96b278a9cace7df4a8b": "5f464aa72e7b13f7b8400af71346f141",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/46/031c2ef17fe083519992636e8fd91e6278b2e6": "d923c111a3eda675edbb605b08dc6f97",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "c106115abb3762bc1377da71b794b83f",
".git/objects/48/b17fe9136f942f2989c4cbcbf469c31323bf00": "7c9552f2b8f5f9733109775748332042",
".git/objects/49/8eea334ad13d9f4b9d8a34ea88b361be462ece": "1dae63fa9acc3808d2520f36fad92517",
".git/objects/49/ef3ffe9bb5420aa52155196e7f00c033b6260f": "675a165924f8be0cb593525f6773ecc6",
".git/objects/4a/9f0ab4cdd8833c9865f1ce597fee4ecbca6fd5": "36b9835b474b6c73df619761ff2b302b",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "ec496e7997b0d0d4df23c34f41f10e3c",
".git/objects/53/39099d112395a23624d6b8a1d01167c1cfa770": "dc1c48b9b230b05f66f3f3bbf5813f47",
".git/objects/58/3c7d0e3996f1420c4f5ee52c7545f58234a891": "971b96ee86b93e9198e3a17e60a0b926",
".git/objects/58/f5f583f2144fc5551fc47d413f543ad444c63a": "b27bfc3742d0cd839bb8b382ec53131b",
".git/objects/5f/89fe3d656c4b40692f42f2479d632bf0595c70": "9f04a84154dbd5d29d941c1edffc7d8f",
".git/objects/5f/ef49e3e5ad4cb36476b089a30f31427c9490a7": "4ab990153e3fb1e45110bee342a685b9",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/6a/413c7104438b70a12c71d8941f979899fc523d": "9915182934eb77da4115b32d33c1d979",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/72/38645878b7c7d0c06b9caefc4436392e7a889d": "41274713f9b7b7d53c55c3e85c016215",
".git/objects/73/66377a30a1ca31cf59c858ec88c6f2241ca2db": "817bc16c50b8ecfb5cb22463bc9b7099",
".git/objects/79/8c15eef9f48a073e4541352b7a433149836a7f": "b0265ae0e4fe6d00a52b3ea6b265b97a",
".git/objects/7a/d013835c150aa6ea9dac90d28d064784c09aee": "59a38b1accc678a16f1089b016f58887",
".git/objects/7b/e1399a46b310ebd0e38764bb49eb7208dc2cd7": "3fbde1b80d5600d4527381a79d8110a2",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "6776f69ddfeabc2acb22a840c766888b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/86/62f0bd5862dcf5c6df49042b3d18ee55ae1120": "28e8f661b8b1a976de93e15efc6e9d69",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8a/b5952365a8996376365dcd1f75f56a0dd18008": "6380338371865ada01a068c8dd8b1b20",
".git/objects/8c/750841c7ed6b9cb0f471cb8a209c596bd540ef": "c61ea2853384cf49bfd6ba4387d09706",
".git/objects/8d/17b6284df213dc5a259efbfa14a583d0fd66c7": "b2fc483710be41453038407994741aa7",
".git/objects/8d/8ba541018cb9e7159fcc6ce227557c6954661d": "df87fc49e4785dc0354dcf9d4f71a40d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/92/0db92baa1bad02a590aa24b6e2587854bbdcd2": "0ac395e6836829e33928fd4f1ed3e114",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "cf710852113d9774166335dadf20ec5c",
".git/objects/95/ddb9a2a51ff54f9a30cac64d268189989c3df7": "2c9263e30c7ea34d9a79994ed6df6a81",
".git/objects/97/7801a6f0d0424731f650d91d0c4a2161de4d6d": "17bdfc541e545f1ae31246526f9049b1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/99/bc3a89c1ceecb8aa53ed2e5ef6c44abf80494c": "1512a3e77669c1ae42322bb1c8f1e8f8",
".git/objects/9f/a417c06d50cbf89f189dd333232a6fb5ba103c": "96f4e80e0a8cd75e9c6996f7910d3ddb",
".git/objects/a7/4177720bc77c1c2e3704952dbdeb0f86694bfd": "91403295875cf03d772a6863d4b6dc3e",
".git/objects/a7/edaa21c7bbcf218a9a513c451235ce3a9720d6": "48dddcd44655770d0073c1bcb4154ff5",
".git/objects/a8/c54efcb03ebc648edc8d2a2e40d4885c0dcbd2": "f2b01f3a4609cd2c997fcb7c92112280",
".git/objects/a9/dddcd429a5eb1b65c762f506c1d5e00e5f7268": "da186fd744e74e9900795d92d97efe21",
".git/objects/ab/0b0a490fc3c20d20fb7cac1b9a2873ca775392": "7e22c1d2ab7997b99696c22c124264be",
".git/objects/ac/eaceed01758158fbae5d32eb754707fdb3a9f5": "504eb3ed5ab6135002b31cd7d4817d48",
".git/objects/ae/0bd3974dfbedb8359ba270869328178fe61b93": "888bc36d65787fa3ef394e65ab44fbed",
".git/objects/ae/ed48cb8aa04c93dbc6a2ec990fcdfc0827d9a6": "de69a63fd119e7adacaf71cdf155b171",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b3/1f720eb971f4220021400b96362c020b2342ec": "e02f5f8cffd6b2888e4a9201b2bd01cc",
".git/objects/b3/9c5995d87a67d41790282553629d41e5032466": "d8455f65ba4ad5218ff386ffdb376934",
".git/objects/b5/a2e78a9788e0da6ce8c28a059aa00ada2e34e6": "35382eaf2354888241786c2875d152a1",
".git/objects/b5/a441127a26c46c9e9824f2e30e5ab48fa18547": "d720262480400c99c740cba1b57175f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/ab708d1deff33edc868f351e207d12f6114714": "a846df71afb827d99097cd86d05e1929",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/c0/9864b0f5ecfefdea3f04608f39cb646ff3fdef": "41cbc0e2a43d0d9dacc30f3cfe957787",
".git/objects/c3/7ff8bd8a806bbbedb1850551b419f34c0dcac2": "b15a730f27eb2f442b841e7de92389bc",
".git/objects/c4/1bd0b537bb887654a8146ed64285a4e5721cfe": "8439ad5ac03411688ccc4ae9a575c954",
".git/objects/c7/721f6f6474705871ae0d4c3f633d1db8e045fd": "5999c03b7577be7ff6f184eff202391a",
".git/objects/ca/5beae4f827c57393b0743bf8dc493956973d66": "066a367632145ba448fe7423a15c80ec",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/cc/9112b25b09e5e7b444bd8ec35138c226e64a44": "4b9e96130310cc0b4d2c492f242cbc05",
".git/objects/cc/b73f7041ce79140222aeab540438db2e3c6fe3": "95834ac7d27ab74483848f7b95faaff7",
".git/objects/cd/3aeabf12b71af1edb81afa28b928b99beb4a4a": "19e6f58591b5df750a7fca81bfcee0a3",
".git/objects/cf/7ac63052b4547caab60b1c72b08adf27734eee": "08661a1e86b05e08bbe4e78f6d280348",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6cf3aab7645fb18478693de335133497",
".git/objects/d6/8b9ed0cb9609e3e6bbf71f0bb221d88af2b5e9": "25c45b3485ea086bef86f8ac1aa63c3e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d9/86ec13b0541b484304a1e6abb175d11694f9c8": "eee1f5511001a60306caebb07492c0d9",
".git/objects/da/f348852e88e43c248deef59cbb9be3b8d888a3": "522d8f7cab052ad5b70f2dd659ed2147",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/e0/47769f38caa5de4318136c0952bdd91c7d4fc9": "8559140b67536e55a688c42304b17971",
".git/objects/e3/171a0fdc5027d1d6c74abcd70289fa598fc384": "25c75a0f1181acc90249ea8aa0e42271",
".git/objects/e6/66f211041548917995dce4c77ed437da64b07e": "e1a26a229953de4852dca704231c2af3",
".git/objects/e9/8dffd1d6d27f5a1a1660cfcb0f9fd2910a38b9": "baa4f99a296eb71482bc608b86e05e0c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/0ecfe7c09754d42c35e9230ac63af801b615f9": "91c0949cedaf817fb567633c1eef7ade",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/8f3e991b21a2887d0569200fed52ff616ad6a5": "c3a07ac1ae3141e2dcdd3aa7a7dfad08",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "341dff10df6725d444832c934b9f27b9",
".git/objects/f6/2a6e2a2e4631176286439c5e478287d7c78fef": "6d4aef250425c80236cd36fa97d063d0",
".git/objects/fc/ce914bb5267f0c713a710f4265d267e01f4a20": "8f7a596f59f0456844d530ed17a7145c",
".git/objects/ff/7a1febecceb4fab1a1c05e21d215537c0bc8e5": "97a893b4ff550db395e0054d1e94fea7",
".git/ORIG_HEAD": "ec338ea81c5d3657eba7587a3ae7a483",
".git/refs/heads/main": "28fd7050dd0e6ad18246c0430c9e9e73",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "28fd7050dd0e6ad18246c0430c9e9e73",
".idea/encodings.xml": "2b73a41f305a1d00fed308299f057f8a",
".idea/misc.xml": "fe04a1fa1b2574a989fe20786811310f",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "52309cb9c39acd18405af3f5b894551e",
".idea/workspace.xml": "1f0315ba858ad09873c238d0d8a426c4",
"assets/AssetManifest.bin": "396a44f241cfd2ea7e8a1b6ba3f46579",
"assets/AssetManifest.bin.json": "58673fdb73ffac71704046f72042a72b",
"assets/AssetManifest.json": "a5850be6be571accf0b10e631044b082",
"assets/assets/zp-logo-foreground.png": "e1bf4aa3e514e4f1e658b41531b8a15d",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "1d6fa971a9431b630b417bb3cd7996a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e2ac0513a6c34e43cd6a0bbfb7a23397",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "676bc9505923a192ab959c12f4347978",
"icons/Icons.png": "e1bf4aa3e514e4f1e658b41531b8a15d",
"index.html": "7576cdee74b72fcea961268c5bb16105",
"/": "7576cdee74b72fcea961268c5bb16105",
"main.dart.js": "85d94bce56189b95b326e72d812b51fe",
"manifest.json": "7ab48415175db11741a6230f1ab4dad7",
"version.json": "b33f7ffa09f6de4a0c9d17f57b33ae6d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
