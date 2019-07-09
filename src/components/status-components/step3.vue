<template>
<el-button type="primary" @click="handleClick">步骤3</el-button>
</template>
<script>
export default {
  name: 'step3',
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('onChangeStatus', 4)
    }
  }
}
</script>
