<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="text" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p>Already Have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebaseConfig' // 确保正确导入 Firebase 配置

// 响应式数据
const email = ref('')
const password = ref('')
const router = useRouter()

// 注册函数
const register = async () => {
  try {
    // 使用 Firebase 注册
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    alert('Registration successful, please login.')
    router.push('/login') // 注册成功后跳转到登录页面
  } catch (error) {
    alert(error.message) // 如果发生错误，显示错误信息
  }
}
</script>

<style scoped>
/* 样式根据需求添加 */
</style>
