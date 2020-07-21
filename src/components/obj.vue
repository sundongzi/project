<template>
  <div>
    <child></child>
    <button @click="add">点击</button>
  </div>
</template>
<script>
// import Immutable from 'immutable'
import Child from './child'
export default {
  name: 'obj',
  components: {
    Child
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    example () {
    },
    add () {
      this.visible = !this.visible
    }
  },
  created () {
    this.example()
  },
  updated () {
    console.log('parent-update')
  }
}
</script>
<style scoped>
</style>
