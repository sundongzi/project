import empty from '@/views/keepEmpty.vue'
import overview from '../views/overview/overview.vue'
export default {
  path: '/overview',
  component: empty,
  name: 'overviewww',
  meta: {name: '首页'},
  children: [
    {
      path: 'all',
      name: 'overview',
      component: overview,
      meta: {name: '总览', keepAliveFrom: ['manage']}
    }
  ]
}
