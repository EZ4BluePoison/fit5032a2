import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomePage.vue'
import Dashboard from './views/DashBoard.vue'
import Privacy from './views/PrivacyPolicy.vue'
import Help from './views/HelpPage.vue'
import PersonalizedContent from './views/PersonalisedContent.vue'
import Community from './views/CommunityPage.vue'
import ResourceCenter from './views/ResourcesCenter.vue'

import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import { getAuth } from 'firebase/auth'

const routes = [
  { path: '/', component: Home }, // 主页可以对所有用户开放
  { path: '/login', component: LoginPage }, // 登录页面对所有用户开放
  { path: '/register', component: RegisterPage }, // 注册页面对所有用户开放
  { path: '/home', component: Home }, // 主页
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }, // 只有登录用户才能访问
  { path: '/privacy', component: Privacy }, // 隐私政策页面开放
  { path: '/help', component: Help }, // 帮助页面开放
  { path: '/personalized-content', component: PersonalizedContent }, // 个性化内容页面开放
  { path: '/community', component: Community }, // 社区页面开放
  { path: '/resources', component: ResourceCenter }, // 资源中心开放
  { path: '/FireLogin', name: 'FireLogin', component: LoginPage } // Firebase 登录
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫，只对设置了 `requiresAuth` 的页面进行保护
router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser

  // 如果页面需要登录才能访问且用户未登录，跳转到登录页面
  if (to.meta.requiresAuth && !user) {
    next('/login')
  } else {
    next() // 允许访问
  }
})

export default router
