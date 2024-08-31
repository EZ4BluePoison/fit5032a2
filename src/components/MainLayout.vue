<template>
  <div class="main-layout">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/help">Help</router-link>
        <router-link to="/personalized-content">Personalized Content</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/resources">Resource Center</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>
        &copy; If you need any help, please contact
        <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      email: 'zhee0056@student.monash.edu'
    }
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
}

main {
  flex-grow: 1;
  padding: 20px;
}

footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
}
</style>
