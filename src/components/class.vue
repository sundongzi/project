<template>
  <div></div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    init () {
      let person = new class {
        constructor (name) {
          this.name = name
        }
        sayName () {
          console.log(this.name)
        }
      }('张三')
      person.sayName() // "张三"
    }
  },
  created () {
    this.init()
  }
}
</script>
<style scoped>
</style>
