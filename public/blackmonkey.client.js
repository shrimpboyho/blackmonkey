var globalID; // Very sensitive variable do not change!

function blackmonkey (socket) {
    
    if(socket){
        this.socket = socket;
    }

}

    
blackmonkey.prototype.postMessage = function (messagestring)  {
        
    socket.emit('postMessage',{ message: messagestring, userId: this.userId});

};

blackmonkey.prototype.whisperMessage = function (messagestring,destUser)  {
        
    socket.emit('whisperMessage',{ message: messagestring, destUser: destUser, srcId: this.userId});

};

blackmonkey.prototype.onNewMessage = function(callback)  {

    this.callbackForMessage = callback;

};

blackmonkey.prototype.onNewWhisper = function(callback)  {

    this.callbackForWhisper = callback;

};

blackmonkey.prototype.setUserId = function(userId){

    this.userId = userId;
    globalID = userId;
    console.log("User id set to: " + this.userId);

};

blackmonkey.prototype.banUser = function(userIdToBan){
        
    socket.emit('banMessage',{ userId: userIdToBan });

};

blackmonkey.prototype.setSocket = function(socket){

    this.socket = socket;

};

blackmonkey.prototype.initChat = function(){
    	
    var callbackhere = this.callbackForMessage;
    var callbackhereforwhisper = this.callbackForWhisper;

    // Call user specified callback when a new message is posted

    socket.on('returnMessage', function (data) {

		callbackhere(data);

	});
    
    // Handle whisper message response from the server

    socket.on('returnWhisper', function (data) {

        console.log("Send to: " + data.destUser + ' Our id: ' + globalID);

        if(data.destUser == globalID){
           
           callbackhereforwhisper(data);
           
        }

    });

};



