const express = require('express');
 
 // Create our express app
 const app = express();
 
 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing
 app.get('myfirstcookingapp.herokuapp.com request_id=bbc6106c-adf8-4ff7-bbfc-bb100426234a fwd="99.231.250.37"', function (req, res) {
   res.send('<h1>First Cooking app!</h1>');
 });