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
    "revision": "4b555fd44d26fd3c7b09a9cdf54be469"
  },
  {
    "url": "about/index.html",
    "revision": "67189c0169e824dae9eb57c4b3116319"
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
    "url": "assets/js/10.2151d803.js",
    "revision": "4ba91b9da7720cb03fe8d48f1e8eb0a7"
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
    "url": "assets/js/14.6242b72b.js",
    "revision": "83e72ef8b9d0e7cc2e0992d605fc9bf8"
  },
  {
    "url": "assets/js/15.6f6b773b.js",
    "revision": "ab9d312245c68a0fc7ea7d8b4e4a4feb"
  },
  {
    "url": "assets/js/16.eb320a79.js",
    "revision": "9f26458e0ebcc5c358e7a2b03e15d00d"
  },
  {
    "url": "assets/js/17.aa6d3a4a.js",
    "revision": "cc1869163edfce9a7f918722e5b4768a"
  },
  {
    "url": "assets/js/18.8a1d87c6.js",
    "revision": "97eac1a82624d96a27391b38afbad5a9"
  },
  {
    "url": "assets/js/19.736ec171.js",
    "revision": "57ecbadbb5f5d9e603792e2738448614"
  },
  {
    "url": "assets/js/20.251ce5a7.js",
    "revision": "72128336f1e16e407b18b0d94ddd37c9"
  },
  {
    "url": "assets/js/21.94c51e66.js",
    "revision": "cfcb4ea9a584841eac27e63908b76dd2"
  },
  {
    "url": "assets/js/22.8b1374c1.js",
    "revision": "6f2a0bdaecb3b990f2d1f1d743475acc"
  },
  {
    "url": "assets/js/23.813035dd.js",
    "revision": "08537aa11b30ca7cb887d9137d0b50f8"
  },
  {
    "url": "assets/js/24.79149665.js",
    "revision": "a422525fd9b4f700c68cc576b73e4f91"
  },
  {
    "url": "assets/js/25.9d445707.js",
    "revision": "fd4f6e5c2edececd586eeb5432a8dfbe"
  },
  {
    "url": "assets/js/26.69bf9294.js",
    "revision": "65524aaa8d7527c5b856adedc323e873"
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
    "url": "assets/js/30.b73947c6.js",
    "revision": "bb106cebd4b456be5853ae83e6d6db97"
  },
  {
    "url": "assets/js/31.5cc22caf.js",
    "revision": "310971153f861c050ecdacdc60ee6c76"
  },
  {
    "url": "assets/js/32.c6eca221.js",
    "revision": "ea17041b28e21fb0f255d8ac57953a4e"
  },
  {
    "url": "assets/js/33.d2ddea5b.js",
    "revision": "6c7c81f8aa957273e044bde6889e95a9"
  },
  {
    "url": "assets/js/34.788b2f8d.js",
    "revision": "38cba3f3930a30d71ced008713e57f28"
  },
  {
    "url": "assets/js/35.82f8580a.js",
    "revision": "0d630144e6b7a6c22faa293ef1efab22"
  },
  {
    "url": "assets/js/36.7de048ef.js",
    "revision": "b863c2fb034e24317a628387db845950"
  },
  {
    "url": "assets/js/37.4ffe7b86.js",
    "revision": "f5ac261a5dbce910d678daa5c4a33989"
  },
  {
    "url": "assets/js/38.44e6817d.js",
    "revision": "dd0f1a7d68c0fc2ade1a25d0a3346c0c"
  },
  {
    "url": "assets/js/39.60405a1e.js",
    "revision": "3117f65d27dc524b01dc39b68382cf52"
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
    "url": "assets/js/41.5df1f247.js",
    "revision": "3b214a91cad457d3aadf0fb9c8cef30d"
  },
  {
    "url": "assets/js/42.d868733a.js",
    "revision": "6a4ecdb1f3e2f31dfed9825a7b57e7fe"
  },
  {
    "url": "assets/js/43.bfee8519.js",
    "revision": "ffb384a8fa271467ef10946a8a9153c7"
  },
  {
    "url": "assets/js/44.c34af555.js",
    "revision": "4e6fbade64e000d17c5a6a15029e8b08"
  },
  {
    "url": "assets/js/45.c291ce68.js",
    "revision": "a6055318544b3e77e413445d76c51c7a"
  },
  {
    "url": "assets/js/46.f77a2fce.js",
    "revision": "1d88037f61754659435c3cc1428e3073"
  },
  {
    "url": "assets/js/47.be81b0f5.js",
    "revision": "e13ed36a4f33dac0d79cf12e70cf9d85"
  },
  {
    "url": "assets/js/48.2a274fca.js",
    "revision": "5739c9113b733d41a460362a4c8fd261"
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
    "url": "assets/js/app.3b468db7.js",
    "revision": "1aa4a446da9495922203417d79255533"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "5c4178bba2f45b34d524c3dcdc7f85d4"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "95618b6c0ef20dad08f2c367bfcd67b2"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "07843601df687f123007480bebc098ac"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "698dba0c92fb4da1a2e9870d588b5ac1"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "915a630bb72572aa22699b896873cf5e"
  },
  {
    "url": "categories/index.html",
    "revision": "a0ccefc745eeeaf9698fff87e371476a"
  },
  {
    "url": "index.html",
    "revision": "9ca75f5ceb6ea4fec06d2f7b4b6278b4"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "0ee0363184297463d27ef6e55172fd12"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "7f860e712ab8686c27a7fd8c2e5b0914"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "9efe49edc7d3b165793e366eaefcebc6"
  },
  {
    "url": "note/index.html",
    "revision": "d297739c94a441b8db2f6471ed66c606"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "46527c2f135aa7e6ca38eebc9c125b51"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "569f5556cd9e549516d6e091388b7c26"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "61535029c184dd06bf7224d0e493271d"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "0fbf16515ddcc4e6e88d0ccbc619d4c6"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "3d3e5aa8001633490c0cf9909799e2ac"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "c17ddfa823f634d6374ae84b23c1f4c7"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "848255d23e9fa3bf371eb85f954ec19d"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "811fa73b2811bdfc4194fc13aca18b9d"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "a23546be8ba63fe2bf32c0c4d82aa1a1"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "b0f4874ea93b7526e1e14b7d15f9e005"
  },
  {
    "url": "tag/C/index.html",
    "revision": "07c47b2433d21e3c6f3b40c03cf62b2d"
  },
  {
    "url": "tag/index.html",
    "revision": "b219245ae88d8c2f9a61e26ffaadf64d"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "9bf75bfa91b394c56071e5eee3767d5e"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "e7ea264f69c36a356ee9962a057a6959"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "3c4999954518ebe0d0b8dd68d312e1c2"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "58d7648e717fd34e471db600dc4bef43"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6037aa917b80862ebddb3f17debb8ad"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "fadfa41360b47e7735f42665e696fd3f"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "45f866db5b8984ea25dfb87bc0dcbcdf"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "841b99cfc8bb0b9292ccefb003afcfc6"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "41a3215121b9676374cac34e4847cc5f"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "16bfa49c6cda068682a033b8082f46e4"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "8e88bfb529d9cfedef36e9b1d4cc3571"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "cb71d8b25cc8a50fadb9c5e6f9a054b2"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "3d799f337c31cee7cfa4ffaf2269460e"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "0db9d9ed1487fae5fa2c2ae3c61f7dcd"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "0d22b749d3495782774df9441bee76dc"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "551a2f4a3af08fd06b80f61289a219e7"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "229d4288d66d0fdc0e74591ac5e31fe8"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "19e583c045c6774a7162ca6c1e98be8b"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "522f1b40b083db591f50d31c44d928df"
  },
  {
    "url": "views/xi-tong/2024/nginx01.html",
    "revision": "4fb592fe09d313b43962a80a631902f0"
  },
  {
    "url": "views/xi-tong/2024/nginx02.html",
    "revision": "4a5782a85c0096c3014b6ccb6e195f17"
  },
  {
    "url": "views/xi-tong/2024/nginx03.html",
    "revision": "8e1612ee5dad36997e051ffa492e36bb"
  },
  {
    "url": "views/xi-tong/2024/nginx04.html",
    "revision": "d7be86909a89a30f87e08629c3e573b9"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "312676a74dab46b0224e0a29fb1ca31b"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "272b8da7ae333ddeef296aaa3075dbc9"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "9777f588f4ecdaf087b28d2d2813da0f"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "6a2b9678c6cfc74eb82f4a39c79a3671"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "bc83f005559142ab6647af22393d7db2"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "cf695b7e51dfe24c3899312b39cbf10b"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "f5f0b163ebd866c58ef9581477022a00"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "ac7de532003015ed2b9b77ccb10654f2"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "f4ad3ef401ab26eaa386ca53973ab805"
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
