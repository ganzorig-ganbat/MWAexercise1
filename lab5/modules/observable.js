const fetch = require('node-fetch')
const { Observable } = require('rxjs')
const { fromPromise } = require( 'rxjs/observable/fromPromise' )

const users = fromPromise( fetch('http://jsonplaceholder.typicode.com/users/')
      .then( res => res.json() )
      .catch( err => console.log(err) )
)

module.exports = users