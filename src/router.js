import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'

import MainLayout from './components/MainLayout.vue'
import Home from './views/HomePage.vue'
import Dashboard from './views/DashBoard.vue'
import Privacy from './views/PrivacyPolicy.vue'
import Help from './views/HelpPage.vue'
import PersonalizedContent from './views/PersonalisedContent.vue'
import Community from './views/CommunityPage.vue'
import ResourceCenter from './views/ResourcesCenter.vue'
import FirebaseSigninView from './views/FirebaseRegisterView.vue'
import FirebaseRegisterView from './views/FirebaseRegisterView.vue'

import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

const routes = [
  { path: '/', redirect: '/login' }, // 默认重定向到 /login
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },

  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'home', component: Home, meta: { requiresAuth: true } },
      {
        path: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true, requiresAdmin: true }
      },
      { path: 'privacy', component: Privacy },
      { path: 'help', component: Help },
      { path: 'personalized-content', component: PersonalizedContent },
      { path: 'community', component: Community },
      { path: 'resources', component: ResourceCenter },
      { path: '/FireLogin', name: 'FireLogin', component: FirebaseSigninView },
      { path: 'register', component: FirebaseRegisterView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser

  if (to.path === '/login' && user) {
    next('/home')
  } else if (to.meta.requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router
