<!-- src/components/LoginSession.vue -->
<template>
  <div>
    <h2>Login Session</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="loginMessage">{{ loginMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const loginMessage = ref('')

function handleLogin() {
  if (username.value && password.value) {
    // 在这里处理登录逻辑，例如调用 API 进行认证
    loginMessage.value = 'Login successful!'
  } else {
    loginMessage.value = 'Please enter both username and password.'
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div {
  margin-bottom: 1rem;
}

label {
  margin-right: 0.5rem;
}

input {
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
}
</style>
