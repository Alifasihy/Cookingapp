const express = require('express');
 
 // Create our express app
 const app = express();
 
 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing
 app.get('/', function (req, res) {
   res.send('<h1>First Cooking app!</h1>');
 });