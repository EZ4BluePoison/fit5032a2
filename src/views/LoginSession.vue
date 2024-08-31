<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p>Do not have an account? <router-link to="/register">Register</router-link></p>
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
    if (store.getters.isAdmin) {
      router.push('/dashboard')
    } else {
      router.push('/')
    }
  } catch (error) {
    alert('Login failed, please check the username and password.')
  }
}
</script>

<style scoped></style>
