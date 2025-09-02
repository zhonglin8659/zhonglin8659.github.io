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
    "revision": "84d6cd8e4bb940fcd76620f197c6d682"
  },
  {
    "url": "about/index.html",
    "revision": "c6fb8ee74d3005da65ed86c400d58188"
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
    "url": "assets/js/10.b75e4695.js",
    "revision": "acc573866ac3cf032d9ee7eddf449484"
  },
  {
    "url": "assets/js/11.bfab7f66.js",
    "revision": "9940fa42a2baf376d97c5412e65e7ac0"
  },
  {
    "url": "assets/js/12.cf7bacd5.js",
    "revision": "ed5d9e3934826bc1701216c437f1dc86"
  },
  {
    "url": "assets/js/13.625c70b0.js",
    "revision": "000f70b801af16bb0c29a7ba3c122298"
  },
  {
    "url": "assets/js/14.d3714737.js",
    "revision": "09d4feedd9bdde2fc46183631730b5fa"
  },
  {
    "url": "assets/js/15.0a19d2b9.js",
    "revision": "5de91c9d72ea58704dd93ce4a539975b"
  },
  {
    "url": "assets/js/16.eea56816.js",
    "revision": "0fe397711c4f316257d760f068b6ed3e"
  },
  {
    "url": "assets/js/17.ef7a5349.js",
    "revision": "694d579e6fbba4a02f5093ed1d86dca3"
  },
  {
    "url": "assets/js/18.c91d9fb8.js",
    "revision": "6041133066747173a2953f8b486010cd"
  },
  {
    "url": "assets/js/19.37d129a8.js",
    "revision": "e4bd52db5b1884bd304e6969261946fe"
  },
  {
    "url": "assets/js/20.b4f31562.js",
    "revision": "f1fb1e621a884a76a019cb7914273a6b"
  },
  {
    "url": "assets/js/21.60d71c60.js",
    "revision": "779372f307c21d3da19c98b4e60772a9"
  },
  {
    "url": "assets/js/22.2e0529e7.js",
    "revision": "ca03b0970ff858e7424a660e02918bda"
  },
  {
    "url": "assets/js/23.12ee2461.js",
    "revision": "3d90b6d2125df99478d3451cfc6085cf"
  },
  {
    "url": "assets/js/24.000fb0a0.js",
    "revision": "23b4c5be5f1d0c77bd1bd6859d2c639a"
  },
  {
    "url": "assets/js/25.8a7b8f78.js",
    "revision": "b2bd05058b08b4894876800ef4b203d3"
  },
  {
    "url": "assets/js/26.7780e88d.js",
    "revision": "32e1d7baf9d25f86eeeba46a0a7c2ea9"
  },
  {
    "url": "assets/js/27.d79a92f4.js",
    "revision": "5a24980c60a8b19b1690b294fed90292"
  },
  {
    "url": "assets/js/28.1754e930.js",
    "revision": "ef1691f4b9b0448854a16ddf68ad785d"
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
    "url": "assets/js/31.c81edbdc.js",
    "revision": "e58dc2a69c619f8914ee3ead7621254d"
  },
  {
    "url": "assets/js/32.c6eca221.js",
    "revision": "ea17041b28e21fb0f255d8ac57953a4e"
  },
  {
    "url": "assets/js/33.6058f83c.js",
    "revision": "cfb675b0943bc4c32b61f07a95320001"
  },
  {
    "url": "assets/js/34.0f5f0754.js",
    "revision": "267d7f7978ced2d64773207170f35c1e"
  },
  {
    "url": "assets/js/35.d05949b3.js",
    "revision": "1a97171d1f2df713844d34740f7872ec"
  },
  {
    "url": "assets/js/36.0051583d.js",
    "revision": "e4fe231471aec4258ec91f0b3b36e56a"
  },
  {
    "url": "assets/js/37.43d51e78.js",
    "revision": "f39d3bda3c6d3070b9ca3e5cfe113a49"
  },
  {
    "url": "assets/js/38.44d09205.js",
    "revision": "286e2824be4ec76b4972119d1e9b1092"
  },
  {
    "url": "assets/js/39.08bb2b26.js",
    "revision": "0db0d7451a197963c07e38f559930ca8"
  },
  {
    "url": "assets/js/4.549b3535.js",
    "revision": "701fecc548ca6c56e8cc32ace675a642"
  },
  {
    "url": "assets/js/40.22399a20.js",
    "revision": "f1e27bb396001201bff7f2f99552fcf4"
  },
  {
    "url": "assets/js/41.662330f3.js",
    "revision": "41b19df0895639a1e78a50d17b57c018"
  },
  {
    "url": "assets/js/42.c31a6a56.js",
    "revision": "0e58eb81f7dac0376753fda3a8f4055d"
  },
  {
    "url": "assets/js/43.b42d7a00.js",
    "revision": "f149aad0efdb74cc4f9fa021482a61d0"
  },
  {
    "url": "assets/js/44.d57a33b4.js",
    "revision": "ed31590558b46cfe7ae4be106b5d00b9"
  },
  {
    "url": "assets/js/45.efa0cdf2.js",
    "revision": "ba12e91453f1015bf6441cbdd46509ff"
  },
  {
    "url": "assets/js/46.6c811c53.js",
    "revision": "170969235d5f496c10e1d776e4e3dc1f"
  },
  {
    "url": "assets/js/47.08316a1f.js",
    "revision": "55049c3c5a08bb55832871ef7ef5efad"
  },
  {
    "url": "assets/js/48.3cd5f46b.js",
    "revision": "8dbb3b5226f5776b4fe8b1eced6cfe9f"
  },
  {
    "url": "assets/js/49.3bba761f.js",
    "revision": "ed4ce771babbb31b6b300cd3c8487498"
  },
  {
    "url": "assets/js/5.dff40954.js",
    "revision": "a95175e871bfe99d1885274275631457"
  },
  {
    "url": "assets/js/50.3cecfe5c.js",
    "revision": "d3a69a2a9eb342f33f51863f0ace1f49"
  },
  {
    "url": "assets/js/51.f23b9faa.js",
    "revision": "729dfe631382d5410045f48b51bd16c9"
  },
  {
    "url": "assets/js/52.9104478d.js",
    "revision": "24c8ea7aad3542f03d5237f92d9412f6"
  },
  {
    "url": "assets/js/53.9ee2816f.js",
    "revision": "81079231e41026c609dce60301c127ac"
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
    "url": "assets/js/app.04483c44.js",
    "revision": "ef697b9a8998734f0e151bc6ee244aa4"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "387f4bb57faa9caa539f70732212b78a"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "3995b5e40ef88ac8a6b4739ce3b0c10b"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "57bcbc19acabc22ab285af751bd9a924"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "14ea3976fa575c1b347ea70c994ea9e6"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "34ef1c24948855f5e49ba4b2e63c7ff8"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "56dee7e6ad7755e37f3ced9a16e40071"
  },
  {
    "url": "categories/index.html",
    "revision": "9526ea3e7971b3574e1049a2573ab6e5"
  },
  {
    "url": "index.html",
    "revision": "4ca93bbfc18f99b79a4169a0eb83cbe5"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "227df9ed0367b3acc53cc6bf84e94898"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "2cf12fc6d1b7cb194e26b93999ce6474"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "e5fb29b0e6ffd399113a734dbd5c19ea"
  },
  {
    "url": "note/index.html",
    "revision": "acc48d67cdcac1a2d3f4c155cc1f926c"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "c33d28a38fb0b9df1700cb1fee18312d"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "057450b1d1bb8a0c6deb0ec2a9b5a9e3"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "11708e020a2be3e5c06e21e35c0960bb"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "d398529053631043a4dbc0bc62560783"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "1fb2cb404f35cce0e28f362dabc4d40c"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "927e81c731fc8fe995d708fc9b35db17"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "70cc10a2cb5238292e01be070f705ec4"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "8764a3f893f8dbffe067a0cec49bfaf9"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "860a5c3062f66818f143fcbc50678a2d"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "03ba739c237a2c79e921d69e31bb4175"
  },
  {
    "url": "tag/C/index.html",
    "revision": "d428cbf7731813c1d6b8cc85fd069a30"
  },
  {
    "url": "tag/index.html",
    "revision": "2ade983ee71fa63dc941f879d549e010"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "d4abddbb84703582c120adf4b14f178d"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "f36ea383acdc48f950dfe0d3db03c9dc"
  },
  {
    "url": "tag/Linux/page/2/index.html",
    "revision": "daf36fe90b380994e93146b3670a33aa"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "2febd51caa6bae3d50f9f216519c4ead"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "1d6c33501ed33b64832cbb4a91378bcb"
  },
  {
    "url": "timeline/index.html",
    "revision": "c5e0ab5c1f087a21f5752df013f18172"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "199ceadb3bfc7ccf5c78eeb379966b66"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "4db5ead1de9a67ee367d3c0b3c068c29"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "93e1e6dc0f35980f064c84a71a954ab5"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "1efb00daf8c1b671947be4e1af62d901"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "431ee41da8d3a2065296208e8d8db67f"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "ad8f4a8c903674b6cdc60c78bdf6b372"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "d5c010c937236d6ff44c8c2f840d194a"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "6de3e81c7ab9435ce07cac38b58a24d2"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "9b781bb725fc82abb42801ae77fc6641"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "afdeb556fab849a6072c2b536ee2451d"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "012f95270be96a801a2c088899b6b111"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "6a2a7e4dc6c40efdb37444e89c3d8b28"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "8f9380d0cd990ebf4d4f9c5b7afba2f1"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "7d43d049e9261dbd6c7048b4d72c27ac"
  },
  {
    "url": "views/xi-tong/2024/nginx01.html",
    "revision": "93d155dde2dc72fa409511f8722794a3"
  },
  {
    "url": "views/xi-tong/2024/nginx02.html",
    "revision": "2fba8feae52d03fa3d681ef84bee0aca"
  },
  {
    "url": "views/xi-tong/2024/nginx03.html",
    "revision": "0fe93fb5d58b8ceed802096b47edb450"
  },
  {
    "url": "views/xi-tong/2024/nginx04.html",
    "revision": "516341e9d70749005f04aa6366a5d88f"
  },
  {
    "url": "views/xi-tong/2025/ubuntuxi-tong-an-zhuang.html",
    "revision": "2a2a277ec4be68af4e235411e2701e78"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "2513980aa525662f94dc5f4e62491eed"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "57e7ef757d8d0e4da782e4b009085050"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "43572b3c6ce556b626924f339b41593c"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "06216095567e5077b7c53dd6807b34d5"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "93d7d4e36636333ccdcb0f30a4357f10"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "3a80bb94e4665d11cddfcd6b52d3ff22"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "63d6e5eba6ec6bd5be8c08f404ea7866"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "ff5e0c1f7d7a6c2c70ca4e30060d47ef"
  },
  {
    "url": "views/yun-wei/2024/harborcang-ku-da-jian.html",
    "revision": "567d9b97cd8d94119893840a42810b80"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "45dd12b6aafbcdb6cfda7928e8f14b93"
  },
  {
    "url": "views/yun-wei/2024/linuxhe-gai-bu-xiu-mian.html",
    "revision": "2f5dd25e24625faae38aacabb5750e43"
  },
  {
    "url": "views/yun-wei/2025/armxia-de-sqlite3jiao-cha-bian-yi.html",
    "revision": "29c32e3c8256d5134df0655101b52ba8"
  },
  {
    "url": "views/yun-wei/2025/ubuntujiao-cha-bian-yi-gong-ju.html",
    "revision": "5c47d63e64985ff001c9641bf0293627"
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
