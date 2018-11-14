<template>
  <div>
    <el-input v-model="val"></el-input>
    <el-button @click="socketLink">发送</el-button>
  </div>
</template>
<script>
export default {
  name: 'Socket',
  data () {
    return {
      val: ''
    }
  },
  methods: {
    socketLink () {
      const ws = new WebSocket('ws://localhost:3000')
      ws.onopen = (socket) => {
        console.log('客户端连接成功')
        ws.send(this.val)
      }
      ws.onmessage = (msg) => {
        console.log('msg', msg)
      }
    }
  },
  mounted () {
    this.socketLink()
  }
}
</script>
<style scoped>
</style>
