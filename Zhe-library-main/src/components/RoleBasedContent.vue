<!-- src/components/RoleBasedContent.vue -->
<template>
  <div>
    <h2>Role-Based Content</h2>
    <div v-if="role === 'admin'">
      <p>Welcome, Admin! Here are your admin tools:</p>
      <!-- 管理员工具或信息 -->
    </div>
    <div v-else-if="role === 'user'">
      <p>Welcome, User! Here is your personalized content:</p>
      <!-- 普通用户内容 -->
    </div>
    <div v-else>
      <p>Welcome, Guest! Please log in to see more content.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const role = ref('user') // 假设用户角色是 'admin' 或 'user'

// 在实际应用中，这个值可能来自 API 或用户登录信息
</script>

<style scoped>
div {
  text-align: center;
}

p {
  margin: 1rem 0;
}
</style>
