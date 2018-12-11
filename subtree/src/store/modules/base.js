import { BASE } from '../type'
const { IS_LOGIN, USER_NAME, TOKEN } = BASE
export default {
  namespaced: true,
  state: {
    isLogin: '',
    userName: '',
    token: ''
  },
  actions: {
    getters ({state, commit, rootState}) {

    }
  },
  mutations: {
    [IS_LOGIN] (state, payLoad) {
      state.isLogin = payLoad
    },
    [USER_NAME] (state, payload) {
      state.userName = payload
    },
    [TOKEN] (state, payload) {
      state.token = payload
    }
  },
  getters: {
    [IS_LOGIN] (state) {
      return state.isLogin || JSON.parse(window.localStorage.getItem(`base/${IS_LOGIN}`))
    },
    [USER_NAME] (state) {
      return state.userName || JSON.parse(window.localStorage.getItem(`base/${USER_NAME}`))
    },
    [TOKEN] (state) {
      return state.token || JSON.parse(window.localStorage.getItem(`base/${TOKEN}`))
    }
  }
}
