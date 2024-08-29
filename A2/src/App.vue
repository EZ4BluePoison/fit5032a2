<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="Welcome to Health App" />
      </div>
    </header>

    <main>
      <router-view />
      <!-- 这里应该显示当前路由对应的组件 -->
    </main>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
/* 样式省略，添加你需要的样式 */
</style>
