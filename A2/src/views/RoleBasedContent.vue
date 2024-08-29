<script setup>
import { ref, onMounted } from 'vue'

const role = ref(null)

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  role.value = user ? user.role : 'guest'
})
</script>

<template>
  <div>
    <h2>Role-Based Content</h2>
    <p v-if="role === 'admin'">Admin content</p>
    <p v-else-if="role === 'user'">User content</p>
    <p v-else>Guest content</p>
  </div>
</template>

<style scoped>
h2 {
  color: #e74c3c;
}
</style>
