const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  configureWebpack: (config) => {
    productionSourceMap = false;
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new UglifyJsPlugin({
            uglifyOptions: {
              warnings: false,
              output: {
                comments: false
              },
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ["console.log", "console.table"],
              },
            },
          }),
        ],
      };
    }
  },
  // 打包静态图片
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 5242880 }))
  },
  debug: false,
  port: 9998,
  base: '/',
  dest: "sugarysblog",
  theme: "reco",
  title: "SugarysBlog",
  description: "兜里有糖",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    ["link", { rel: "icon", href: "https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    type: "blog",
    huawei: false,
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "笔记", link: "/note/", icon: "reco-document" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      // {
      //   text: "相册",
      //   link: "",
      //   icon: "reco-blog",
      // },
      { text: "关于", link: "/about/", icon: "reco-account" },
    ],
    friendLink: [
      // {
      //   title: "午后南杂",
      //   desc: "Enjoy when you can, and endure when you must.",
      //   logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png",
      //   link: "https://www.recoluan.com",
      // },
      // {
      //   title: "vuepress-theme-reco",
      //   desc: "A simple and beautiful vuepress Blog & Doc theme.",
      //   logo:
      //     "https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png",
      //   link: "https://vuepress-theme-reco.recoluan.com",
      // },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    logo: "https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 9,
    // 自动形成侧边导航
    subSidebar: "auto",
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      "/note/": [
        {
          title: "Vue",
          collapsable: true,
          children: ["Vue/Vue基础笔记", "Vue/Vue组件", "Vue/Vue封装请求"],
        },
        {
          title: "C语言",
          collapsable: true,
          children: ["C语言/初识语言", "C语言/核心语法", "C语言/运算语法"],
        },
        {
          title: "Python",
          collapsable: true,
          children: ["Python/Python环境安装"],
        },
      ],
    },
    // 最后更新时间
    lastUpdated: "上次更新",
    // 作者
    author: "兜里有糖",
    authorAvatar: "https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/author.jpg",
    // 备案号
    record: "Copyright © 2021-2023 | Sugarys",
    recordLink: "https://zhonglin8659.gitee.io",
    // 项目开始时间
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      require("./plugins/BgMusic"),
      {
        audios: [
          {
            name: "悬溺",
            artist: "葛东琪",
            url: "https://sugarys.oss-cn-beijing.aliyuncs.com/bgmusic/music.mp3",
            cover: "https://sugarys.oss-cn-beijing.aliyuncs.com/bgmusic/music.png",
          }
        ],
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    [
      "permalink-pinyin",
      {
        lowercase: true,
        separator: "-",
      },
    ],
    // [
    //   "ribbon-animation",
    //   {
    //     size: 90, // 默认数据
    //     opacity: 0.3, //  透明度
    //     zIndex: -1, //  层级
    //     opt: {
    //       // 色带HSL饱和度
    //       colorSaturation: "80%",
    //       // 色带HSL亮度量
    //       colorBrightness: "60%",
    //       // 带状颜色不透明度
    //       colorAlpha: 0.6,
    //       // 在HSL颜色空间中循环显示颜色的速度有多快
    //       colorCycleSpeed: 6,
    //       // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
    //       verticalPosition: "center",
    //       // 到达屏幕另一侧的速度有多快
    //       horizontalSpeed: 200,
    //       // 在任何给定时间，屏幕上会保留多少条带
    //       ribbonCount: 2,
    //       // 添加笔划以及色带填充颜色
    //       strokeSize: 0,
    //       // 通过页面滚动上的因子垂直移动色带
    //       parallaxAmount: -0.5,
    //       // 随着时间的推移，为每个功能区添加动画效果
    //       animateSections: true,
    //     },
    //     ribbonShow: false, //点击彩带true显示false为不显示
    //     ribbonAnimationShow: true, //滑动彩带
    //   },
    // ],
    // ["cursor-effects"],
    [
      "sakura",
      {
        num: 20,
        show: true,
        zIndex: -1,
        img: {
          replace: false,
          httpUrl: "...",
        },
      },
    ],
    // [
    //   require("./plugins/KanBanNiang"),
    //   {
    //     theme: ["blackCat"],
    //     width: 200,
    //     height: 270,
    //     modelStyle: {
    //       position: "fixed",
    //       right: "90px",
    //       bottom: "-28px",
    //       opacity: "0.9",
    //     },
    //     messageStyle: {
    //       position: "fixed",
    //       right: "100px",
    //       bottom: "220px",
    //     },
    //     btnStyle: {
    //       bottom: "50px",
    //       right: "110px",
    //     },
    //   },
    // ],
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功",
        },
      },
    ],
  ],
};
