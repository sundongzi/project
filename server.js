const net = require('net')
var server = net.createServer((socket) => {
  server.getConnections((err, count) => {  // 获取服务器的当前并发连接数
    server.maxConnections = 3 // 最多连接不超过三个
    console.log('count', count)
  })
  socket.on('data', (data) => {
    console.log('收到客户端数据:', data)
    socket.write('hello呀')
  })
  socket.on('close', (data) => {
    console.log('客户端已关闭！')
  })
})
server.listen(8543, 'localhost')
console.log('TCP服务器已创建！')

// var process = require('child_process')
process.on('message', function (m) {
  console.log('message from parent: ' + JSON.stringify(m));
});
process.send({ from: 'child' });
