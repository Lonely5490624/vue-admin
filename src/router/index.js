import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/callcenter',
  name: 'callcenter',
  component: Layout,
  children: [{
    path: 'seats',
    component: () => import('../views/seats/seats.vue')
  }, {
    path: 'nav2',
    component: () => import('../views/nav2/nav2.vue')
  }, {
    path: 'nav3',
    component: () => import('../views/nav3/nav3.vue')
  }, {
    path: '*',
    component: () => import('../views/layout/404.vue')
  }]
}, {
  path: '*',
  component: () => import('../views/layout/404.vue')
}]

export default new VueRouter({
  routes
})
