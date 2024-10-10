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

    <!-- Main Content (HelpPage Content) -->
    <main>
      <h2>Help</h2>
      <p>If you need assistance, please contact our support team.</p>

      <!-- Email link -->
      <p>
        Email: <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
      <br />

      <!-- Phone number links -->
      <p>
        Phonenumber:<br />
        <a :href="`tel:${phone1}`">{{ phone1 }}</a
        ><br />
        <a :href="`tel:${phone2}`">{{ phone2 }}</a>
      </p>
    </main>

    <!-- Footer -->
    <footer>
      <p>
        &copy; If you need any help, please contact
        <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
const email = 'zhee0056@student.monash.edu'
const phone1 = '+86 18015316517'
const phone2 = '+61 472778808'
</script>

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

/* HelpPage Styles */
h2 {
  color: #27ae60;
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
