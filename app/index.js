var express = require('express'),
  	http = require('http');
 	app = express(),
	server = app.listen(8887),
	websocket = require('socket.io').listen(server);

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/remote_control'));

app.get('/', function (req, res) {
	res.sendfile("index.html");
});

websocket.set('loglevel', 10);

websocket.sockets.on("connection", function (socket) {
  socket.on("event", function (data) {
    console.dir(data);
  });
});