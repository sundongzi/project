// var url = require('url')
// var http = require('http')
// http.createServer((req, res) => {
//   if (req.url != '/favicon.ico') {
//     var result = url.parse(req.url, true);
//     console.log(result)
//   }
// })
// let fs = require('fs')
// let events = require('events')
// let EventEmitter = new events.EventEmitter()
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node'
})
connection.connect()
connection.query('SELECT * FROM user', (error, result, fields) => {
  console.log('result', result)
})
