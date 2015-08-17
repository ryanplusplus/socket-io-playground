var express = require('express');
var app = express();
var http = require('http').Server(app);
var socketio = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('.'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

socketio.on('connection', function(socket) {
  console.log('connection');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
