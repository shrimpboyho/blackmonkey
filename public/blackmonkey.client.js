function blackmonkey (socket) {
    
    if(socket){
        this.socket = socket;
    }

}

    
blackmonkey.prototype.postMessage = function (messagestring)  {
        
    socket.emit('postMessage',{ message: messagestring, userId: this.userId});

};

blackmonkey.prototype.onNewMessage = function(callback)  {

    this.callback = callback;

};

blackmonkey.prototype.setUserId = function(userId){

    this.userId = userId;

};

blackmonkey.prototype.banUser = function(userId){
        
    socket.emit('banMessage',{ userId: this.userId});

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



