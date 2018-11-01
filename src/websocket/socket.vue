<template>
  <div>
    <el-button @click="socketLink">发送</el-button>
  </div>
</template>
<script>
export default {
  name: 'Socket',
  data () {
    return {

    }
  },
  methods: {
    socketLink () {
      const ws = new WebSocket('ws://localhost:3000')
      ws.onopen = function () {
        console.log('客户端连接成功')
        ws.send('发给服务端')
      }
      ws.onmessage = function (event) {
        console.log('data', event.data)
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
