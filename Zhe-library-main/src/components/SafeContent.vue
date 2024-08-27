<script setup>
import { ref } from 'vue'
import DOMPurify from 'dompurify'

// 初始化 userInput 和 safeContent
const userInput = '&lt;script&gt;alert("XSS!")&lt;/script&gt;'

const safeContent = ref(DOMPurify.sanitize(userInput))
</script>

<template>
  <div>
    <!-- 安全地渲染HTML内容 -->
    <div v-html="safeContent"></div>
  </div>
</template>
