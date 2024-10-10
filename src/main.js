import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

//  Firebase
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is authenticated:', user.email)

    if (user.email === 'admin@example.com') {
      router.push('/dashboard')
    } else {
      router.push('/home')
    }
  } else {
    console.log('User not authenticated, redirecting to login...')
    router.push('/login')
  }

  app.use(router).mount('#app')
})
