// let path = require('path')
// let aa = path.sep.replace(/(.)/g, '\\$1')
// let bb = '/src/pp/bb'.split('/').join(aa) + aa
// console.log('aaaaa', bb)
// const { spawn, exec } = require('child_process')
// const subprocess = spawn('sss')
// subprocess.on('error', (err) => {
//   console.log('启动子进程失败')
// })
// const fs = require('fs')
// fs.writeFile('./text.txt', '文件内容', err => {
//   if (err) {
//     console.log('写入失败')
//   } else {
//     console.log('写入成功')
//   }
// })
// fs.readFile('./text.txt', (err, fileData) => { // fileData是原始的二进制文件
//   if (err) {
//     console.log('读取失败')
//   } else {
//     console.log('读取成功', fileData.toString())  // 对于纯文本可以用toString()转换一下
//   }
// })
// const http = require('http')
// http.createServer((req, res) => {
//   console.log('请求来了')
//   res.write('hello world')
//   res.end()  // 需要有结束的标识，不然会一直处于加载状态
// }).listen(8888)

// const path = require('path')
// console.log('path:', path.dirname('./README.md')) // 读取路径
// console.log('pathhttt:', path.extname('./README.md'))
// console.log('filename:', path.basename('./README.md'))
// console.log('拼凑', path.resolve(__dirname, 'build'))

// const url = require('url')
// let site = 'http://www.xr.com/a/b/index.html?a=1&b=2'
// let { pathname, query } = url.parse(site, true) // 解析网址,true的意思是把参数解析成对象

// const assert = require('assert')
// assert(2 < 4, '断言成功')
// let obj1 = { a: { b: 1 } }
// let obj2 = { a: { b: 1 } }
// assert.deepEqual(obj1, obj2, '等不等')

// let rs = fs.createReadStream('./text.txt')
// let ws = fs.createWriteStream('./text1.txt')
// rs.pipe(ws)
// rs.on('error', err => {
//   console.log('读取失败', err)
// })
// ws.on('finish', () => {
//   console.log('成功')
// })

// var child_process = require('child_process')
// var child = child_process.fork('./server.js', {
//   silent: false
// })
// child.on('message', (m) => {
//   console.log('message:', JSON.stringify(m))
// })
// child.send({ from: 'parent' })
// // child.stdout.setEncoding('utf8')
// // child.stdout.on('data', function (data) {
// //   console.log('12312312', data)
// // })
// exec('ls text.txt', (err, stdout, stderr) => {
//   if (err) {
//     console.error('error:' + error)
//     return
//   }
//   console.log('stdout:', stdout)
//   console.log('stderr', stderr)
// })
// // const ls = spawn('ls', ['-lh', '/usr'])

// // ls.stdout.on('data', (data) => {
// //   console.log(`stdout: ${data}`)
// // })

