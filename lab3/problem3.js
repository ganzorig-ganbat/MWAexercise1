'use strict';

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