import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ColorBox from '@/components/sections/colors/ColorBox'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.component('color-box', ColorBox)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
