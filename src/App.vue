<template>
  <div id="app">
    <p v-if="loading">Loading...</p>
    <!-- 显示加载状态，避免未验证的用户访问 -->
    <router-view v-else></router-view>
    <!-- 加载完成后显示内容 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(true) // 初始化为 true，表示加载中
const auth = getAuth()

// 监听 Firebase 的用户身份变化
onAuthStateChanged(auth, (user) => {
  loading.value = false // 加载完成，停止 loading 状态
  if (user) {
    console.log('User is logged in:', user)
    if (user.email === 'admin@example.com') {
      router.push('/dashboard') // 管理员跳转到 dashboard
    } else {
      router.push('/home') // 普通用户跳转到主页
    }
  } else {
    console.log('User is logged out, redirecting to login page')
    router.push('/login') // 未登录用户跳转到登录页面
  }
})
</script>

<style scoped>
/* 样式 */
</style>
