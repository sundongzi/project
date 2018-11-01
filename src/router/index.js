import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import obj from '@/components/obj'
import arr from '@/components/arr'
import deep from '@/components/deep'
import design from '@/components/design'
import form from '@/components/form'
import socket from '@/websocket/socket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/obj',
      name: 'Obj',
      component: obj
    },
    {
      path: '/arr',
      name: 'Arr',
      component: arr
    },
    {
      path: '/deep',
      name: 'Deep',
      component: deep
    },
    {
      path: '/design',
      name: 'Design',
      component: design
    },
    {
      path: '/form',
      name: 'Form',
      component: form
    },
    {
      path: '/socket',
      name: 'Socket',
      component: socket
    }
  ]
})
