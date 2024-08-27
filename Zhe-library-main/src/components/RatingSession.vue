<!-- src/components/RatingSession.vue -->
<template>
  <div>
    <h2>Rating Session</h2>
    <p>Rate our services:</p>
    <div>
      <label for="rating">Your Rating (1 to 5):</label>
      <input type="number" id="rating" v-model="rating" min="1" max="5" />
    </div>
    <button @click="submitRating">Submit Rating</button>
    <p v-if="submittedRating">Thank you for your rating of {{ submittedRating }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(1)
const submittedRating = ref(null)

function submitRating() {
  submittedRating.value = rating.value
  // 这里可以添加发送评分的逻辑，比如通过 API 提交评分
}
</script>

<style scoped>
div {
  text-align: center;
}

label {
  margin-right: 0.5rem;
}

input[type='number'] {
  width: 50px;
}
</style>
