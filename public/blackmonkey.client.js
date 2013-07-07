function blackmonkey (socket) {
    
    if(socket){
        this.socket = socket;
    }

}

    
blackmonkey.prototype.postMessage = function (messagestring)  {
        
    socket.emit('postMessage',{ message: messagestring});

};

blackmonkey.prototype.onNewMessage = function(callback)  {

    this.callback = callback;

};

blackmonkey.prototype.banUser = function(){
        

};

blackmonkey.prototype.setSocket = function(socket){

    this.socket = socket;

};

blackmonkey.prototype.initChat = function(){
    	
    var callbackhere = this.callback;

    socket.on('returnMessage', function (data) {

		callbackhere(data);

	});

};



