/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// note, io.listen(<port>) will create a http server
var gameLoop = {};

var deck=require('./js/server/deck.js');
var board=require('./js/server/board.js');
var gameState=require('./js/server/gameState.js');
gameState.setState('waitingForPlayer');

deck.fillDeck();
deck.randomizeDeck();

var io = require('socket.io').listen(8080);
io.sockets.on('connection', function (socket) {
    
    gameLoop.run = function() {
        for (var i=1;i<board.positionClientID.length;i++)
        {
            if(board.positionClientID[i]!==0)
            {
                socket.emit('derrrp'); 
            }
        }  
    };

    socket.emit('news', {
        hello: 'world'
    });
    
    socket.emit('id', {
        id: socket.id
    });
    
    socket.on('connect', function (data) {
        socket.emit('updateTable', board);
    });
    
    socket.on('addPlayerRequest', function (data) {  //If no players, kicks off game loop.

        if(board.addPlayer(data["clientID"],data["requestedPosition"]))
        {
            io.sockets.emit('updateTable', board); 
            gameState.currentState.addPlayer();
        }
                
    });
    
});
