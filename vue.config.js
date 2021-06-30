const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname)
      }
    },
    externals: [
      'dayjs',
      'moment',
      'ramda',
      'sortablejs'
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
