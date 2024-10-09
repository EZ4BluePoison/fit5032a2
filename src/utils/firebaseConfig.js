import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBiUadCSCORNNTILHpiN-gy9-u3Ymi0BhU',
  authDomain: 'zichao-64932.firebaseapp.com',
  projectId: 'zichao-64932',
  storageBucket: 'zichao-64932.appspot.com',
  messagingSenderId: '432320286126',
  appId: '1:432320286126:web:d3f7a85f0f3178331d4c3f'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
