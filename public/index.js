// Create a socket

var socket = io.connect('/');

/* Create a blackmonkey instance

var angrymonkey = */

socket.on('returnMessage', function (data) {

	// Update the chat box if the server contacts us

	$('#chatBox').val(($('#chatBox').val() + '\n' + data.userIP + ": " + data.message));  

});

$('#sendButton').click(function(){

	// Post message to the server

	socket.emit('postMessage',{ message: $('#chatMessageBox').val()});

	// Clear the current message

	$('#chatMessageBox').val("");


});