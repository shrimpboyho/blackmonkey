function blackmonkey(socket){
	
	this.postMessage = postMessage;
	this.onNewMessage = onNewMessage;
	this.callbackOnNewMessageGiven;
	
	socket.on('returnMessage', function (data) {

		callback(data);


	});

	function postMessage(messagestring){
	
		socket.emit('postMessage',{ message: messagestring});

	}

	function onNewMessage(callback){
		this.callbackOnNewMessageGiven = callback;
	}



}