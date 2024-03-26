// const { createServer } = require('http');

// //create a server object:
// const server = createServer(function (req, res) {
//   let x=2,y=3
//   res.write((x+y).toString()); //write a response to the client
//   res.end(); //end the response
// });

// server.listen(8080); //the server object listens on port 8080


const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Calculate the sum of all multiples of 3 or 5 below 1000
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  // Write the sum to the response
  res.write(`The sum of all multiples of 3 or 5 below 1000 is: ${sum}`);

  // End the response
  res.end();
});

// Make the server listen on port 8081
server.listen(8081, () => {
  console.log('Server running at http://localhost:8081/');
});
