<template>
  <div>
    <h2>Resources Center</h2>
    <p>Find articles, guides, and FAQs about mental health.</p>
    <!-- Dynamic content -->
    <ul>
      <li v-for="resource in resources" :key="resource.id">
        <router-link :to="resource.link">{{ resource.title }}</router-link>
      </li>
    </ul>
    <!-- External links -->
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const resources = ref([])
const externalLink1 = ref(
  'https://www.outdoorsinc.org.au/getoutdoors/?gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQv_tafX8_tpC8uBKCskCzI7i94qQh9qcvrDA9wgyhBapT9Y-DeaflIaAuE1EALw_wcB'
)
const externalLink2 = ref(
  'https://www.mentalhealthonline.org.au/?gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQsktxbdK-a7lD5INz6Et5B1B2GPyh7BILHJaIu0PdOFd0OjyospMnMaAha_EALw_wcB'
)

// Fetch resources from API on component mount
onMounted(async () => {
  try {
    const response = await fetch('https://api.example.com/resources')
    const data = await response.json()
    resources.value = data
  } catch (error) {
    console.error('Failed to fetch resources:', error)
  }
})
</script>

<style scoped>
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
</style>
