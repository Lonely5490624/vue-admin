import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'views/login/login.vue'
import Layout from 'views/layout/layout.vue'

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

const router = new VueRouter({
  routes
})

/*
 * 1、先判断token是否有效
 * 2、token有效：判断当前路由是否为login
 *   2-1、前往路由为login：则跳至callcenter路由
 *   2-2、前往路由不为login：不做任何操作
 * 3、token无效：判断当前路由是否为login
 *   3-1、前往路由为login：不做任何操作
 *   3-2、前往路由不为login：先提示‘token失效’，再延迟跳至login路由
 */
router.beforeEach((to, from, next) => {
  let currentRoute = to.name
  // 这里只是判断token是否存在
  if (window.localStorage.getItem('token')) {
    if (currentRoute === 'login') {
      next('/callcenter')
    } else {
      next()
    }
  } else {
    if (currentRoute !== 'login') {
      alert('token失效，请重新登录！')
      next('/login')
    } else {
      next()
    }
  }
})

export default router
