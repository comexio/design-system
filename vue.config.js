const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname)
      }
    },
    externals: [
      'core-js',
      'dayjs',
      'moment',
      'ramda',
      'sortablejs',
      'vue',
      'vue-class-component',
      'vue-i18n',
      'vue-property-decorator',
      'vuetify',
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
