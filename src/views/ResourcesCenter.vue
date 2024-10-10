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

    <!-- Main Content (Resources Center) -->
    <main>
      <h2>Resources Center</h2>
      <p>Find articles, guides, and FAQs about mental health.</p>

      <!-- Dynamic content: List of resources -->
      <ul>
        <li v-for="resource in resources" :key="resource.id">
          <router-link :to="resource.link">{{ resource.title }}</router-link>
        </li>
      </ul>

      <!-- External links to other resources -->
      <div class="external-links">
        <p>Check out these resources:</p>
        <ul>
          <li>
            <a :href="externalLink1" target="_blank" rel="noopener noreferrer">
              Outdoor Resources Inc
            </a>
          </li>
          <li>
            <a :href="externalLink2" target="_blank" rel="noopener noreferrer">
              Mental Health Online
            </a>
          </li>
        </ul>
      </div>

      <!-- Email form for sending an email with attachment -->
      <div class="email-form">
        <h3>Send an Email with Attachment</h3>
        <form @submit.prevent="sendEmail">
          <input v-model="email.to" type="email" placeholder="Recipient's Email" required />
          <input v-model="email.subject" type="text" placeholder="Subject" required />
          <textarea v-model="email.text" placeholder="Email body" required></textarea>
          <input type="file" @change="handleFileUpload" required />
          <button type="submit">Send Email</button>
        </form>
      </div>
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

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Dynamic content: List of resources
const resources = ref([])

// External links
const externalLink1 = ref(
  'https://www.outdoorsinc.org.au/getoutdoors/?gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQv_tafX8_tpC8uBKCskCzI7i94qQh9qcvrDA9wgyhBapT9Y-DeaflIaAuE1EALw_wcB'
)
const externalLink2 = ref(
  'https://www.mentalhealthonline.org.au/?gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQsktxbdK-a7lD5INz6Et5B1B2GPyh7BILHJaIu0PdOFd0OjyospMnMaAha_EALw_wcB'
)

// Email form data
const email = ref({
  to: '',
  subject: '',
  text: ''
})

const attachment = ref(null)

// Handle file upload and convert to Base64
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onload = () => {
    attachment.value = {
      content: reader.result.split(',')[1], // Base64 encoded file content
      filename: file.name,
      type: file.type
    }
  }
  reader.readAsDataURL(file)
}

// Send email with attachment
const sendEmail = async () => {
  try {
    const response = await axios.post('http://localhost:3000/send-email', {
      to: email.value.to,
      subject: email.value.subject,
      text: email.value.text,
      attachment: attachment.value
    })
    alert('Email sent successfully!')
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('Failed to send email.')
  }
}

// Fetch resources from API on mount
onMounted(async () => {
  try {
    const response = await fetch('https://api.example.com/resources') // Replace with your API endpoint
    const data = await response.json()
    resources.value = data
  } catch (error) {
    console.error('Failed to fetch resources:', error)
  }
})
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

/* Resources Center Styles */
h2 {
  color: #8e44ad;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

.external-links {
  margin-top: 2rem;
}

.external-links ul {
  list-style-type: none;
  padding: 0;
}

.external-links li {
  margin: 0.5rem 0;
}

/* Email Form Styles */
.email-form {
  margin-top: 3rem;
}

.email-form input,
.email-form textarea {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
}

.email-form button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

.email-form button:hover {
  background-color: #2980b9;
}

/* Footer Styles */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
}
</style>
