// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import RatingSession from './components/RatingSession.vue'
import LoginSession from './components/LoginSession.vue'
import RoleBasedContent from './components/RoleBasedContent.vue'

const routes = [
  { path: '/', component: RatingSession }, // 默认路由
  { path: '/login', component: LoginSession },
  { path: '/role-based', component: RoleBasedContent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
