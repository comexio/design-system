import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ColorBox from '@/components/sections/colors/ColorBox'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.component('color-box', ColorBox)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
