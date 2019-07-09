<template>
<el-button type="primary" @click="handleClick">步骤1</el-button>
</template>
<script>
export default {
  name: 'step1',
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('onChangeStatus', 2)
    }
  },
  created () {
    console.log('step1', this.foo)
  }
}
</script>
