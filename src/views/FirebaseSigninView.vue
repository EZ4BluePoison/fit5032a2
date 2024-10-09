<template>
  <div>
    <h1>Create an Account</h1>
    <p>
      <input type="text" placeholder="Email" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password" />
    </p>
    <p>
      <button @click="register">Save to Firebase</button>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

// 使用 ref 来存储 email 和 password 的输入
const email = ref('')
const password = ref('')

// 获取 Vue Router 实例
const router = useRouter()

// 获取 Firebase 认证实例
const auth = getAuth()

// 注册函数：调用 Firebase 的 createUserWithEmailAndPassword 创建新用户
const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Firebase Register Successful!')
      // 注册成功后，跳转到 "/FireLogin" 页面
      router.push('/FireLogin')
    })
    .catch((error) => {
      console.log(error.code) // 输出错误代码
    })
}
</script>
