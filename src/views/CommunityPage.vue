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

    <!-- Main Content (Community Content) -->
    <main>
      <h2>Community</h2>
      <p>Join discussions, support groups, and talk with experts.</p>
      <!-- will be developed later -->
      <router-link to="/forum">Visit Forum</router-link>
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

/* Community Page Styles */
h2 {
  color: #d35400;
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
