// Load express
const express = require('express');
 
// Create our express app
const app = express();
const port = process.env.port || 3000;

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>First Cooking Application !</h1>');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(port, function () {
  console.log('Listening on port 3000');
});