// // ls.stderr.on('data', (data) => {
// //   console.log(`stderr: ${data}`)
// // })
// var http = require('http')
// var fs = require('fs')
// http.createServer((req, res) => {
//   res.writeHead(200, {
//     "content-Type": "text/html;charset=UTF-8"
//   })
//   res.write('<h1 style="text-align:center">Hello NodeJS</h1>')
//   let data = fs.createReadStream(__dirname + '/login.html')
//   data.pipe(res)
//   // res.end()
// }).listen(3001)
// var net = require('net')
// var server = net.createServer((c) => {
//   console.log('客户端已连接')
//   console.log('ccccccc', c)
//   c.on('end', () => {
//     console.log('客户端已断开')
//   })
//   c.write('你好')
//   c.pipe(c)
// })
// server.listen(8003, () => {
//   console.log('服务器已启动')
// })
// var path = require('path')
// console.log(path.resolve('/foo', 'bar', 'baz'))
// console.log(path.parse('http://localhost:8081/file.txt'))
// const fs = require('fs')
// const rr = fs.createReadStream('text.txt')
// rr.on('readable', () => {
//   console.log('读取数据', rr.read())
// })
// rr.on('end', () => {
//   console.log('结束')
// })
// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// const server = http.createServer((req, res) => {
//   const filename = path.resolve(__dirname, 'text.txt')
//   let stream = fs.createReadStream(filename)
//   stream.setEncoding('utf8')
//   // console.log('strrea', stream)
//   stream.pipe(res)
//   // fs.readFile(filename, (err, data) => {
//   //   res.end()
//   // })
// }).listen(8003)
// const process = require('process')
// process.stdin.on('data', (chunk) => {
//   console.log('stream by stdin', chunk)
// })
// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// const server = http.createServer((req, res) => {
//   const reqMethod = req.method
//   if (reqMethod === 'GET') {
//     let filename = path.resolve(__dirname, 'text.txt')
//     let stream = fs.createReadStream(filename)
//     stream.pipe(res)
//   }
// }).listen(8000)
// const fs = require('fs')
// const path = require('path')
// const querystring = require('querystring')
// let query = 'a=1&b=3&a=4'
// console.log('objobj', querystring.stringify(querystring.parse(query)))
// const filename = path.resolve(__dirname, 'text.txt')
// const filename1 = path.resolve(__dirname, 'text1.txt')
// const readStream = fs.createReadStream(filename)
// const writeStream = fs.createWriteStream(filename1)
// readStream.pipe(writeStream)
// readStream.on('end', () => {
//   console.log('拷贝完成！')
// })

// const buf1 = Buffer.alloc(10)
// const buf2 = Buffer.from('hello buffer')
// console.log('buffer', buf1.toJSON())
// console.log(buf1.length)
// console.log(buf2.length)
// let a = buf1.write('Buffer really rocks!')
// console.log('aaaaa', a.toString())

// const { URL } = require('url')
// const url = require('url')
// const myURL = new URL('/foo', 'https://example.org/')
// console.log('myURL', myURL.pathname)
// console.log('urlrl', url.parse('//foo/bar'))
// console.log('baseurl', url.resolve('http://example.com/11', '22'))

// console.log('path123', path.join('/foo', 'bar/123/456/789', 'baz', 'quux', '..')) // 拼接时会抛弃..前面的片段
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();
// const fs = require('fs');
// // const inp = fs.createReadStream('text.txt');
// // const out = fs.createWriteStream('text1.zip')
// // inp.pipe(gzip).pipe(out)
// console.log('1111', fs.readFileSync('text.txt', { encoding: 'utf8' }))
// 解压 input.txt.gz 文件为 input.txt
// fs.createReadStream('text1.gz').pipe(gunzip).on('error', (err) => { console.log('error', err) }).pipe(fs.createWriteStream('my3.txt'));
// const input = '.................................';
// zlib.deflate(input, (err, buffer) => {
//   if (!err) {
//     console.log(buffer.toString('base64'));
//   } else {
//     // 处理错误
//   }
// });
// const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
// zlib.unzip(buffer, (err, buffer) => {
//   if (!err) {
//     console.log(buffer.toString());
//   } else {
//     // 处理错误
//   }
// });
// let aa = fs.readFile('text1.txt', (err, data) => {
//   console.log('dddd', data)
//   let bb = zlib.unzip(data, (err, buffer) => {
//     console.log('buffer', buffer)
//   })
// })
// console.log('aaaa', aa)
// out.pipe()
// console.log('txt', txt)
// const aaa = zlib.unzip(out, (err, buffer) => {
//   console.log('buffer', buffer)
// })
// const path = require('path')
// console.log('aaaa', path.join(__dirname, 'dist', 'login/index.html'))


const observerQueue = new Set();
const observe = fn => observerQueue.add(fn);
const observable = obj => new Proxy(obj, {
    set(tgt, key, val, receiver) {
        const result = Reflect.set(tgt, key, val, receiver);
        observerQueue.forEach(v => v());
        return result;
    }
});

const person = observable({ age: 25, name: "Yajun" });
const print = () => console.log(`${person.name} is ${person.age} years old`);
observe(print);
person.name = "Joway";
