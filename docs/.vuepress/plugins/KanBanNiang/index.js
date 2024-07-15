const { resolve } = require('path')

module.exports = (options, context) => ({
  define() {
    const { clean, messages, theme, modelStyle, btnStyle, width, height, messageStyle } = options
    return {
      CLEAN: clean || false,
      THEME: theme || ['blackCat'],
      MESSAGES: messages || {
        welcome: '',
        home: '喵喵喵、开心',
        close: '看看我的文章呗'
      },
      MESSAGE_STYLE: messageStyle || {
        right: '1px',
        bottom: '1px'
      },
      MODEL_STYLE: modelStyle || {
        right: '1px',
        bottom: '1px',
        opacity: '0.8'
      },
      BTN_STYLE: btnStyle || {
        right: '1px',
        bottom: '1px'
      },
      WIDTH: width || 200,
      HEIGHT: height || 270
    }
  },
  name: '@vuepress-reco/vuepress-plugin-kan-ban-niang',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'KanBanNiang'
})
