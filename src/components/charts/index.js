import Bar from './bar.vue'
const components = [
  Bar
]
export default {
  install (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}
