// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import socket from '@/socket/index.js'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(axios)
// Vue.use(socket)
Vue.prototype.$request = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
