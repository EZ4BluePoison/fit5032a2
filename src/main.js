import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const app = createApp(App)

// Initialize the default user in Vuex store
store.dispatch('initDefaultUser')

app.use(store)
app.use(router)
app.mount('#app')
