var socket = io.connect('/');

socket.on('returnMessage', function (data) {
	$('#chatBox').val(($('#chatBox').val() + '\n' + data.message));  
});

$('#sendButton').click(function(){

	socket.emit('postMessage',{ message: $('#chatMessageBox').val()});

});