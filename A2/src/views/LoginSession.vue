<!-- LoginSession.vue -->
<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="用户名" required />
      <input v-model="password" type="password" placeholder="密码" required />
      <button type="submit">登录</button>
    </form>
    <p>还没有账号？ <router-link to="/register">注册</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const username = ref('')
const password = ref('')
const router = useRouter()
const store = useStore()

const login = async () => {
  try {
    const user = await store.dispatch('login', {
      username: username.value,
      password: password.value
    })
    // 登录成功后重定向到首页
    router.push('/')
  } catch (error) {
    alert('登录失败，请检查用户名和密码。')
  }
}
</script>

<style scoped>
/* 样式省略，添加适合的表单样式 */
</style>
