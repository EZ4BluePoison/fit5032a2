<script setup>
import { ref } from 'vue'
import DOMPurify from 'dompurify'

// Initialize userInput and safeContent
const userInput = '&lt;script&gt;alert("XSS!")&lt;/script&gt;'

const safeContent = ref(DOMPurify.sanitize(userInput))
</script>

<template>
  <div>
    <div v-html="safeContent"></div>
  </div>
</template>
