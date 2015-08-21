var socket = io();

$(document).ready(function() {
  $('#send-form').submit(function(e) {
    socket.emit('message', $('#message-to-send').val());
    $('#message-to-send').val('');
    e.preventDefault();
  });

  socket.on('message', function(message) {
    $('#received-messages').append($('<li>').text(message));
  });
});
