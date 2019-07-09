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
  name: 'manage',
  // inheritAttrs: false,
  data () {
    return {
      options: [{
          value: 1,
          label: '黄金糕'
        }, {
          value: 2,
          label: '双皮奶'
        }, {
          value: 3,
          label: '蚵仔煎'
        }, {
          value: 4,
          label: '龙须面'
        }, {
          value: 5,
          label: '北京烤鸭'
        }],
        value: '',
      message: '新复制的内容',
      obj: {
        title: '标题',
        name: '名字'
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
    this.value = 1
  },
  components: {
    // myChild
  }
}
</script>
