<template>
  <div></div>
</template>
<script>
export default {
  name: 'websocket',
  created () {
    let ws = new WebSocket('ws://localhost:2000')
    ws.onopen = function () {
      console.log('ws 已连接')
      ws.send('来自客户端') // 往服务器端发送消息
    }
    ws.onmessage = function (e) {
      console.log('接受消息')
      console.log('from server:' + e.data)
    }
  }
}
</script>

