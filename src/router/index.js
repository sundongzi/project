import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import obj from '@/components/obj'
import arr from '@/components/arr'
import deep from '@/components/deep'
import design from '@/components/design'
import form from '@/components/form'
import socket from '@/websocket/socket.vue'
// import cropper from '@/components/cropper'
import proxy from '@/components/proxy'
// import html2Canvas from '@/components/html2-canvas'
import rightMenu from '@/components/right-menu'
import directives from '@/components/directives'
// import clipboard from '@/components/clipboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { path: '/form' }
    },
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
    },
    // {
    //   path: '/cropper',
    //   name: 'cropper',
    //   component: cropper
    // },
    {
      path: '/proxy',
      name: 'proxy',
      component: proxy
    },
    // {
    //   path: '/html2Canvas',
    //   name: 'html2-canvas',
    //   component: html2Canvas
    // },
    {
      path: '/right-menu',
      name: 'right-menu',
      component: rightMenu
    },
    {
      path: '/directives',
      name: 'directives',
      component: directives
    }
    // {
    //   path: '/clipboard',
    //   name: 'clipboard',
    //   component: clipboard
    // }
  ]
})
