// problem 2
const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    var rs = fs.createReadStream(__dirname + '/large.jpg').pipe(res)
    
    var file = fs.readFileSync(__dirname + '/large.jpg')
    res.writeHead(200, { 'Content-type': 'image/pjpeg'})

    res.end(file)
}).listen(4000, '127.0.0.1')