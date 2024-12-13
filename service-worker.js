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
    "revision": "d54616cac040670c9a25cb8ff38e625b"
  },
  {
    "url": "about/index.html",
    "revision": "1d40a5cfd10dde22425a4b48883950df"
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
    "url": "assets/js/10.5b768360.js",
    "revision": "4906880bba4297de474685b47d4df891"
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
    "url": "assets/js/14.6242b72b.js",
    "revision": "83e72ef8b9d0e7cc2e0992d605fc9bf8"
  },
  {
    "url": "assets/js/15.6f6b773b.js",
    "revision": "ab9d312245c68a0fc7ea7d8b4e4a4feb"
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
    "url": "assets/js/18.904104bb.js",
    "revision": "bccebf8602f6215c4941702af60af311"
  },
  {
    "url": "assets/js/19.a4254ccc.js",
    "revision": "0711eae12915c3e5761163e44ac803d0"
  },
  {
    "url": "assets/js/20.251ce5a7.js",
    "revision": "72128336f1e16e407b18b0d94ddd37c9"
  },
  {
    "url": "assets/js/21.0d38bfa8.js",
    "revision": "da2e6eadb15ef8942f41934dbf6e4385"
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
    "url": "assets/js/27.2df2f4c7.js",
    "revision": "dcc960ceaff77d5713158bea7ee3c3a8"
  },
  {
    "url": "assets/js/28.a6ec8f3b.js",
    "revision": "b4bfac04a50fe55efaeff5408aed5eb2"
  },
  {
    "url": "assets/js/29.157f5f6e.js",
    "revision": "12bc3aedc67282df1b5c811ace74fdcc"
  },
  {
    "url": "assets/js/3.3df49dda.js",
    "revision": "37e7cd6f202491dfd13f1c5fd7ab22e0"
  },
  {
    "url": "assets/js/30.9d80882d.js",
    "revision": "fcc406ab05b8f327e66df1f6bd0a06d2"
  },
  {
    "url": "assets/js/31.39859b1a.js",
    "revision": "3f5835e0855eef40eca7fc767de54a35"
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
    "url": "assets/js/34.4fccd5f8.js",
    "revision": "38ce704344f0834973f2c31ce62686aa"
  },
  {
    "url": "assets/js/35.ad9db8a2.js",
    "revision": "a6801a572be614e1ada712b9a99980c0"
  },
  {
    "url": "assets/js/36.080fb56b.js",
    "revision": "daa381ca4665817b5ac6f6437f8519ed"
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
    "url": "assets/js/39.ca4e0c2c.js",
    "revision": "24af16f9754ffac12d141acb4a3eb576"
  },
  {
    "url": "assets/js/4.549b3535.js",
    "revision": "701fecc548ca6c56e8cc32ace675a642"
  },
  {
    "url": "assets/js/40.01ed2044.js",
    "revision": "9e8d95f0ce1eec1131fe17024e6c0326"
  },
  {
    "url": "assets/js/41.5df1f247.js",
    "revision": "3b214a91cad457d3aadf0fb9c8cef30d"
  },
  {
    "url": "assets/js/42.d03ded13.js",
    "revision": "c3f1daa025d3801d4a7f15fa394f7e6e"
  },
  {
    "url": "assets/js/43.5db115b8.js",
    "revision": "3b6711b2ab9fe0551760296ebe2212ec"
  },
  {
    "url": "assets/js/44.ecab8b8b.js",
    "revision": "5ba5cea33f37d97d40ef6c092c9e4cc4"
  },
  {
    "url": "assets/js/45.ed2152ba.js",
    "revision": "f9d5f781fa104f024cee6614e8469dac"
  },
  {
    "url": "assets/js/46.536001d6.js",
    "revision": "d2549ef4a6c4cc309bf311e084c4cd63"
  },
  {
    "url": "assets/js/47.75735c76.js",
    "revision": "196f49c4a183f1442a2135686b9bdd00"
  },
  {
    "url": "assets/js/48.f8e2c7e0.js",
    "revision": "b933bed7b53f71801fd479d65c71e5c8"
  },
  {
    "url": "assets/js/49.d2db33f5.js",
    "revision": "c81321afb5b3058633c4f7c060382acd"
  },
  {
    "url": "assets/js/5.dff40954.js",
    "revision": "a95175e871bfe99d1885274275631457"
  },
  {
    "url": "assets/js/50.c682a5dc.js",
    "revision": "afed10f0272e2dba35aef8b09c4fefa7"
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
    "url": "assets/js/app.3d961f21.js",
    "revision": "a8d9132d75c2f664ef5d8be2e41bf439"
  },
  {
    "url": "categories/index.html",
    "revision": "5879535e81dd148af103c0b9950509fd"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "d191fcfceb4f55d865561069152f0ce6"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "a6f5dd957da707facc8a3820ae385e9a"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "ca4e3e50b281ab5bdf71facaf2562dc2"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "335237c81ba5b044b89c65cd15d34025"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "965f42742c720463320eb6cef8f67ad3"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "c121eec2d6e38b10765398d3e8f56dcd"
  },
  {
    "url": "index.html",
    "revision": "5b7e261c498cb55eeec7f277676688ef"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "5670ba101539299c2a8179611b0eb4d0"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "3fefc09d482bd4d6e6ef3e42d2dda2f8"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "7f04468ba81a907aefd7f775ae836b26"
  },
  {
    "url": "note/index.html",
    "revision": "af44d9fa2007a3b16bfeedc9003f237b"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "4c5bd7e75861fdf5365499e8bf43face"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "887ec482e293e8d593840988c882f53e"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "6a58dfd12117b8501d67d150b9146a40"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "da423f56840075b2e82161236104b3cb"
  },
  {
    "url": "tag/C/index.html",
    "revision": "65dd764ef3c521bc2c26cf79095ff72e"
  },
  {
    "url": "tag/index.html",
    "revision": "b90ff431fc001647855cde7593bab935"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "8fa4d12524505ac4e70a890464b9b08f"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "6c0eb74e12b20f1daf5f66c4ce8aefb0"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "b3ec6fe5167ae86cf6359966de27bb19"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a53692c8fc34751e86a71c1e3261aed6"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "0528df50219019f8f46f6935fe05ebed"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "9d3904689a1c8e30c01fae8d4c730af5"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "77525f63fb9dc18c54a883871fa4fa80"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "a04097de2d93f6c2d4e40da8d2f4e94a"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "c8887a0968a05987350e600fa5f8f407"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "fcad012ec62aa4a349c1c3be9284599e"
  },
  {
    "url": "timeline/index.html",
    "revision": "32eb41d9e5e8364739ca84e483cb28cb"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "2c1bf6c19ead3c874978fd2f4602002e"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "7db2fdce35c84d168b1d6159c094702d"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "bc57b13b3966bf5cce78765220c2f59e"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "7795a1035881b676606aeaa5d4ff965d"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "4d1ac0aee13708635f11190237cd9eb9"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "c988c2f8e159e5d1ab38d1463387f136"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "c91e7e60addcde0a096059e6db6493df"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "fd355035ad3a6f4c447e268f45bcaf13"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "cd9c151143ee6c2593ee5eb562683cf8"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "c246cd77fc7d829a4458fe2a6cff9cef"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "638fdcc61906656135d910863c2e8182"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "55825a3e252f8e3e1ddbd01d926f32b8"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "21264fc7a488b95a2bdd59a663f912b4"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "4d6b9020f05e265c183fc5170cee5d78"
  },
  {
    "url": "views/xi-tong/2024/nginx01.html",
    "revision": "7e680444d67ce908acf459f4c61ca9fa"
  },
  {
    "url": "views/xi-tong/2024/nginx02.html",
    "revision": "0089bfbc9664050b195e245dc95a69b4"
  },
  {
    "url": "views/xi-tong/2024/nginx03.html",
    "revision": "a3cca440d319ff5aa9197c0062cf51bf"
  },
  {
    "url": "views/xi-tong/2024/nginx04.html",
    "revision": "751e1e1a9f22abd58514aa1985c00983"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "1536a21505ba81dee07444af6c2afbc9"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "7d960a68e722705319d96e3fab1ac38e"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "d3dda759da96340d3e98b0d7d103ac86"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "a9116ac40ea208f3cc5f86cc7cdf713f"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "6761ae16e750e1696a39cdcb0a7431db"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "dc141a652c5f5cd65282ea5ed147daa2"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "7e74204ba4a02318867a1cb32494bea6"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "e1b86506478cdec98ac947ab95c348eb"
  },
  {
    "url": "views/yun-wei/2024/harborcang-ku-da-jian.html",
    "revision": "2604a3fcda2fccf2919890129f177186"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "11daf6757811ef7e7f49a2fc2d9754d4"
  },
  {
    "url": "views/yun-wei/2024/linuxhe-gai-bu-xiu-mian.html",
    "revision": "3d9fd0eb9956255b2d87ad2c85d55f3f"
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
