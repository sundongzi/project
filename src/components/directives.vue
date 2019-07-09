<template>
  <div>
    <div id="text" v-demo></div>
    <input id="ipt" v-demo/>
  </div>
</template>
<script>
export default {
  name: 'Directives',
  directives: {
    'demo': {
      inserted: function (el) {
        console.log('inserted', el)
        el.focus()
      },
      bind: function (el, binding, vnode, oldVnode) {
        el.focus()
        console.log('bind', el)
      },
      update: function (el) {
        console.log('update', el)
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
#text {
  width: 30px;
  height:30px;
  border:1px solid blue;
}
</style>
