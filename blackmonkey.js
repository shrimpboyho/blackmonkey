/* Include the things we need */

var expressREQUIRE = require('express');
var ioREQUIRE = require('socket.io');
var httpREQUIRE = require('http');

/* Set up global variables */

var userIPAddress;  // Represents the IP address of a client
var serverGiven;    // A variable representing the server variable given
var ioGiven;        // A varibale representing the socket.io varibale given

/* The set server function */

function setServer(server){
	
	// Create a global variable

	serverGiven = server;

	// Grab the IP of the client

	server.on('request', function(req, res){

		userIPAddress = req.connection.remoteAddress.toString();

	});
}

/* The initialize chat function */

function initChat(io){

	// Create a global variable

	ioGiven = io;

	// Have it listen to the server

	ioGiven = ioGiven.listen(serverGiven);

	// On every socket connection

	ioGiven.sockets.on('connection', function (socket) {

  		// Check to see if a new chat message is posted

 	 	socket.on('postMessage', function (data) {

  			// If so, send the chat message to all clients

  			ioGiven.sockets.emit('returnMessage', { message: data.message, userIP: userIPAddress });
  	
  		});

	});

}

/* The exports */

exports.initChat = initChat;
exports.setServer = setServer;

