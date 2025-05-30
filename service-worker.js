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
    "revision": "2e22b777624b2d6fabfaaab6538ff468"
  },
  {
    "url": "about/index.html",
    "revision": "67da9b0e1269f37b9554c586025720c6"
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
    "url": "assets/js/10.e3a456aa.js",
    "revision": "6babd3bef72a30ce25033268954f7fed"
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
    "url": "assets/js/13.3dce8fa6.js",
    "revision": "ea46673ec3bb063811a9ee53a8437e51"
  },
  {
    "url": "assets/js/14.aaa9584d.js",
    "revision": "c939586856ef5c94d955b870bab4a240"
  },
  {
    "url": "assets/js/15.f7455dfb.js",
    "revision": "ee726ad7954a929b83304137abc80254"
  },
  {
    "url": "assets/js/16.9e046fc2.js",
    "revision": "f9bdc79c3565f1e436a7eb89fbc00855"
  },
  {
    "url": "assets/js/17.d37fcc0a.js",
    "revision": "4c7a62c664bd312a10ec605065410bc7"
  },
  {
    "url": "assets/js/18.a0ce966e.js",
    "revision": "f82ae89863e003991b56e9fbdc4b29da"
  },
  {
    "url": "assets/js/19.f99b626e.js",
    "revision": "21774427e35ea683634102e5f43cefd3"
  },
  {
    "url": "assets/js/20.88a42a2a.js",
    "revision": "cb68eafff6f73736b4946c48851f959f"
  },
  {
    "url": "assets/js/21.99a2fabb.js",
    "revision": "4997bc6fb44be75a01b5d053894e59c2"
  },
  {
    "url": "assets/js/22.f1e13ed5.js",
    "revision": "c00322dc96bcf5626bfe20933516a399"
  },
  {
    "url": "assets/js/23.b9bd9d19.js",
    "revision": "57b8f1856c2eef1a2066e9b956349d3f"
  },
  {
    "url": "assets/js/24.374e2bc5.js",
    "revision": "6e49ca58e24de23f5cf05994f46b627c"
  },
  {
    "url": "assets/js/25.7bf3be67.js",
    "revision": "c1201cf129cfc25c7b9fcb6c33c1c72b"
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
    "url": "assets/js/28.d3486251.js",
    "revision": "1ecf9e7e14aafb8be05dfcc233b03089"
  },
  {
    "url": "assets/js/29.157f5f6e.js",
    "revision": "12bc3aedc67282df1b5c811ace74fdcc"
  },
  {
    "url": "assets/js/3.46854e42.js",
    "revision": "37e7cd6f202491dfd13f1c5fd7ab22e0"
  },
  {
    "url": "assets/js/30.1dbbcec4.js",
    "revision": "77009c97c15912d887b4f826287bab71"
  },
  {
    "url": "assets/js/31.5cc22caf.js",
    "revision": "310971153f861c050ecdacdc60ee6c76"
  },
  {
    "url": "assets/js/32.93dbdaa4.js",
    "revision": "298c09d9375ec41386bffcbd02636140"
  },
  {
    "url": "assets/js/33.dc2e1a58.js",
    "revision": "d619fb309a33ceb68728c8e29e875dcd"
  },
  {
    "url": "assets/js/34.2193b5fc.js",
    "revision": "8476021d427b0333060493a09c926832"
  },
  {
    "url": "assets/js/35.16ae26fa.js",
    "revision": "becc4c1cfd44a857a5c740c12e73d841"
  },
  {
    "url": "assets/js/36.47c87d5a.js",
    "revision": "f7f17e0f19a0861eb3ecd6628b499c13"
  },
  {
    "url": "assets/js/37.86a97180.js",
    "revision": "f2965d5b1d3a885e782951b9f5cb8445"
  },
  {
    "url": "assets/js/38.44d09205.js",
    "revision": "286e2824be4ec76b4972119d1e9b1092"
  },
  {
    "url": "assets/js/39.8f61c58a.js",
    "revision": "c5b098721815c88c285ad3e823338ebe"
  },
  {
    "url": "assets/js/4.549b3535.js",
    "revision": "701fecc548ca6c56e8cc32ace675a642"
  },
  {
    "url": "assets/js/40.f1204ff2.js",
    "revision": "19caf89380d94efa2dea66d10a874953"
  },
  {
    "url": "assets/js/41.33c4a1c3.js",
    "revision": "8183b0e435cf5b82ea20dab9903b62b4"
  },
  {
    "url": "assets/js/42.86275e64.js",
    "revision": "adbaaa43065203d689171d9f7384f0f6"
  },
  {
    "url": "assets/js/43.b70ddb27.js",
    "revision": "34756ef8ab1ba3558074a1c42cbfb03d"
  },
  {
    "url": "assets/js/44.83a21153.js",
    "revision": "6e5fa987d7ac10850e7ae93e4b638612"
  },
  {
    "url": "assets/js/45.b09fba10.js",
    "revision": "2373f13a6b448db5436fcc570a6a2524"
  },
  {
    "url": "assets/js/46.5e9a2901.js",
    "revision": "9b544eb395a9ee4a2904feaed40c3988"
  },
  {
    "url": "assets/js/47.b90d7176.js",
    "revision": "7cef576f31615f74bdbe988fcfbf3284"
  },
  {
    "url": "assets/js/48.c316384d.js",
    "revision": "838ab45b193b8ebd6d2ced34a5ed01ef"
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
    "url": "assets/js/app.fc3cc4b2.js",
    "revision": "96298789b8e76d395e772b49f0d6d123"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "4ef65016c1281378c642da948ba8dabc"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "a2e294875a475ba44620c6a542507d1d"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "0be802e9d7ecf0f0526a5ba6a6c68546"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "5a9cea57657426bf00dc7baa484a431b"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "2c0025d5b44e262ba65a25192358053d"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "cb46f798a48b46ca1d4ce3153b296f33"
  },
  {
    "url": "categories/index.html",
    "revision": "d7f93abb1051a1f42258cddda433d8f8"
  },
  {
    "url": "index.html",
    "revision": "c5b2e6d711d0c26c86b6fb5bdba0630a"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "a86b66f3925a41c02e04fbd5f6f1ffcc"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "cbadc9c788a66c0330672fe6df77a52d"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "125e23a49e3f9b8f4a0dabd2d27407d5"
  },
  {
    "url": "note/index.html",
    "revision": "b32cc21eb24d5f02e12b85b9f3c80e68"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "934e0d5dff5c761c459ab6bc002df1c0"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "178c50ec34a9191314cdda9c4eeb8d36"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "d09488ea518402e3757d17fc99645507"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "4466d5182df5a1fc505cdde0c6a709f5"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "c752ba365509ddde2a15899ff5285fe9"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "8f8e21961843fb4d09bebf09b3b1f5da"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "989d3dbe458c78354a7396d7c9a33075"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "51886470ffa39649f47cf01ffcac1c32"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "d7d28cce2e87f57e5cda678913084a40"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "cc025368e30b5340fa7b16873582b2a5"
  },
  {
    "url": "tag/C/index.html",
    "revision": "b16fe5cace2b20a0605b111b36ce7a3a"
  },
  {
    "url": "tag/index.html",
    "revision": "f2878d1715e51181719b86d85512999a"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "a03204f9a7eae55f09a15b76252977eb"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "5ba1eaaf7a762d7da926987be4d4ad00"
  },
  {
    "url": "tag/Linux/page/2/index.html",
    "revision": "7233f94c0b5cb6fb225ddb18d86e614a"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "66a74e509afa4bcd585debd532d9c0f7"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7b26ccfaf5e51c371f4a140c670c7aa8"
  },
  {
    "url": "timeline/index.html",
    "revision": "5adeecfc4da182f87e336ee7da8f1731"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "2213e0df24a05c3a984d6660106a5105"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "259527fd650b968fc389b94281962797"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "b65b242da6ba42f3b29095752655590a"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "7d564c52810361994b79d3a2d258e46e"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "8fa5d0a9a7ed8eb74e5de46d87b37d09"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "2addd170a6cc09205cad3c1ee255d3ab"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "1e868b7aad921500ff3c1c9e7515a7cb"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "716a49e79a1f56e03b3025b9b4a5cb2b"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "cf58f0323351ec851ed3e6b25dbc3511"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "a747e711aec8f96be345b3e085a0227d"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "eb75283779665dd19009186eb17805fc"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "7818c19cff838f97e146652607a3ac8f"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "8f942c6e45b915462ec59b560c11aeb2"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "5056da238bac47d1076592504fc6a3a6"
  },
  {
    "url": "views/xi-tong/2024/nginx01.html",
    "revision": "21fcd6d4d8e867c610b86b620e9a2467"
  },
  {
    "url": "views/xi-tong/2024/nginx02.html",
    "revision": "2f713bac3c7a34225cec91558efdcac1"
  },
  {
    "url": "views/xi-tong/2024/nginx03.html",
    "revision": "d7fda5bbfc29f76102fe7f0ef8341fa6"
  },
  {
    "url": "views/xi-tong/2024/nginx04.html",
    "revision": "aa46f33187cb9150a270520a92a43494"
  },
  {
    "url": "views/xi-tong/2025/ubuntuxi-tong-an-zhuang.html",
    "revision": "57fbcec0bc5f7dbbcef7a4ef0f653d2b"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "656b52313ca3542346522481139f1267"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "1fba7705a34f7700cfa795318f095525"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "b77ded99e298f9ba08c2a870aea07b55"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "95acae57fc9154f475954703c3b74ccb"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "cd444c137ccbec3690275c7b4f3e319d"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "ae6d095d4a59389b20c75bfb9d51db8f"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "b91c6f84966ebeafe9d20c116654f3dd"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "501ad7d1713967fb69398b690d7434ea"
  },
  {
    "url": "views/yun-wei/2024/harborcang-ku-da-jian.html",
    "revision": "6410b2dad255f30e97400851fedb7d8f"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "f7d792588d22e44226864ae31a941c9e"
  },
  {
    "url": "views/yun-wei/2024/linuxhe-gai-bu-xiu-mian.html",
    "revision": "64c53861d88d3cfe0ab4af39ca70c43e"
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
