<template>
  <div style="color:red">
    {{title}}{{name}}
    <button @click="change">改变</button>
  </div>
</template>
<script>
export default {
  name: 'my-child',
  props: ['title', 'name'],
  methods: {
    change () {
      this.$emit('update:title', '新标题')
    }
  },
  mounted () {
    console.log('my-child', this.$attrs)
  }
}
</script>
