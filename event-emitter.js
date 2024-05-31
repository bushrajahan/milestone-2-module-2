

//event driven architectur4
const EventEmitter = require('events');

//instance 
const myEmitter = new EventEmitter()

//listener 

myEmitter.on('birthday',()=>{
  console.log('Happy Birthday to you ')
})

myEmitter.on('birthday',(gift)=>{
  console.log(`i will send a ${gift}`)
})

//emit 

myEmitter.emit('birthday','bike')