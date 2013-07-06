// Include the things we need

var express = require('express');
var io = require('socket.io');
var http = require('http');
var blackmonkey = require('./blackmonkey.js');

// Create the express app and a server out of it

var app = express();

app.use("/", express.static(__dirname + '/public/'));

var server = http.createServer(app);

server.listen(8000);

console.log('Listening on port 8000');

// Pass into blackmonkey

blackmonkey.setServer(server);
blackmonkey.initChat(io);