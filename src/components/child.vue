<template>
  <div>
    <slot v-bind:obj="obj">
      {{obj.title}}
    </slot>
  </div>
</template>
<script>
import hello from './hello.js'
export default {
  name: 'child',
  extends: hello,
  data () {
    return {
      obj: {
        title: '标题',
        name: '名字'
      },
      text: '测试111'
    }
  },
  mounted () {
    console.log('this.', this.$attrs)
  }
}
</script>
