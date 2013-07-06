// Include the things we need

var express = require('express');
var io = require('socket.io');
var http = require('http');

// Set up global variables

var userIPAddress;

// Create the express app and a server out of it

var app = express();

app.use("/", express.static(__dirname + '/public/'));

var server = http.createServer(app);

server.on('request', function(req, res){

	userIPAddress = req.connection.remoteAddress.toString();

});

server.listen(process.argv[2]);

console.log('Listening on port ' + process.argv[2]);

// Create the websocket and have it listen to the server

var io = io.listen(server);

// On every socket connection

io.sockets.on('connection', function (socket) {
 
  // Check to see if a new chat message is posted

  socket.on('postMessage', function (data) {

  	// If so, send the chat message to all clients

  	io.sockets.emit('returnMessage', { message: data.message, userIP: userIPAddress });
  	
  });

});

