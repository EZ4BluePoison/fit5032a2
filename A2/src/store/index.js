import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [], // 添加一个数组来存储注册的用户
    currentUser: null
  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    ADD_USER(state, user) {
      state.users.push(user)
    }
  },
  actions: {
    register({ commit, state }, { username, password }) {
      // 检查用户名是否已存在
      const existingUser = state.users.find((user) => user.username === username)
      if (existingUser) {
        throw new Error('用户名已存在')
      }
      // 创建新用户并存储
      const newUser = { username, password }
      commit('ADD_USER', newUser)
    },
    login({ commit, state }, { username, password }) {
      // 在用户列表中查找匹配的用户
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      )
      if (user) {
        commit('SET_USER', user)
        return user
      } else {
        throw new Error('无效的用户名或密码')
      }
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.currentUser
  }
})
