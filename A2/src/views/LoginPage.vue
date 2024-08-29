<!-- src/views/Login.vue -->
<template>
  <div class="login">
    <h2>Login to Your Account</h2>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" v-model="username" id="username" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

function loginUser() {
  // 简单的登录逻辑示例，假设有两个用户类型
  if (username.value === 'admin' && password.value === 'admin123') {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userRole', 'admin')
    router.push('/dashboard')
  } else if (username.value === 'user' && password.value === 'user123') {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userRole', 'user')
    router.push('/')
  } else {
    errorMessage.value = 'Invalid username or password'
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
}

.form-control {
  margin-bottom: 1rem;
}
</style>
