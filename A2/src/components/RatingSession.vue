<!-- src/components/RatingSession.vue -->
<template>
  <div class="container mt-5">
    <h2>Rating Session</h2>
    <p>Rate our services:</p>
    <div class="mb-3">
      <label for="rating" class="form-label">Your Rating (1 to 5):</label>
      <input type="number" id="rating" v-model="rating" min="1" max="5" class="form-control" />
    </div>
    <button class="btn btn-primary" @click="submitRating">Submit Rating</button>
    <p v-if="submittedRating">Thank you for your rating of {{ submittedRating }}!</p>
    <p v-if="averageRating">Average Rating: {{ averageRating }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const rating = ref(1)
const submittedRating = ref(null)
const averageRating = ref(null)

function submitRating() {
  submittedRating.value = rating.value

  // 从本地存储中获取现有评分，计算新的平均评分
  let ratings = JSON.parse(localStorage.getItem('ratings')) || []
  ratings.push(rating.value)
  localStorage.setItem('ratings', JSON.stringify(ratings))

  calculateAverageRating()
}

function calculateAverageRating() {
  const ratings = JSON.parse(localStorage.getItem('ratings')) || []
  if (ratings.length > 0) {
    const sum = ratings.reduce((acc, curr) => acc + parseInt(curr), 0)
    averageRating.value = (sum / ratings.length).toFixed(2)
  }
}

onMounted(() => {
  calculateAverageRating()
})
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
