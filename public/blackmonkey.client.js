function blackmonkey (socket) {
    
    this.socket = socket;

}

blackmonkey.prototype = {
    
    constructor: blackmonkey,
    
    postMessage:function (messagestring)  {
        
        socket.emit('postMessage',{ message: messagestring});

    },

    onNewMessage:function(callback)  {

        this.callback = callback;

    },

    banUser:function(){
        

    },
    initChat:function(){
    	
    	var callbackhere = this.callback;

    	socket.on('returnMessage', function (data) {

			callbackhere(data);

		});

    }
}


