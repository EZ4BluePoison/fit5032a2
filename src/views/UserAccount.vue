<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'))
})
</script>

<template>
  <div>
    <h2>Your Account</h2>
    <p v-if="user">Welcome, {{ user.name }}!</p>
    <router-link to="/login" v-else>Login or Register</router-link>
  </div>
</template>

<style scoped>
h2 {
  color: #2980b9;
}
</style>
