<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isAuthenticated = ref(false)
const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('user')
  isAuthenticated.value = false
  router.push('/login')
}
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/personalised">Personalised Content</router-link></li>
      <li><router-link to="/resources">Resources</router-link></li>
      <li><router-link to="/community">Community</router-link></li>
      <li><router-link to="/help">Help</router-link></li>
      <li><router-link to="/privacy">Privacy Policy</router-link></li>
      <li v-if="isAuthenticated"><button @click="handleLogout">Logout</button></li>
      <li v-else><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin-right: 1rem;
}

a {
  color: white;
  text-decoration: none;
}

button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
