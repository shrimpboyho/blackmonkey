// Create a socket

var socket = io.connect('/');

// Create a blackmonkey instance

angrymonkey = new blackmonkey(socket);

angrymonkey.onNewMessage(function(data){

	// Update the chat box if the server contacts us

	$('#chatBox').val(($('#chatBox').val() + '\n' + data.userIP + ": " + data.message));  

});

$('#sendButton').click(function(){

	// Post message to the server
	
	angrymonkey.postMessage($('#chatMessageBox').val());

	// Clear the current message

	$('#chatMessageBox').val("");


});

// Begin the chat

angrymonkey.initChat();

