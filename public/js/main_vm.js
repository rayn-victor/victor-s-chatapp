// imports always go first - if we're importing anything

const socket = io();


//the packet is whatever data we sebd through with the connect event
//from the server
function setUserID(packet) {
    // debugger;
    console.log(packet);
}

//message for 'disconnect'
function showDisconnectMessage() {
    console.log('A user has left.');
}



socket.addEventListener('connected', setUserID); //catchhing an id for the user when they connect
socket.addEventListener('disconnect', showDisconnectMessage);
