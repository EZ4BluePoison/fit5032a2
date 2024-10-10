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

    <!-- Main Content (HomePage Content) -->
    <main class="top-center-content">
      <h1>Welcome to the Health Charity Platform</h1>
      <p>Your journey to better mental health starts here.</p>
      <div class="image-container">
        <div class="image-item">
          <img src="@/assets/Home2.jpg" alt="Logo" class="responsive-img" />
          <div class="rating-container">
            <span>Rate this image:</span>
            <div class="rating">
              <button @click="rateImage('home2', 1)" :class="{ active: home2Rating >= 1 }">
                ☆
              </button>
              <button @click="rateImage('home2', 2)" :class="{ active: home2Rating >= 2 }">
                ☆
              </button>
              <button @click="rateImage('home2', 3)" :class="{ active: home2Rating >= 3 }">
                ☆
              </button>
              <button @click="rateImage('home2', 4)" :class="{ active: home2Rating >= 4 }">
                ☆
              </button>
              <button @click="rateImage('home2', 5)" :class="{ active: home2Rating >= 5 }">
                ☆
              </button>
            </div>
            <p>Rating: {{ home2Rating }}/5</p>
          </div>
        </div>
        <div class="image-item">
          <img src="@/assets/Homepage.jpg" alt="Logo" class="responsive-img" />
          <div class="rating-container">
            <span>Rate this image:</span>
            <div class="rating">
              <button @click="rateImage('homepage', 1)" :class="{ active: homepageRating >= 1 }">
                ☆
              </button>
              <button @click="rateImage('homepage', 2)" :class="{ active: homepageRating >= 2 }">
                ☆
              </button>
              <button @click="rateImage('homepage', 3)" :class="{ active: homepageRating >= 3 }">
                ☆
              </button>
              <button @click="rateImage('homepage', 4)" :class="{ active: homepageRating >= 4 }">
                ☆
              </button>
              <button @click="rateImage('homepage', 5)" :class="{ active: homepageRating >= 5 }">
                ☆
              </button>
            </div>
            <p>Rating: {{ homepageRating }}/5</p>
          </div>
        </div>
      </div>
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

<script>
export default {
  data() {
    return {
      home2Rating: 0,
      homepageRating: 0,
      email: 'zhee0056@student.monash.edu' // 添加 email 数据
    }
  },
  methods: {
    rateImage(image, rating) {
      if (image === 'home2') {
        this.home2Rating = rating
      } else if (image === 'homepage') {
        this.homepageRating = rating
      }
    }
  }
}
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

/* Main Content Styles */
.top-center-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding-top: 20px;
  text-align: center;
}

.image-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.responsive-img {
  flex: 1;
  max-width: 45%;
  height: auto;
}

.rating-container {
  margin-top: 10px;
}

.rating {
  display: flex;
  gap: 5px;
}

.rating button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: gray;
}

.rating button.active {
  color: red;
}

.rating p {
  margin-top: 5px;
}

/* Footer Styles */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
}
</style>
