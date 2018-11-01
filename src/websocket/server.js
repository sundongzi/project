const Koa = require('koa')
const app = new Koa()
const http = require('http')
const path = require('path')
const jsonfile = require('jsonfile')
const server = http.createServer(app.callback())
// const io = require('socket.io')(server)
// io.on('connection', socket => {
//   socket.on('message', function(msg) {
//     console.log(msg);   // 客户端发来的消息
//     // send方法来给客户端发消息
//     socket.send('你好我是服务端')
//   })
// })
// console.log('服务端启动')
// server.listen(3000)

const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 3000 })
wss.on('connection', function(socket) {
    console.log('连接成功');
    socket.on('message', function(msg) {
        console.log('接收到客户端消息： ' + msg)
        socket.send('服务器响应： ' + msg)
    })
})
