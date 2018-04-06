const fetch = require('node-fetch')


const data = fetch('http://jsonplaceholder.typicode.com/users/')
    .then( res => res.json() )
    .catch( err => console.log(err) )

module.exports = data