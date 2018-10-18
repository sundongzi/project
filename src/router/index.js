import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import obj from '@/components/obj'
import arr from '@/components/arr'

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
    }
  ]
})
