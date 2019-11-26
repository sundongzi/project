<template>
  <div ref="copyRef" @click="copy">
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>
<script>
export default {
  name: 'pass-manage',
  // inheritAttrs: false,
  data () {
    return {
      options: [],
      message: '新复制的内容',
      obj: {
        title: '标题',
        name: '名字123'
      }
    }
  },
  methods: {
    copy () {
      this.$copyText(this.message).then(res => {
        console.log('res', res)
      })
    }
  },
  mounted () {

  },
  created () {
    this.value = 2
  },
  components: {
    // myChild
  }
}
</script>
