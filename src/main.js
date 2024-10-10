import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

// 初始化 Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBiUadCSCORNNTILHpiN-gy9-u3Ymi0BhU',
  authDomain: 'zichao-64932.firebaseapp.com',
  projectId: 'zichao-64932',
  storageBucket: 'zichao-64932.appspot.com',
  messagingSenderId: '432320286126',
  appId: '1:432320286126:web:d3f7a85f0f3178331d4c3f'
}
initializeApp(firebaseConfig)

const auth = getAuth()
const app = createApp(App)

// 在 Firebase 完成身份验证后再启动应用
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is authenticated:', user.email)
    // 根据用户角色跳转
    if (user.email === 'admin@example.com') {
      router.push('/dashboard') // 管理员重定向到 dashboard
    } else {
      router.push('/home') // 普通用户重定向到 home
    }
  } else {
    console.log('User not authenticated, redirecting to login...')
    router.push('/login') // 未登录用户跳转到登录页面
  }

  app.use(router).mount('#app') // 在身份验证完成后再启动应用
})
