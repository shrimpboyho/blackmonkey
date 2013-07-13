/*

This file is part of blackmonkey.

blackmonkey is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

blackmonkey is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with blackmonkey.  If not, see <http://www.gnu.org/licenses/>.

*/

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

blackmonkey.prototype.unbanUser = function(userIdToUnBan){
        
    socket.emit('unbanMessage',{ userId: userIdToUnBan });

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



