/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ea6d34a2e6e56d696ea10a7adbbb2d96"
  },
  {
    "url": "about/index.html",
    "revision": "34803345e0813119c0cae06c4bfc608f"
  },
  {
    "url": "assets/css/0.styles.54ce2a26.css",
    "revision": "fade8c8e0f803827059865c14c55e3bc"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.32674175.js",
    "revision": "82fb23b2e707451d5adad071ff07e79c"
  },
  {
    "url": "assets/js/10.dc78a872.js",
    "revision": "68f11b22e20c505bfd4d65d3a9e4cf82"
  },
  {
    "url": "assets/js/11.bfab7f66.js",
    "revision": "9940fa42a2baf376d97c5412e65e7ac0"
  },
  {
    "url": "assets/js/12.89e84db0.js",
    "revision": "90911f2f79669a21c86aa9b2a5b89544"
  },
  {
    "url": "assets/js/13.f105bc64.js",
    "revision": "04cb72c4e33a1fe0dee008084a1b69c6"
  },
  {
    "url": "assets/js/14.426c7fc2.js",
    "revision": "e67752a38a12d2e033d2dc14972e101d"
  },
  {
    "url": "assets/js/15.f7455dfb.js",
    "revision": "ee726ad7954a929b83304137abc80254"
  },
  {
    "url": "assets/js/16.eea56816.js",
    "revision": "0fe397711c4f316257d760f068b6ed3e"
  },
  {
    "url": "assets/js/17.dae57d8a.js",
    "revision": "0f1f94dd10e1d08c63063c196a10fbdd"
  },
  {
    "url": "assets/js/18.6470e0d8.js",
    "revision": "07d83b6811e992feda5ac06d35bcbb76"
  },
  {
    "url": "assets/js/19.09a56172.js",
    "revision": "13cf9bea90e28e2246226c5d47b99b93"
  },
  {
    "url": "assets/js/20.b9541b75.js",
    "revision": "4d9885fdbba177fd46213a6b9c4af158"
  },
  {
    "url": "assets/js/21.60d71c60.js",
    "revision": "779372f307c21d3da19c98b4e60772a9"
  },
  {
    "url": "assets/js/22.9d49f51b.js",
    "revision": "41edbba2352a91c5e9e5011faaef23bd"
  },
  {
    "url": "assets/js/23.b9bd9d19.js",
    "revision": "57b8f1856c2eef1a2066e9b956349d3f"
  },
  {
    "url": "assets/js/24.04122cc5.js",
    "revision": "42c8dc311d2b2f3bc7e765ef45c4217f"
  },
  {
    "url": "assets/js/25.8a7b8f78.js",
    "revision": "b2bd05058b08b4894876800ef4b203d3"
  },
  {
    "url": "assets/js/26.acbc423d.js",
    "revision": "5e812beb322dd0866021ff0e4a2f0d8c"
  },
  {
    "url": "assets/js/27.1b5becb5.js",
    "revision": "c6d3baf1633e4e7e21e3fac4c1086f8e"
  },
  {
    "url": "assets/js/28.c7678958.js",
    "revision": "e744eac48fc305a934ea4f5fb01f400b"
  },
  {
    "url": "assets/js/29.be3120c2.js",
    "revision": "365e73c770bf8f48ca8dd014add20fe7"
  },
  {
    "url": "assets/js/3.46854e42.js",
    "revision": "37e7cd6f202491dfd13f1c5fd7ab22e0"
  },
  {
    "url": "assets/js/30.9d80882d.js",
    "revision": "fcc406ab05b8f327e66df1f6bd0a06d2"
  },
  {
    "url": "assets/js/31.83afe56a.js",
    "revision": "ddc4be42a2f286959fbb05657faa22be"
  },
  {
    "url": "assets/js/32.159840dc.js",
    "revision": "a8707bcf1afe941eb1f816e7b8f1cff9"
  },
  {
    "url": "assets/js/33.b9f2b1a3.js",
    "revision": "e9750509203f7dbabf030b9b958f2e7e"
  },
  {
    "url": "assets/js/34.8ef4bd60.js",
    "revision": "98d6c250b7bbe8f1aff5f20e6d5a007e"
  },
  {
    "url": "assets/js/35.969b23ad.js",
    "revision": "774fee8794893c7d50b86ee24d1f6863"
  },
  {
    "url": "assets/js/36.7de048ef.js",
    "revision": "b863c2fb034e24317a628387db845950"
  },
  {
    "url": "assets/js/37.8f0f6c45.js",
    "revision": "dce80af214560563794b6b1ec1cdb2fe"
  },
  {
    "url": "assets/js/38.4c37b853.js",
    "revision": "8f7117f6501ec1d736e8538bed694482"
  },
  {
    "url": "assets/js/39.35753478.js",
    "revision": "a9930b1ab56021c293aee343fc6b4227"
  },
  {
    "url": "assets/js/4.549b3535.js",
    "revision": "701fecc548ca6c56e8cc32ace675a642"
  },
  {
    "url": "assets/js/40.0a0480f0.js",
    "revision": "07347f1b0c0a87d9de614c2bc27f776b"
  },
  {
    "url": "assets/js/41.789cbf03.js",
    "revision": "f88f4f03b1b6f75f149dde8847ab09ff"
  },
  {
    "url": "assets/js/42.a717aa13.js",
    "revision": "1c5505e8a3db6403f33463be03a42fa4"
  },
  {
    "url": "assets/js/43.a25f05e3.js",
    "revision": "1bd22b02aed247bcf0acf08ad540177f"
  },
  {
    "url": "assets/js/44.17f0548d.js",
    "revision": "38744ab35a8b756286652a063ff17164"
  },
  {
    "url": "assets/js/45.36ae5491.js",
    "revision": "9ff2fcbab389d1808a53d40ea0f81b29"
  },
  {
    "url": "assets/js/46.d1391ba5.js",
    "revision": "99de02fca2ed52337c52dc4c2faa37db"
  },
  {
    "url": "assets/js/47.52413ef1.js",
    "revision": "b74fe85ee94a4cf0177f91f49b9bdcb6"
  },
  {
    "url": "assets/js/48.f07663e1.js",
    "revision": "2576b96d6d51b8b591a49738b5bd497d"
  },
  {
    "url": "assets/js/49.838cdda8.js",
    "revision": "a2fc9812cb0a749ccc328586b0b20cf9"
  },
  {
    "url": "assets/js/5.dff40954.js",
    "revision": "a95175e871bfe99d1885274275631457"
  },
  {
    "url": "assets/js/6.2da1c4b4.js",
    "revision": "2196ee79f0d3ca28aa320e4747ff5cf4"
  },
  {
    "url": "assets/js/7.0d026352.js",
    "revision": "63a69b78b0e02fc0d25f07b1ef92b592"
  },
  {
    "url": "assets/js/8.b073709a.js",
    "revision": "94161411eb69492b7462f6eb5cd4ae74"
  },
  {
    "url": "assets/js/9.601bab32.js",
    "revision": "f8a62a73bdd7dba00301971e1764f038"
  },
  {
    "url": "assets/js/app.5ccbfd06.js",
    "revision": "7c6c12678b18b1192da37d74a2b4231b"
  },
  {
    "url": "categories/index.html",
    "revision": "da7bdb148f26d6d2cccb188638fe041c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "8f8604d229b0e51c5db3e2739beaf70a"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "c6c7ddb1c0d6c52cd53ffaee295d4a56"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "296d085eb7ab9a2179f8c8834249339e"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "4789d65fb374b6e9f785a6696ab7fd7c"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "48bf2e7c925701285363a44c1aa65a7f"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "8bf3ebc41042355951f04f0ae24d251b"
  },
  {
    "url": "index.html",
    "revision": "7f951f639fd1d741e98d5a4e4e49a108"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "a8374e17ffd8baa5c42996c8c9442db7"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "01760fbca58994d37cb72782b27eb1d2"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "8adb8814ec812beecbb641174a07c20a"
  },
  {
    "url": "note/index.html",
    "revision": "9c3a2af8218fe0bca2c289d613f25ec5"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "3b8a9551a145bcc0e1a9a868eda5e578"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "8bcea2b27ff19522d426ab05cc1e3ce7"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "ae05abfa34c26a1da272babf1d979311"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "c8e228f2e52a6d2e128237f6bd3d967c"
  },
  {
    "url": "tag/C/index.html",
    "revision": "ff584f83142b6128c57aa6821a114863"
  },
  {
    "url": "tag/index.html",
    "revision": "0d1ea18f99acc5b79b78a6d0749f37bf"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "9a99be476f1d4c7352b8807eac8c5256"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "20287753b477a0ff5f20ff4eca7912f6"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "f14ef6e1787c7250f27a4f712ae428c6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ab131789f2ba587d1e43528955f427df"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "b49cf716ba9e4a9e43ed2ef46cc4d3ff"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "e94386e6824cd2899afd885151148669"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "a8df9100fa61b0113357034062e8d732"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "699c8ed7dd45536b41860490a790336a"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "8531815d0f5a7c88a7318ab87a0cb7bb"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "bdb1341ce0df233597cd4a89ce071658"
  },
  {
    "url": "timeline/index.html",
    "revision": "63d12b30806255b45c0f1dc7aea16169"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "239f6db61fe35ff4d4f7ff2fa9cb7e76"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "e67ba353119518145c85ef45ed6d46df"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "b76bf5176d0e849621c527266ab4291f"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "0793c1c88f059f3eea1e3ae916c125d7"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "0d54bfd1996b6990d0e409d81eb1983e"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "1f03446d8a3b4762f85fc547e9b27353"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "54fa9d2a98ac65309a09fed28381ef11"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "bb40cb8cb411bd3b8a97657ea452aa3b"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "2854311f3558835d8e3282ab3a3cc541"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "7bd5578ae4baafaa7fa0a70e2b7db0a2"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "0e65564303895ee79e5e2cde07c26dc7"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "a145c0e1df6b2c1599cee5fe0739a2b9"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "90e92957729be09c61ef0c44cbfd9edf"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "597676c74d5269898f0eb9ba3e822c28"
  },
  {
    "url": "views/xi-tong/2024/nginx01.html",
    "revision": "f2716f98de9d36c81bb53f9a69aec1e8"
  },
  {
    "url": "views/xi-tong/2024/nginx02.html",
    "revision": "8c6564c937323763c2d79d5194c70df5"
  },
  {
    "url": "views/xi-tong/2024/nginx03.html",
    "revision": "7231c979221368b280583c64d1fe7780"
  },
  {
    "url": "views/xi-tong/2024/nginx04.html",
    "revision": "719d0fcac27d60c318a9fce72e179a9f"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "55cf013a90dc7468e1c4f08cf09f6999"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "27425d8fc26dc643ce26844f1ccd2c88"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "7940a12c0cd118672cfec735cfe1f4ad"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "6fbfb4da31529ec1e732ec10df4ec7e5"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "689a67c4374d27acb719d40a98a0a8e8"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "63f8f7d0c8fc8a1ec3f5702eeeeb5859"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "9c4656c5cd0c4b6cb6ac365bcd33490c"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "e96f7ef2580f10e8fee1592bcdb1b4cc"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "8fa5c50c326adbbe040044f082969730"
  },
  {
    "url": "views/yun-wei/2024/linuxhe-gai-bu-xiu-mian.html",
    "revision": "3b4b533817ee68616e4b8c6cceff35d9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
