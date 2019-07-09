<template>
<el-button type="primary" @click="handleClick">步骤4</el-button>
</template>
<script>
export default {
  name: 'step4',
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('onChangeStatus', 1)
    }
  }
}
</script>
