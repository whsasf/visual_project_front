import Vue from 'vue'
import VueRouter from 'vue-router'
import newData from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '当前呈现',
    component: newData
  },
  {
    path: '/totalvisual',
    name: '累积呈现',
    component: () => import('../views/totalData.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
