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
    "revision": "be4563f11d13f46a2a87ff059b7294d9"
  },
  {
    "url": "about/index.html",
    "revision": "6069e19e46fc55a752706382e71c693c"
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
    "url": "assets/js/10.930311df.js",
    "revision": "9297dbc2e9835cefcbd7aa6d3c7f338e"
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
    "url": "assets/js/14.57a11a7d.js",
    "revision": "c19a526918519f762bd5607d3451a057"
  },
  {
    "url": "assets/js/15.3cab4cff.js",
    "revision": "f980ad0a5103790c99b7edf27d199abd"
  },
  {
    "url": "assets/js/16.385638e4.js",
    "revision": "26fa1f6ba89206849d76f7df9421de4e"
  },
  {
    "url": "assets/js/17.d37fcc0a.js",
    "revision": "4c7a62c664bd312a10ec605065410bc7"
  },
  {
    "url": "assets/js/18.6470e0d8.js",
    "revision": "07d83b6811e992feda5ac06d35bcbb76"
  },
  {
    "url": "assets/js/19.205afaec.js",
    "revision": "67962ee1d54d0acfc81ca7a5358187d8"
  },
  {
    "url": "assets/js/20.251ce5a7.js",
    "revision": "72128336f1e16e407b18b0d94ddd37c9"
  },
  {
    "url": "assets/js/21.57cac6e6.js",
    "revision": "348e9a0152e09955d69252781dc400a5"
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
    "url": "assets/js/24.04122cc5.js",
    "revision": "42c8dc311d2b2f3bc7e765ef45c4217f"
  },
  {
    "url": "assets/js/25.b16064c0.js",
    "revision": "db824f627dc8774c98b60aa80feaa088"
  },
  {
    "url": "assets/js/26.acbc423d.js",
    "revision": "5e812beb322dd0866021ff0e4a2f0d8c"
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
    "url": "assets/js/30.d9dd2fd3.js",
    "revision": "dedeb48010102fcd1735f5ee1c354845"
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
    "url": "assets/js/34.0f5f0754.js",
    "revision": "267d7f7978ced2d64773207170f35c1e"
  },
  {
    "url": "assets/js/35.82f8580a.js",
    "revision": "0d630144e6b7a6c22faa293ef1efab22"
  },
  {
    "url": "assets/js/36.0051583d.js",
    "revision": "e4fe231471aec4258ec91f0b3b36e56a"
  },
  {
    "url": "assets/js/37.86a97180.js",
    "revision": "f2965d5b1d3a885e782951b9f5cb8445"
  },
  {
    "url": "assets/js/38.a00dbfe4.js",
    "revision": "a938f8ad2d27ea66f8377717fcb22db5"
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
    "url": "assets/js/41.0d473302.js",
    "revision": "47a37743638838497b859aae37a26296"
  },
  {
    "url": "assets/js/42.3b240725.js",
    "revision": "2efe50a60d830953007b40494c102141"
  },
  {
    "url": "assets/js/43.33b8153e.js",
    "revision": "09af08ca16d1997e1b8cb0744d44f55a"
  },
  {
    "url": "assets/js/44.a5273b82.js",
    "revision": "8da18893e538c6f215f59603d1d2299b"
  },
  {
    "url": "assets/js/45.945603ef.js",
    "revision": "16b15b7fb951ccc7e3b7264d63b8e011"
  },
  {
    "url": "assets/js/46.4300ebe9.js",
    "revision": "879ff89d62ab3196b85909d9ecfaa45a"
  },
  {
    "url": "assets/js/47.9e1e7017.js",
    "revision": "7acbc239c0d7bf66491f683a38747e0a"
  },
  {
    "url": "assets/js/48.5aec1b19.js",
    "revision": "375b01bb6f034e156c64533e197489b6"
  },
  {
    "url": "assets/js/49.b20e1bf1.js",
    "revision": "86ceb8a05d15a6f841f54772d8b3651f"
  },
  {
    "url": "assets/js/5.dff40954.js",
    "revision": "a95175e871bfe99d1885274275631457"
  },
  {
    "url": "assets/js/50.64b5e3f4.js",
    "revision": "76fcd9f5b6d100faa2ddf2343ee8f6f2"
  },
  {
    "url": "assets/js/51.7b4b9ab5.js",
    "revision": "d79fcbbd40875634432bf3e0744cfa4d"
  },
  {
    "url": "assets/js/52.16616ffd.js",
    "revision": "cee516704f8b488fef8910378dbff599"
  },
  {
    "url": "assets/js/53.bc788416.js",
    "revision": "ba7ee85351ea2f58ee862e4ba43c73ed"
  },
  {
    "url": "assets/js/54.8c0047eb.js",
    "revision": "11c9ed395ae7775be8eaff4fee35ca14"
  },
  {
    "url": "assets/js/55.6467bc53.js",
    "revision": "dc4b7df3c0b7f8127f9154c03b717e06"
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
    "url": "assets/js/app.3938bbe1.js",
    "revision": "23869d163546b4dea7ebf91e4b167fcf"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "b073ed9a5ca5856640980351649191a4"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "e1d9f65489876f0e0c2666217a50122c"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "cea0a3bd884f39078376dd066748fd58"
  },
  {
    "url": "categories/系统/page/2/index.html",
    "revision": "3e1be42efdadc6348cec1ea074709899"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "1d876f27f629824d44cf261fad597e2c"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "783c4cbcea9f174e3b8a54132bc1c6ab"
  },
  {
    "url": "categories/index.html",
    "revision": "118f256c4fb0215a544099829e650a6a"
  },
  {
    "url": "index.html",
    "revision": "00d00c58c387c905837ba1e42780722c"
  },
  {
    "url": "note/cyu-yan/chu-shi-yu-yan.html",
    "revision": "ea1d48f4894b3fe503d19ed5ffededbe"
  },
  {
    "url": "note/cyu-yan/he-xin-yu-fa.html",
    "revision": "c78d32d75bed222f1f63968363b27995"
  },
  {
    "url": "note/cyu-yan/yun-suan-yu-fa.html",
    "revision": "72bbc18703051559ebf339868634a386"
  },
  {
    "url": "note/index.html",
    "revision": "7384e9d4cc20d77e1b24e6f0f134b7cc"
  },
  {
    "url": "note/python/pythonhuan-jing-an-zhuang.html",
    "revision": "0e7e9df97f1697374f40b6709223943f"
  },
  {
    "url": "note/vue/vuefeng-zhuang-qing-qiu.html",
    "revision": "23f2b0267c92e7afb154aac6f4143a9b"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "eef78ce135be3a3bf78ecf7d8c9b5718"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "6b9e5a2fc39e860ccf0897656ee57221"
  },
  {
    "url": "tag/集群/index.html",
    "revision": "755ba9773eb9a83d1edff407a97369bd"
  },
  {
    "url": "tag/交换机/index.html",
    "revision": "57f408cee96e46ec56a44318e6b4194f"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "fe728aa5a12ea27ac78b9b1f8c79953b"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "1882a873b96d78f994a3f1767d377b15"
  },
  {
    "url": "tag/虚拟化/index.html",
    "revision": "9ca2e037cd03ef0e4e0534c961561543"
  },
  {
    "url": "tag/知识库/index.html",
    "revision": "2fd262fff9774dcc77f593c81b2a9d24"
  },
  {
    "url": "tag/C/index.html",
    "revision": "af57226827691fb7405c376f52bff71b"
  },
  {
    "url": "tag/index.html",
    "revision": "8ad473cb7381da9c2cfd453cc38f0b14"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "194483a1aa27881fc26f68a9e0b46273"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "020b488c008a7d9de69619f40722dfef"
  },
  {
    "url": "tag/Linux/page/2/index.html",
    "revision": "d4f94b87bbbe4e032e908760db863a16"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "e3f9b4a8205b3debc3e4a6446fee96b6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "558e9e90b5f471e7b3123bcdf790bcd1"
  },
  {
    "url": "timeline/index.html",
    "revision": "3cac99e04354d60615ef85e0051d385a"
  },
  {
    "url": "views/wang-luo/2022/exchange.html",
    "revision": "1c41a249fa206b6b6fb6b6ad8e3fd269"
  },
  {
    "url": "views/wang-luo/2022/zabbix.html",
    "revision": "aff042ea72b19fc6ec1fd10cc6b0ce19"
  },
  {
    "url": "views/wang-luo/2025/podmanrong-qi-duan-kou-rao-guo-ufwjie-jue-fang-an.html",
    "revision": "4386a31e47c687df8c995d24d8d2b065"
  },
  {
    "url": "views/xi-tong/2022/nginx.html",
    "revision": "c1dcc76441ea72f3a78a3a545ea21de8"
  },
  {
    "url": "views/xi-tong/2022/node.html",
    "revision": "caa4729ea41371fd24eea9161c84252f"
  },
  {
    "url": "views/xi-tong/2023/bu-shu-qemu.html",
    "revision": "a82393823acdb2c086ed50aadaacba9c"
  },
  {
    "url": "views/xi-tong/2023/da-jian-dokuwiki.html",
    "revision": "332fad24c38e16f3122bdc7db3129350"
  },
  {
    "url": "views/xi-tong/2023/mysqlji-chu.html",
    "revision": "2684165d34c4cb35bef85b8175fb980d"
  },
  {
    "url": "views/xi-tong/2023/sqlite3.html",
    "revision": "58e8703fb4ea5f382a4e4e3f3ef8ba58"
  },
  {
    "url": "views/xi-tong/2023/wikizhi-shi-ku.html",
    "revision": "140ae25cc0e003fc38148d60956776aa"
  },
  {
    "url": "views/xi-tong/2024/da-jian-k8sji-qun.html",
    "revision": "2d05f09e08c68bc1485e56108f882f8b"
  },
  {
    "url": "views/xi-tong/2024/k8sji-qun-ji-chu.html",
    "revision": "65c594cf945e0138781dd42a1154c251"
  },
  {
    "url": "views/xi-tong/2024/keepalived.html",
    "revision": "0d6ba0da881d22a285ea2169b77ee1cd"
  },
  {
    "url": "views/xi-tong/2024/mysqlan-zhuang-win.html",
    "revision": "761b63230fbc6f6b2090a17cff51d503"
  },
  {
    "url": "views/xi-tong/2024/mysqlzhu-cong-tong-bu.html",
    "revision": "60e532af3191c2d7899424269feb23ec"
  },
  {
    "url": "views/xi-tong/2024/nginx01.html",
    "revision": "e61d0f04d140dc66729f498883a987bc"
  },
  {
    "url": "views/xi-tong/2024/nginx02.html",
    "revision": "52d7b1b7ae1548768841d32dad3bb09e"
  },
  {
    "url": "views/xi-tong/2024/nginx03.html",
    "revision": "5099a45681a66a0449f4c36e5097eeee"
  },
  {
    "url": "views/xi-tong/2024/nginx04.html",
    "revision": "731af8d23d1f60b8db4a96fc90539575"
  },
  {
    "url": "views/xi-tong/2025/ubuntuxi-tong-an-zhuang.html",
    "revision": "8ee1a4fdcd34217edca6c0e3862eaab2"
  },
  {
    "url": "views/yun-wei/2022/docker.html",
    "revision": "a62c6d68dd731704c22fdd3bf3157504"
  },
  {
    "url": "views/yun-wei/2023/an-zhuang-mysql8.html",
    "revision": "cdfe9231cb803df8246bd090bb9c443a"
  },
  {
    "url": "views/yun-wei/2023/linuxan-zhuang-gpuqu-dong.html",
    "revision": "10907a3d64ff5f606f6ccc5d04daebec"
  },
  {
    "url": "views/yun-wei/2023/linuxji-chu-ming-ling.html",
    "revision": "b1cb3ee9864c1c47ad86c6be78891458"
  },
  {
    "url": "views/yun-wei/2023/linuxruan-jian-an-zhuang.html",
    "revision": "03b7df72d6f68f30febaee43d9e90486"
  },
  {
    "url": "views/yun-wei/2023/nginxzi-qi.html",
    "revision": "4a027d6b2cf9335645451ca645378858"
  },
  {
    "url": "views/yun-wei/2023/shi-jian-fu-wu-qi.html",
    "revision": "9e97e549e60ee36df835bbe79354e368"
  },
  {
    "url": "views/yun-wei/2023/sqlyu-yan.html",
    "revision": "2ab28c5e39ee67b3e9050b6fae70d07a"
  },
  {
    "url": "views/yun-wei/2024/harborcang-ku-da-jian.html",
    "revision": "cb5cf4bba2fb0583a4c8a203cbc48176"
  },
  {
    "url": "views/yun-wei/2024/linuxci-pan-kuo-rong.html",
    "revision": "de4d81ec904e24e8bd89f13a309ccc2e"
  },
  {
    "url": "views/yun-wei/2024/linuxhe-gai-bu-xiu-mian.html",
    "revision": "9ab604dea1f17c65fe3e370fe9c9db81"
  },
  {
    "url": "views/yun-wei/2025/armxia-de-sqlite3jiao-cha-bian-yi.html",
    "revision": "7388abab443638967f3507502d243e5f"
  },
  {
    "url": "views/yun-wei/2025/podmanji-tu-xing-hua-guan-li.html",
    "revision": "41f4c4f63f5e5164dd01be69aa65a470"
  },
  {
    "url": "views/yun-wei/2025/ubuntujiao-cha-bian-yi-gong-ju.html",
    "revision": "bcfb3b0f675ed0c37c1b9bc95f73f228"
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
