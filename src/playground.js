// When CLIENT --> Emitting an Event --> SERVER is receiving this Event--> Then SERVER has an option to send back acknowledgement back to the CLIENT

		

// When SERVER --> Emitting an Event --> CLIENT is receiving this Event--> Then CLIENT has an option to send back acknowledgement back to the SERVER


// Who sends acknowledgements have option to send some data with that acknowledgement 


// const CLIENT;
// const SERVER;

// // We will use an example where client is emitting an event
// // and server is receiving it and server will send back aknowledgement 
// // back to the client with some DATA which is optional.

// CLIENT.emit('noob', { data: 'XDXD'}, () => {
//     console.log('Nice and Easy')
// });

// /// On the serverSide
// /// Note here data is the SECOND argument of the CLIENT.emit function
// /// Note here callback is the THIRD argument of the CLIENT.emit function 
// SERVER.on('noob', (data, callback) => {
//     //process data
//     callback()
// })