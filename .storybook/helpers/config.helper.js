import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import config from '~/docs/plugins/vuetify.js';

Vue.use(Vuetify);
Vue.use(VueI18n);

export default new Vuetify(config);
