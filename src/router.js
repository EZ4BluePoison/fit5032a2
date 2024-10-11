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
  { path: '/', component: Home },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/home', component: Home },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/privacy', component: Privacy },
  { path: '/help', component: Help },
  { path: '/personalized-content', component: PersonalizedContent },
  { path: '/community', component: Community },
  { path: '/resources', component: ResourceCenter },
  { path: '/FireLogin', name: 'FireLogin', component: LoginPage },
  { path: '/FireRegister', name: 'FireRegister', component: RegisterPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser

  if (to.meta.requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router
