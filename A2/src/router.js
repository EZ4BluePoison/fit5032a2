// router.js
import { createRouter, createWebHistory } from 'vue-router'
import store from './store' // 引入Vuex Store
import Home from './views/HomePage.vue'
import LoginSession from './views/LoginSession.vue'
import RegisterSession from './views/RegisterSession.vue'
// 引入其他视图组件...

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true } }, // 需要登录才能访问的路由
  { path: '/login', component: LoginSession },
  { path: '/register', component: RegisterSession }
  // 定义其他视图的路由，并根据需要设置 meta: { requiresAuth: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated // 检查用户是否已登录
  if (to.meta.requiresAuth && !isAuthenticated) {
    // 如果路由需要认证且用户未登录，重定向到登录页面
    next('/login')
  } else {
    next() // 否则允许进入该页面
  }
})

export default router
