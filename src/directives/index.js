import Vue from 'vue'
const requireComponent = require.context(
  '.',
  false,
  /^((?!index).)*\.js$/
)
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  if (!componentConfig.default) {
    return
  }
  let { name, hooks } = componentConfig.default
  Vue.directive(name, hooks)
})
