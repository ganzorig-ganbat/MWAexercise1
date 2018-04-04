'use strict';
Array.prototype.even = function(){
  return this.filter(n=>n%2==0)
}

Array.prototype.odd = function(){
  return this.filter(n=>n%2==1)
}

console.log( [1,2,3,4,5,6,7,8].even() )
console.log( [1,2,3,4,5,6,7,8].odd() )

/*
- Explain why do we want sometimes to use setImmediate instead of using setTimeout?
  setTimeout is for call the function after delay has finished. It is queued all other setTimeout function. So we don't know when it will call even when we set setTimeout(fn, 0). 
  setImmediate doesn't need to wait the delay time. It executes after I/O eventhandler queues.

- Explain the difference between process.nextTick and setImmediate?

  setImmediate called from event loop. nextTick fired immediately after the current code is done executing before going back to the event loop.

- Name 10 global modules available in Node environment.

  isNaN
  parseInt
  Promise
  module
  fs
  http
  require
  root
  setImmediate
  setTimeout
 */

// Fix the slow function to be asynchronous/non blocking
function slow(callback){
    for(let i=0; i<=5e8; i++){}
    if(Math.random() > 0.5){
      return callback("Error", null)
    }

    return callback(null, {id:12345})
}

function exec(fn){

  // execute fn function after setting done and fail function usin async way
  process.nextTick(function(){
    fn(function(x, y){
      x?_fail(x):_done(y)
    })
  })

  // private function to store done function
  function _done(){}
  // private function to store fail function
  function _fail(){}

  return {
    done: function(func){
      _done = func;
      return this;
    },

    fail: function(func){
      _fail = func;
      return this;
    }
  }
}

exec(slow).done( function(data){ console.log(data) } )
.fail( function(err){ console.log("Error: " + err) } )

// this will call first
console.log('done!')