import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Typography from '../views/Typography.vue'
import Icons from '../views/Icons.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
