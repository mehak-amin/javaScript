//--------------CREATING EVENTS IN NODE --------------

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
//  eventEmitter.on('start', function () {
//     console.log('started');
    
//  })
//  eventEmitter.emit('start');


// ARGUMENTS TO EVENT HANDLER 

// eventEmitter.on('start', number => {
//     console.log(`started ${number}`);
// });
// eventEmitter.emit('start' , 23);

// MULTIPLE ARGUMENTS 

eventEmitter.on ('start', (start, end) =>{
     console.log( `started from ${start} to ${end}`);
   
});
eventEmitter.emit('start', 1 , 100);
 
