import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

// Firebase 配置
const firebaseConfig = {
  apiKey: 'AIzaSyBiUadCSCORNNTILHpiN-gy9-u3Ymi0BhU',
  authDomain: 'zichao-64932.firebaseapp.com',
  projectId: 'zichao-64932',
  storageBucket: 'zichao-64932.appspot.com',
  messagingSenderId: '432320286126',
  appId: '1:432320286126:web:d3f7a85f0f3178331d4c3f'
}

// 初始化 Firebase
initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
