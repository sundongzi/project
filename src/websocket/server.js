const Koa = require('koa')
const app = new Koa()
const http = require('http')
const path = require('path')
const jsonfile = require('jsonfile')
const server = http.createServer(app.callback())
app.use(async (ctx) => {
  let data
  let filePath = path.join(__dirname, './test.json')
  data = jsonfile.readFileSync(filePath)
  console.log('datdta', data)
  ctx.set('Content-Type', 'application/json')
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000);
  })
  ctx.body = data
})
// const io = require('socket.io')(server)
// io.on('connection', socket => {
//   socket.on('message', function(msg) {
//     console.log(msg);   // 客户端发来的消息
//     // send方法来给客户端发消息
//     socket.send('你好我是服务端')
//   })
// })
// console.log('服务端启动')
const port = 8080
server.listen(port)
const SYSTEM = '系统'
const WebSocketServer = require('websocket').server
const wss = new WebSocketServer()
wss.on('connection', (socket) => {
  let username
  console.log('连接成功');
  socket.on('message', (msg) => {
    if (username) {

    } else {
      username = msg

    }
    // console.log('接收到客户端消息： ' + msg)
    socket.send('11111')
  })
})
