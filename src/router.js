import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

import MainLayout from './components/MainLayout.vue'
import Home from './views/HomePage.vue'
import LoginSession from './views/LoginSession.vue'
import RegisterSession from './views/RegisterSession.vue'
import Dashboard from './views/DashBoard.vue'
import Privacy from './views/PrivacyPolicy.vue'
import Help from './views/HelpPage.vue'
import PersonalizedContent from './views/PersonalisedContent.vue'
import Community from './views/CommunityPage.vue'
import ResourceCenter from './views/ResourcesCenter.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home, meta: { requiresAuth: true } },
      {
        path: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true, requiresAdmin: true }
      },
      { path: 'privacy', component: Privacy },
      { path: 'help', component: Help },
      { path: 'personalized-content', component: PersonalizedContent },
      { path: 'community', component: Community },
      { path: 'resources', component: ResourceCenter }
    ]
  },
  { path: '/login', component: LoginSession },
  { path: '/register', component: RegisterSession }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated
  const isAdmin = store.getters.isAdmin

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresAdmin && !isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
