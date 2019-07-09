<template>
<el-button type="primary" @click="handleClick">步骤2</el-button>
</template>
<script>
export default {
  name: 'step2',
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('onChangeStatus', 3)
    }
  }
}
</script>
