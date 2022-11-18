import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6613D0',
        secondary: '#FE8F1C',
        accent: '#FFFFFF',
        blurred: '#5B11BA',
        error: '#D54A46',
        info: '#26A69A',
        success: '#72C96A',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
