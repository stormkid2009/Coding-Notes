//like client or browser node deals with events
//we have the event module for this;

const EventEmitter = require('events');
const customEmitter = new EventEmitter();
//first listen to the event response 
customEmitter.on('response',(name,age)=>{
    console.log(`data received : ${name}-${age}`)
})

customEmitter.on('response',()=>{
    console.log(`different data received !`)
})

//second we emit the event
customEmitter.emit('response','sherif',42)