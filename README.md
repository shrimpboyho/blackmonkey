blackmonkey
====

A chat module built with ```node.js``` using ```socket.io```.

This is currently in development stage, and the following features will be added:

* Whisper support
* Ban List

###How to Install

Get a stable copy from the npm

```
$npm install blackmonkey
```

###How to Use

####Server side

```
// Include the things we need

var express = require('express');
var io = require('socket.io');
var http = require('http');
var blackmonkey = require('./blackmonkey.js');

// Create the express app that serves static pages

var app = express();
app.use("/", express.static(__dirname + '/public/'));

// Get the http server from the app

var server = http.createServer(app);

// Have the server listen to port 8000

server.listen(8000);
console.log('Listening on port 8000');

// Pass variables into blackmonkey

blackmonkey.setServer(server);
blackmonkey.setSocket(io);

// Start blackmonkey

blankmonkey.initChat();
```

####Client Side

```
// Create a socket

var socket = io.connect('/');

// Create a blackmonkey instance and pass a socket into the constructor

angrymonkey = new blackmonkey(socket);

// Set up a callback everytime someone posts a message

angrymonkey.onNewMessage(function(data){
	console.log(data.message);
});

if(userSubmitsAChatMessage){
	// Post the message
	angrymonkey.postMessage($('#chatMessageBox').val());
}

// Begin the chat

angrymonkey.initChat();
```

##The Documentation

###Client Side Docs

####Creating an instance

blackmonkey on the client-side can be used by creating an instance of the blackmonkey object.

```
angrymonkey = new blackmonkey();
```

blackmonkey needs to be bound to a socket and one pass in a socket in the contructor or using the ```setSocket()``` method:

```
// Create a socket using socket.io
var socket = io.connect('/');

// Set the socket using the constructor
angrymonkey = new blackmonkey(socket);

// Or set it using the method
angrymonkey.setSocket(socket);
```

####Methods

Various methods can be called upon.

```
// Sets the client's userId

angrymonkey.setUserId("niceGuy");
```

```
// Ban a user

angrymonkey.banUser('narc');
```

```
// Specify a callback everytime a new message is recieved from the chat server

angrymonkey.onNewMessage(function(data){

	alert(data.message);
	alert(data.userId);
	alert(data.userIP);  

});
```

```
// Post a message to the chat server

angrymonkey.postMessage("Hi everyone!");
```

####Starting the client

Once everything is specified, the client can be started using this method:

```
angrymonkey.initChat();
```

###Server side Docs

{TODO}