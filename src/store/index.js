import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    currentUser: null,
    ratings: []
  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    ADD_USER(state, user) {
      state.users.push(user)
    },
    SET_RATINGS(state, ratings) {
      state.ratings = ratings
    }
  },
  actions: {
    initDefaultUser({ commit }) {
      // Default admin, username and password are both '123'
      const defaultUser = { username: '123', password: '123', role: 'admin' }
      commit('ADD_USER', defaultUser)
    },
    register({ commit, state }, { username, password }) {
      // Check whether the user name already exists
      const existingUser = state.users.find((user) => user.username === username)
      if (existingUser) {
        throw new Error('The user name already exists!!')
      }

      const newUser = { username, password, role: 'user' } // default role is common user
      commit('ADD_USER', newUser)
    },
    login({ commit, state }, { username, password }) {
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      )
      if (user) {
        commit('SET_USER', user)
        return user
      } else {
        throw new Error('Invalid user name or password!!')
      }
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.currentUser,
    isAdmin: (state) => state.currentUser?.role === 'admin'
  }
})
