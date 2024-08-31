<template>
  <div class="dashboard">
    <h2>Admin Dashboard</h2>
    <p>Welcome, Admin!</p>
    <p>Here is an overview of the application data:</p>
    <ul>
      Total Users(containing the same user duplicated login):
      {{
        totalUsers
      }}<br />

      Average Rating:
      {{
        averageRating
      }}
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

// Access the Vuex store
const store = useStore()

// Initialize default data when the component is mounted
onMounted(() => {
  store.dispatch('initDefaultUser')
})

// Compute totalUsed and averageRating from Vuex store
const totalUsers = computed(() => store.state.users.length)
const averageRating = computed(() => {
  const ratings = store.state.ratings || []
  if (ratings.length === 0) return 'N/A'
  const sum = ratings.reduce((acc, rating) => acc + rating, 0)
  return (sum / ratings.length).toFixed(1)
})
</script>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}
</style>
