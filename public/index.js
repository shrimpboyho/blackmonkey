// Create a socket

var socket = io.connect('/');

// Create a blackmonkey instance

angrymonkey = new blackmonkey();

angrymonkey.setSocket(socket);

$('#nameSubmit').click(function(){

	angrymonkey.setUserId($('#nameArea').val());

});


angrymonkey.onNewMessage(function(data){

	// Update the chat box if the server contacts us

	$('#chatBox').val(($('#chatBox').val() + '\n' + data.userId + ": " + data.message));  

});

angrymonkey.onNewWhisper(function(data){

	// Update the chat box if the server contacts us with a whisper

	$('#chatBox').val(($('#chatBox').val() + '\n' + "Whisper From: " + data.srcId + " : " + data.message));  

});

$('#sendButton').click(function(){

	// Post message to the server
	
	angrymonkey.postMessage($('#chatMessageBox').val());

	// Clear the current message

	$('#chatMessageBox').val("");


});

$('#sendWhisperButton').click(function(){

	// Post message to the server
	
	angrymonkey.whisperMessage($('#whisperMessageBox').val(),$("#whisperNameArea").val());

	// Clear the current whisper message

	$('#whisperMessageBox').val("");


});

// Ban someone by userId

angrymonkey.banUser('narc');

// Begin the chat

angrymonkey.initChat();

