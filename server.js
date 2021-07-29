// Node - An environment that allows us to run our JavaScript outside of a browser and gives us some helpful server capabilities.

// Express - A tool / package to help us build our server application.

// NPM - Node Package Manager

// package.json - A file that keeps a running list of all of our packages

// node_modules - A directory that holds all of our packages

// Pulling in the express package into this file
const express = require('express');

// Creating an instance of an express app
const app = express();

const port = 4000;

// Listen for requests on the '/' route, and when they are recieved
// call this callback function
app.get('/', (request, response) => {
  response.send('Hello world!');
})


// Start up our server
// Start the server on the specified port
// After it starts, call the callback function
app.listen(port, () => {
  console.log(`Your server is running on port: ${port} 🚀`);
});
