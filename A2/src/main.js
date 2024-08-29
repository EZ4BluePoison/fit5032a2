// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // 确保这里正确引入了 Vuex Store

createApp(App)
  .use(router)
  .use(store) // 将 Vuex Store 应用到 Vue 实例中
  .mount('#app')
