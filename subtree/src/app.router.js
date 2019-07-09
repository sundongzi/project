import VueRouter from 'vue-router'
import manage from '@/router/manage'
import overview from '@/router/overview'
// import store from '@/store'
const login = resolve => require(['@/views/login/login.vue'], resolve) // 登录页
const app = resolve => require(['@/App.vue'], resolve)
const routes = [
  {
    path: '/index.html',
    redirect: '/'
  },
  {
    path: '/login',
    component: login,
    meta: { noRequireAuth: true }
  },
  {
    path: '/',
    component: app,
    meta: { name: '首页' },
    children: [
      {
        path: '',
        meta: { name: '总览' },
        name: '总览'
      },
      overview,
      manage
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
// router.beforeEach((to, from, next) => {
//   // if (to.meta.keepAliveFrom && to.meta.keepAliveFrom.includes(from.name)) {
//   //   to.meta.cache = true
//   // }
//   // if (store.getters['base/isLogin$$'] !== 'success' && !to.meta.noRequireAuth) {
//   //   // @FIXME 暂时注释，不限制用户登录
//   //   next({
//   //     path: '/login',
//   //     query: {redirect: to.fullPath}
//   //   })
//   // }
//   next()
// })
export default router
