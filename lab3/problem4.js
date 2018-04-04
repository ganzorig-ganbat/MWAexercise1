'use strict';

// problem 4
const fs = require('fs')
const zlib = require('zlib')
const zip = zlib.createGzip()
const unzip = zlib.createGunzip()

const readfile = fs.createReadStream(__dirname + '/large.jpg')
const zipfile = fs.createWriteStream(__dirname + '/image.gz')
const unzipfile = fs.createWriteStream(__dirname + '/image.jpg')

var zipProcess = readfile.pipe(zip).pipe(zipfile)

zipfile.on('finish', ()=>{
    var ziprecent = fs.createReadStream(__dirname + '/image.gz')
    ziprecent.pipe(unzip).pipe(unzipfile)
    console.log('complete')
})