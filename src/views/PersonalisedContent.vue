<script setup>
import { ref, onMounted } from 'vue'

const personalisedContent = ref([])

onMounted(() => {
  // Fetch personalized content based on user's preferences
  personalisedContent.value = JSON.parse(localStorage.getItem('personalisedContent')) || []
})
</script>

<template>
  <div>
    <!-- Header with Navigation -->
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/help">Help</router-link>
        <router-link to="/personalized-content">Personalized Content</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/resources">Resource Center</router-link>
        <router-link to="/FireLogin">Firebase Login</router-link>
      </nav>
    </header>

    <!-- Main Content (Personalized Content) -->
    <main>
      <h2>Your Personalised Content</h2>
      <ul>
        <li v-for="content in personalisedContent" :key="content.id">{{ content.title }}</li>
      </ul>
    </main>

    <!-- Footer -->
    <footer>
      <p>
        &copy; If you need any help, please contact
        <a href="mailto:zhee0056@student.monash.edu">zhee0056@student.monash.edu</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* Header and Navigation Styles */
header {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
}

/* Personalized Content Styles */
h2 {
  color: #2e86c1;
}

main {
  padding: 20px;
  line-height: 1.6;
}

/* Footer Styles */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
}
</style>
