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
    "revision": "12f16d328c955847b74561859cd6e5af"
  },
  {
    "url": "about/index.html",
    "revision": "5399a09b9e2759d6fddd92090ced97da"
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
    "url": "assets/js/12.89e84db0.js",
    "revision": "90911f2f79669a21c86aa9b2a5b89544"
  },
  {
    "url": "assets/js/13.a73b7394.js",
    "revision": "7e18de149f928d9069d785b492d38668"
  },
  {
    "url": "assets/js/14.94d2e7d7.js",
    "revision": "49838fdc956cf1bdadabcd6526490408"
  },
  {
    "url": "assets/js/15.3cab4cff.js",
    "revision": "f980ad0a5103790c99b7edf27d199abd"
  },
  {
    "url": "assets/js/16.229e1847.js",
    "revision": "381089903c419d4d49f91ce9580359ce"
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
    "url": "assets/js/20.5d7e3eb0.js",
    "revision": "93a61a9bf3d54a20597f320b2316b055"
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
    "url": "assets/js/23.12ee2461.js",
    "revision": "3d90b6d2125df99478d3451cfc6085cf"
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
    "url": "assets/js/26.413a307b.js",
    "revision": "15cbc53e6f664ba8dbc2abe4c93033cd"
  },
  {
    "url": "assets/js/27.3d3bf755.js",
    "revision": "eb90a59718e2e98e311d7d3993ec86d2"
  },
  {
    "url": "assets/js/28.c7678958.js",
    "revision": "e744eac48fc305a934ea4f5fb01f400b"
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
    "url": "assets/js/30.9d80882d.js",
    "revision": "fcc406ab05b8f327e66df1f6bd0a06d2"
  },
  {
    "url": "assets/js/31.c81edbdc.js",
    "revision": "e58dc2a69c619f8914ee3ead7621254d"
  },
  {
    "url": "assets/js/32.159840dc.js",
    "revision": "a8707bcf1afe941eb1f816e7b8f1cff9"
  },
  {
    "url": "assets/js/33.dc2e1a58.js",
    "revision": "d619fb309a33ceb68728c8e29e875dcd"
  },
  {
    "url": "assets/js/34.65846d9e.js",
    "revision": "900b8a4441f54ff0347372ee19d79a0c"
  },
  {
    "url": "assets/js/35.ad9db8a2.js",
    "revision": "a6801a572be614e1ada712b9a99980c0"
  },
  {
    "url": "assets/js/36.7d359ef4.js",
    "revision": "26474656bb32456f10361c3cfe569ef3"
  },
  {
    "url": "assets/js/37.8f0f6c45.js",
    "revision": "dce80af214560563794b6b1ec1cdb2fe"
  },
  {
    "url": "assets/js/38.67f804d1.js",
    "revision": "75cfc8db200b1af89174f27754cca51d"
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
    "url": "assets/js/40.e2cdf87f.js",
    "revision": "e824937bd432ba15c89f4500803be4b9"
  },
  {
    "url": "assets/js/41.490c1b71.js",
    "revision": "7295aa9ae257830f0caa79d4f6108e54"
  },
  {
    "url": "assets/js/42.9c4dfb59.js",
    "revision": "707869c2c326d5d920cff34bab933a07"
  },
  {
    "url": "assets/js/43.d3173e74.js",
    "revision": "b91c26b1437e5c5eb9b1f950a37952a6"
  },
  {
    "url": "assets/js/44.f04bd268.js",
    "revision": "b9252f99db2c56544540c1f3e2ab907f"
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
    "url": "assets/js/47.106a511b.js",
    "revision": "4c1ff6dc0496946cd3f6f45dfbdc588c"
  },
  {
    "url": "assets/js/48.c2a0e2cc.js",
    "revision": "5ed4dcaa5a5fec77060f5872e4fcd452"
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
    "url": "assets/js/app.50a256e0.js",
    "revision": "e7596a61b7da8f372cd6565b1e414c37"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "d21469640deff00a52983d1e6e48a451"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "c290d99c01d85e27b7ba4bca518059d3"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "4640f091178ab49ae432fd9e8e13ea7a"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "7ed681b3650ac73243659a61a9fde752"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "7ceecbb06e49a79cdf3b61425606f7d1"
  },
  {
    "url": "categories/index.html",
    "revision": "f1a647f13cd4ae6023ef250cedd14de3"
  },
  {
    "url": "index.html",
    "revision": "021f9b5bba10100a14165a89d3369a1e"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "47da821e472e416ecfb267f44efd11fa"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "2cbab46d844c21e8b26271cd83dde865"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "c3e4e296532ab34f466d0f50654253eb"
  },
  {
    "url": "note/index.html",
    "revision": "cdaad6eac59f94d347e48dfd404598b3"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "f919628120a0604d8b5880d289b13d9e"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "787900067975fb58eecc8c2ae6330fa3"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "ecc0c6779bf745816ada8a161daee4ad"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "3f9bd928dd55df57e17876521e8cbe54"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "49e6dc360fb2da345fbb9d4aea27121b"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "e98d835623505f27b3e774d4c25e0f89"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "603a61a0ab614df7f6cc0af5d9ecc7b7"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "1fa6a7383cafb3555fb8c89ccf3d34ee"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "2b4f8703893651221cd848f2458fa745"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "8f1793b57b5808a31dc894642ed6c61c"
  },
  {
    "url": "tag/C/index.html",
    "revision": "00403a60e8d648f1f920ce8ae8c7cf3e"
  },
  {
    "url": "tag/index.html",
    "revision": "935d47865938def121982e13d392e9c1"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "8d5aebda75a9d1a883a2ead8fe832871"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "8c30f48da2928c94066a2cb2f9bcd328"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "e9f39cee18cbbe174bea7ee4aa6ce3af"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "cc519b3b15c343c3ead7f52bb2e21d7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "fe0a4c973a7b07e152d57cf0b34c6002"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "4cdacdb25db6d6e4400bc71dda0b070d"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "ae8ed43dcd200809ffee2ccd11aa6fa1"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "01e71c274c567a2d2040081874a42507"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "7a1739aebc09b107ec604a3ccf9a7d43"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "6b3cd6997c872332951ee49921270d99"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "d9d546e9d66e3f1aee48a1bce50104a2"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "33effad5d9d17f25f935f250d4c19264"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "2fa7fd98247c6921c7a5d2e9be9b0bd7"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "570de3673d15341160845ee5aa478b17"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "0aded4d340b05c22bfab7a72a77b1861"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "093b1d09be31f6e25963087684843695"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "d8b70ce49ff574e1c978fca8f97b5977"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "a5324127d7046d0036722e534c3c6c77"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "57a63a0c2419971719e6392d251c46a6"
  },
  {
    "url": "views/xi-tong/2024/nginx01.html",
    "revision": "87d84b1f77c09cbf36a8ec721ba65b90"
  },
  {
    "url": "views/xi-tong/2024/nginx02.html",
    "revision": "8334b8f104371214c49fb0b20c5505ce"
  },
  {
    "url": "views/xi-tong/2024/nginx03.html",
    "revision": "927aad05807db47a7c6ae21ece8972c4"
  },
  {
    "url": "views/xi-tong/2024/nginx04.html",
    "revision": "88ed6f0aaceeba9dc387043281ebfe1e"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "66f763e4c051fcfe69841b97e1d3e08f"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "829604ba5641c18b463e498cea3dabed"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "b4cbd2aafb9edbf8a385ba042db112c0"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "590a238a275e614501a05492e00ff48e"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "ef494804f18f643026401e31b717b29b"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "0c58d711b65114e3898076ca95b214f8"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "7df2f532f29df3629d6b68fea465eb59"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "7496498dc9e66f2112077dd9f5456c5a"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "d47307e211bed0c77247e9864ee2eb1b"
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
