var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('.'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('connected');

  socket.on('message', function(message) {
    console.log('message: ' + message);
    io.emit('message', 'someone sent me a message: ' + message);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
