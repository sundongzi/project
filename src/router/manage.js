import empty from '@/views/keepEmpty.vue'
const passManage = resolve => require(['@/views/manage/passManage.vue'], resolve)
export default {
  path: '/manage',
  component: empty,
  meta: { name: '管理' },
  children: [
    {
      path: 'passmanage',
      component: passManage,
      name: 'manage',
      meta: { name: '密码管理' }
    }
  ]
}
