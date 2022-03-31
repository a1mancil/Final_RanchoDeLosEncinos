// the ranchServer.js server
// express serves files

const express = require('express');
const app = express();


// require certification
const https = require('https');
const http = require('http');

const fs = require('fs');

app.enable('trust proxy');

// Add a handler to inspect the req.secure flag (see 
// http://expressjs.com/api#req.secure). This allows us 
// to know whether the request was via http or https.
app.use (function (req, res, next) {
	if (req.secure) {
		// request was via https, so do no special handling
		next();
	} else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
        }                  
});

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



// Listen on both http, https 

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
	key: fs.readFileSync('/etc/letsencrypt/live/rancholosencinos.com/privkey.pem'),
	  cert: fs.readFileSync('/etc/letsencrypt/live/rancholosencinos.com/fullchain.pem'),
}, app);


// listen to both ports
httpServer.listen(80, () => {
	    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	    console.log('HTTPS Server running on port 443');
});



