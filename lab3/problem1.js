'use strict';
// problem 1
const dns = require('dns')

dns.resolve4("www.mum.edu", function(err, addresses){
    if(err) throw err;

    console.log('addresses: ' + JSON.stringify(addresses))
})