const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname)
      }
    },
    externals: [
      'moment',
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_globals.scss";
        `
      }
    }
  }
}
