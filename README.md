blackmonkey [![Build Status](https://travis-ci.org/shrimpboyho/blackmonkey.png?branch=master)](https://travis-ci.org/shrimpboyho/blackmonkey)
====

A chat module built with ```node.js``` using ```socket.io```.

This is currently in development stage, and the following features will be added:

* Whisper support
* Ban List

###How to Install

Get a stable copy from the npm

```
$ npm install blackmonkey
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
// Specify a callback everytime a new whisper message is recieved from the chat server

angrymonkey.onNewWhisper(function(data){

	alert("Whisper From: " + data.srcId);
	alert("Here's the message: " + data.message);  

});
```

```
// Post a message to the chat server (specify a message)

angrymonkey.postMessage("Hi everyone!");
```

```
// Send a whisper message to the chat server (specify a message and a userId to send to)

angrymonkey.whisperMessage("Nice name!","derp123");
```

####Starting the client

Once everything is specified, the client can be started using this method:

```
angrymonkey.initChat();
```

###Server side Docs

####Setting up the module

Use ```blackmonkey``` the same way you'd use any ordinary module. Just require it:

```
var blackmonkey = require('blackmonkey');
```

Bind the blackmonkey to an HTTP server like this:

```
blackmonkey.setServer(server);
```

Finally bind it to some ```socket.io``` websockets:

```
var io = require('socket.io');
blackmonkey.setSocket(io);
```
####Starting the client

Once everything is specified, the server can be started using this method:

```
blackmonkey.initChat();
```
