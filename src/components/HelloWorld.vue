<script setup>
defineProps(['msg'])
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>
