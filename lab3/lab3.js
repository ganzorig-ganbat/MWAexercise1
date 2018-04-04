'use strict';
// problem 1
// const dns = require('dns')

// dns.resolve4("www.mum.edu", function(err, addresses){
//     if(err) throw err;

//     console.log('addresses: ' + JSON.stringify(addresses))
// })

// problem 2
// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res)=>{
//     var rs = fs.createReadStream(__dirname + '/large.jpg').pipe(res)
    
    // var file = fs.readFileSync(__dirname + '/large.jpg')
    // res.writeHead(200, { 'Content-type': 'image/pjpeg'})

    // res.end(file)
//}).listen(4000, '127.0.0.1')

// problem 3
var eventEmitter = require('events')
class Clock extends eventEmitter{
    constructor(){
        super()
        
        setInterval( ()=>{ 
            this.emit('tick') 
        }, 1000 )
    }
}

var clock = new Clock()

clock.on('tick', ()=>{
    console.log('woohoo')
})

setTimeout( () => {
    clock.on('tick', () => { console.log('after 5 sec') } )
}, 5000)

// problem 4
// const fs = require('fs')
// const zlib = require('zlib')
// const zip = zlib.createGzip()
// const unzip = zlib.createGunzip()

// const readfile = fs.createReadStream(__dirname + '/large.jpg')
// const zipfile = fs.createWriteStream(__dirname + '/image.gz')
// const unzipfile = fs.createWriteStream(__dirname + '/image.jpg')

// var zipProcess = readfile.pipe(zip).pipe(zipfile)

// zipfile.on('finish', ()=>{
//     var ziprecent = fs.createReadStream(__dirname + '/image.gz')
//     ziprecent.pipe(unzip).pipe(unzipfile)
//     console.log('complete')
// })