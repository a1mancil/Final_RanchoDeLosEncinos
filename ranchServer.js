// the ranchServer.js server
// express serves files

const express = require('express');
const app = express();


// basically gets your files ready to serve to your router functions
// gets ALL of your files ready
// e.g. "get"
app.use(express.static('public'));

// landing page
app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html" );
});

// home page
app.get("/home", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

// contact page
app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/public/contact.html");
});

// stallion page
app.get("/stallions", function(req, res){
  res.sendFile(__dirname + "/public/stallions.html");
});

// stud services page
app.get("/studservices", function(req, res){
  res.sendFile(__dirname + "/public/studservices.html");
});

// mares page
app.get("/mares", function(req, res){
  res.sendFile(__dirname + "/public/mares.html");
});

// foals page
app.get("/foals", function(req, res){
  res.sendFile(__dirname + "/public/foals.html");
});


// find a port to host the website
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
