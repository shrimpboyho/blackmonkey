blackmonkey
====

A chat module built with ```node.js``` using ```socket.io```.

This is currently in development stage, and the following features will be added:

* Whisper support
* Ban List


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
blackmonkey.initChat(io);
```
