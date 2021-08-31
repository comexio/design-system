import Vue from 'vue';
import Vuetify from 'vuetify';
import Design from '@logcomex/design'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '@logcomex/design/dist/design.css'

Vue.use(Vuetify);
Vue.use(Design.install);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5C068C',
        secondary: '#FF8F1C',
        accent: '#FFFFFF',
        blurred: '#9F6CBB',
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
