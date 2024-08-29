<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <h2>Admin Dashboard</h2>
    <p>Welcome, Admin!</p>
    <p>Here is an overview of the application data:</p>
    <ul>
      <li>Total Users: {{ totalUsers }}</li>
      <li>Average Rating: {{ averageRating }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const totalUsers = ref(10) // 示例数据，可以从实际的API或数据库中获取
const averageRating = ref('4.2') // 示例数据，可以从实际的API或数据库中获取

// 你可以在此处添加其他逻辑来从API获取数据或处理业务逻辑
</script>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}
</style>
