// Create a socket

var socket = io.connect('/');

// Create a blackmonkey instance

angrymonkey = new blackmonkey();

angrymonkey.setSocket(socket);

angrymonkey.setUserId("Guest");


angrymonkey.onNewMessage(function(data){

	// Update the chat box if the server contacts us

	$('#chatBox').val(($('#chatBox').val() + '\n' + data.userId + ": " + data.message));  

});

$('#sendButton').click(function(){

	// Post message to the server
	
	angrymonkey.postMessage($('#chatMessageBox').val());

	// Clear the current message

	$('#chatMessageBox').val("");


});

// Begin the chat

angrymonkey.initChat();

