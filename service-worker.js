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
    "revision": "3a1ff0b00d4534f6ab8458bbfb955d02"
  },
  {
    "url": "about/index.html",
    "revision": "aa0240647553b3b272cf211352e7c7a3"
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
    "url": "assets/js/1.ff76c098.js",
    "revision": "82fb23b2e707451d5adad071ff07e79c"
  },
  {
    "url": "assets/js/10.50fec051.js",
    "revision": "96112289ab4bf63940ec3361ea3ad301"
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
    "url": "assets/js/13.a73b7394.js",
    "revision": "7e18de149f928d9069d785b492d38668"
  },
  {
    "url": "assets/js/14.aaa9584d.js",
    "revision": "c939586856ef5c94d955b870bab4a240"
  },
  {
    "url": "assets/js/15.3cab4cff.js",
    "revision": "f980ad0a5103790c99b7edf27d199abd"
  },
  {
    "url": "assets/js/16.d6fd5c5a.js",
    "revision": "0d6180b1a6b2391f7430ea78809c8263"
  },
  {
    "url": "assets/js/17.d37fcc0a.js",
    "revision": "4c7a62c664bd312a10ec605065410bc7"
  },
  {
    "url": "assets/js/18.519a1fc7.js",
    "revision": "12475c09def53739b85d6e8b1182a25d"
  },
  {
    "url": "assets/js/19.37d129a8.js",
    "revision": "e4bd52db5b1884bd304e6969261946fe"
  },
  {
    "url": "assets/js/20.49de9939.js",
    "revision": "d08b4ee57532f1f189aec21d30606e15"
  },
  {
    "url": "assets/js/21.99a2fabb.js",
    "revision": "4997bc6fb44be75a01b5d053894e59c2"
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
    "url": "assets/js/28.518b31c2.js",
    "revision": "4e322e5407bc468ac8c8596c18bde08f"
  },
  {
    "url": "assets/js/29.ed1d6f6e.js",
    "revision": "9e689c3e1ec3c6c8d537dcca06339363"
  },
  {
    "url": "assets/js/3.094725b1.js",
    "revision": "37e7cd6f202491dfd13f1c5fd7ab22e0"
  },
  {
    "url": "assets/js/30.d14365c1.js",
    "revision": "bacb4c315bc3588473d56b2d23c396ad"
  },
  {
    "url": "assets/js/31.6328d618.js",
    "revision": "9218868d891f570407f61c1b503c63a9"
  },
  {
    "url": "assets/js/32.22865539.js",
    "revision": "124db85afe332a333400c953539acfff"
  },
  {
    "url": "assets/js/33.9e628bb7.js",
    "revision": "8b4507d052b711ad511209f1da25f402"
  },
  {
    "url": "assets/js/34.5490a5d0.js",
    "revision": "99c7196c438cf1229504788448413d76"
  },
  {
    "url": "assets/js/35.c39fed66.js",
    "revision": "eeeb67ff39c22c1e23267fe252838318"
  },
  {
    "url": "assets/js/36.9996824d.js",
    "revision": "e2401d5fa34d0c7246c5e1ccd438ce53"
  },
  {
    "url": "assets/js/37.7381b674.js",
    "revision": "6249bb4e32391e43b5390078d6de542a"
  },
  {
    "url": "assets/js/38.09163839.js",
    "revision": "070a81ff26bbd5876e4f3758c8d2b625"
  },
  {
    "url": "assets/js/39.84f4f4a2.js",
    "revision": "bd89487ed1eaeb4dc630b87089cf9fac"
  },
  {
    "url": "assets/js/4.c860db15.js",
    "revision": "701fecc548ca6c56e8cc32ace675a642"
  },
  {
    "url": "assets/js/40.c66adcef.js",
    "revision": "87165dc47c3d030ad6b8b5bb43b4e971"
  },
  {
    "url": "assets/js/41.fb795dbd.js",
    "revision": "07f709452264c618593d4c0f2cf187fe"
  },
  {
    "url": "assets/js/42.a714fc88.js",
    "revision": "d10f8b4b649154f0655bd31ff3a3a034"
  },
  {
    "url": "assets/js/43.14fce449.js",
    "revision": "169ff48cf94deb33143f3fe0e6993bf3"
  },
  {
    "url": "assets/js/44.07597a10.js",
    "revision": "5d5bc670c10f4a7d74e8695cfb870d72"
  },
  {
    "url": "assets/js/5.f3955a84.js",
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
    "url": "assets/js/app.e969e95b.js",
    "revision": "fe8f300d0a337ab3958dfb9bf7d30577"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "5e2bb5a538d10ec47a5039835e9354a0"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "e23c523defa827b2924aa4d3dc621342"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "cb2d649490ec5b659059bdb5a09486c1"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "e5b0b7645e874c32134826babb3e343a"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "b4ce57f239b054e53d2eb52652261b64"
  },
  {
    "url": "categories/index.html",
    "revision": "12b7c32957fba0c53dd12dedc6792257"
  },
  {
    "url": "index.html",
    "revision": "58e127aaac954a7aa1894b2466a9737e"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "6cf50bcd26e1a8e0cbd14759000e460f"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "ff0e9ded0d044ca628985143d56ce545"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "57da83867d4d885d6e6076aa2138819d"
  },
  {
    "url": "note/index.html",
    "revision": "cfdeae8f19b4c123de428c88e746f54d"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "eb612a048126d2d52d10e5f7fd86df3d"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "3480f9f2f8a05603b2e6f0038865fe36"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "4343524412187240daa13000452a8f51"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "cb3b1764658e4376f207b7a087de7c74"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "fcd659501503e214f755b74805162147"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "a6bc70affac4e8003c6dec7f971c43fe"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "2b584b128b0b31071a4e4d6719aac395"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "46cf22b6b6d883145a45d724460c91a1"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "ccac5cbffd129924bca7b54c48946e9b"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "e4fb7401ea3dca2b67754e7a3b952d13"
  },
  {
    "url": "tag/C/index.html",
    "revision": "16e05fbadba39001b806e295681da300"
  },
  {
    "url": "tag/index.html",
    "revision": "4acfa67df8bda8b04418f73cbf406680"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "8c1f0f00432c9f713963c7b1fa027221"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "cbc70f1a26d6f0a55d82add9d94f8f86"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "3f4ad0fc797c242cc7fa820086d14b8a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "6ebc140535e3696b9d40496bc2148a5e"
  },
  {
    "url": "timeline/index.html",
    "revision": "915db7164dc3aa9343c4bb19454683f1"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "6acd19581f625180856c5ee84f9e6960"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "5ab5569c859320cb2f2a05bb32ce9672"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "99b52fd3ac939a525a6e5e40ff476e85"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "88e86864cca8d5938812b12995225d78"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "b4b747ab123fdeaf7847e8a2ff496e45"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "51710236b0a36a6751ab072480decee3"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "59fa9beb75dfe3bf670308491038c9eb"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "5f5d9e9620a00ef6226523be42e59d10"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "6769782e641a436d24fe32832d4b118a"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "982d4d89e26373bcbe2383178b384f23"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "b299eeee13e10bc875a96305a658e080"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "048c2369963bb4b60b91ea84ce2ccf51"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "c8457d2fb25a4024a38c2535912c2569"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "02ea1b483af5f57607c96bae6ad3afd6"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "384f4758480394e51fb991c3eed4fd1d"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "9ac04e45401456c6f4b5ba3a334b9b31"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "f203cb76ffd40e816b861df53f2401e1"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "e21f4c0201a4800550d48833fc684180"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "de022977e18941aa7bb20ed942cc095e"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "54edb70be33c05055c44f0913b0e2a85"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "1b9c7bfe8f6c06079c699508c2c02a86"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "6fd41a91fa1be3aad5d9c6bb7a81f139"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "2fb2816296d2b291b236c80c2d7f69cf"
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
