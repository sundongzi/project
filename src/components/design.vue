<template>
  <div class="design-container"></div>
</template>
<script>
export default {
  name: 'Design',
  data () {
    return {

    }
  },
  methods: {
    thisOpe () {
      this.name = '张三'
      this.age = 18
      return {
        name: '李四'
      }
    },
    singTon (param) {
      this.message = param
      this.flag = null
    }
  },
  mounted () {
    // let obj = this.thisOpe()
    var SingTonFn = function (name) {
      this.name = name
      this.flag = null
    }
    SingTonFn.prototype.getName = function () {
      console.log('1111', this.name)
    }
    SingTonFn.getMes = function (message) {
      if (!this.flag) {
        this.flag = new SingTonFn(message)
      }
      return this.flag
    }
    console.log('fn', SingTonFn.getMes('成功') === SingTonFn.getMes())
    console.log('fn', SingTonFn.getMes('失败'))
  }
}
</script>
