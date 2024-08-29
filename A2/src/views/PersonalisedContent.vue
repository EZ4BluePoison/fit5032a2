<script setup>
import { ref, onMounted } from 'vue'

const personalisedContent = ref([])

onMounted(() => {
  // Fetch personalized content based on user's preferences
  // Example: Fetch from API or local storage
  personalisedContent.value = JSON.parse(localStorage.getItem('personalisedContent')) || []
})
</script>

<template>
  <div>
    <h2>Your Personalised Content</h2>
    <ul>
      <li v-for="content in personalisedContent" :key="content.id">{{ content.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #2e86c1;
}
</style>
