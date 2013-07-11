/* Include the things we need */

var expressREQUIRE = require('express');
var ioREQUIRE = require('socket.io');
var httpREQUIRE = require('http');

/* Set up global variables */

var userIPAddress;  // Represents the IP address of a client
var serverGiven;    // A variable representing the server variable given
var ioGiven;        // A varibale representing the socket.io varibale given

var banList = new Array();        // Holds all the banned userId's

/* An array searching function we are using */

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};


/* The set server function */

function setServer(server){
	
	// Create a global variable

	serverGiven = server;

	// Grab the IP of the client

	server.on("connection", function(socket) {
    
	    var endpoint = socket.address();
	    userIPAddress = endpoint.address;
	
	});

	/* TODO: find a way to serve the client javascript file */
}

/* The setSocket function*/

function setSocket(io){
	ioGiven = io;
}

/* The initialize chat function */

function initChat(){

	// Have it listen to the server

	ioGiven = ioGiven.listen(serverGiven);

	// On every socket connection

	ioGiven.sockets.on('connection', function (socket) {

  		// Check to see if a new chat message is posted

 	 	socket.on('postMessage', function (data) {

  			// Check to make sure the user is not banned

  			var i;

  			i = banList.indexOf(data.userId);

  			if(i == -1){

  				ioGiven.sockets.emit('returnMessage', { message: data.message, userIP: userIPAddress, userId: data.userId });
  			}

  		});

 	 	// Check to see if a user needs to be banned

  		socket.on('banMessage', function (data) {
			
  			/* TODO: Check for duplicates in the banlist*/

  			banList.push(data.userId.toString());
  			console.log("Just banned: " + data.userId.toString());
  					
  		});

  		// Check to see if a user needs to be unbanned

  		socket.on('unbanMessage', function (data) {

  			banList.splice(banList.indexOf(data.userId.toString()),1);
  			console.log("Just unbanned: " + data.userId.toString());
  			
  		});

  		// Handle a whisper message

  		socket.on('whisperMessage', function (data) {

  			ioGiven.sockets.emit('returnWhisper', { message: data.message, srcId: data.srcId , destUser: data.destUser});

  		});

	});

}

/* The exports */

exports.initChat = initChat;
exports.setServer = setServer;
exports.setSocket = setSocket;
exports.banList = banList;
