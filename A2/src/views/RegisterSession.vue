<!-- RegisterSession.vue -->
<template>
  <div class="register-container">
    <h2>注册</h2>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="用户名" required />
      <input v-model="password" type="password" placeholder="密码" required />
      <button type="submit">注册</button>
    </form>
    <p>已有账号？ <router-link to="/login">登录</router-link></p>
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

const register = async () => {
  try {
    await store.dispatch('register', {
      username: username.value,
      password: password.value
    })
    alert('注册成功，请登录。')
    router.push('/login')
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped>
/* 样式省略，添加适合的表单样式 */
</style>
