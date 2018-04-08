import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import plug from './plug'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    ...modules
  },
  plug
})
export default store
