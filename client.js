const net = require('net')
var client = new net.Socket()
client.setEncoding('utf8')
client.connect(8543, 'localhost', () => {
  console.log('已经连接tcp服务器')
  client.write('你好')
  setTimeout(() => {
    client.end('再见！')
  }, 3000)
  client.on('data', (data) => {
    console.log('收到服务器信息：', data)
  })
})
