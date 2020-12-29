const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname)
      }
    },
    externals: [
      // 'moment',
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_main.scss";
        `
      }
    }
  }
}
