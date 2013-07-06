// Include the things we need

var express = require('express');
var io = require('socket.io');
var http = require('http');

// Create the express app and a server out of it

var app = express();

app.use("/", express.static(__dirname + '/public/'));

var server = http.createServer(app);

/*app.get('/', function(req, res){

  res.sendfile(__dirname +'/index.html');

});*/

server.listen(8000);

console.log('Listening on port 8000');

// Create the websocket

var io = io.listen(server);

io.sockets.on('connection', function (socket) {
 
  socket.on('postMessage', function (data) {
      io.sockets.emit('returnMessage', { message: data.message });
  });

});

