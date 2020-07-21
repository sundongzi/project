<template>
<div>
  <ul>
    <li v-for="item in data" :key="item">{{item}}</li>
  </ul>
  <div>
    {{testObj.name}}
  </div>
  <el-button @click="changeObj">修改</el-button>
</div>

</template>
<script>
// import hello from './hello.js'
export default {
  name: 'child',
  // extends: hello,
  props: {
    testData: Array,
    testObj: Object
  },
  computed: {
    isShow () {
      return this.$parent.visible
    }
  },
  data () {
    return {
      text: '测试111',
      data: this.testData,
      obj: this.testObj
    }
  },
  methods: {
    changeObj () {
      this.obj.name = '111111'
      // console.log('this.testObj', this.testObj)
    }
  },
  mounted () {
    console.log('this.', this.$attrs)
  },
  updated () {
    console.log('child-update')
  }
}
</script>
