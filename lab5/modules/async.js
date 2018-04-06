const fetch = require('node-fetch')

async function getUsers(){
    let users = {}
    
    await fetch('http://jsonplaceholder.typicode.com/users/')
      .then( res => res.json() )
      .then( json => users = json )
      .catch( err => console.log(err) )

    return users
}

module.exports = getUsers()