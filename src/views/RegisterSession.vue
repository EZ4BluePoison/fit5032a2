<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p>Already Have an account? <router-link to="/login">Login</router-link></p>
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
    alert('Registration successful, please login.')
    router.push('/login')
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped></style>
