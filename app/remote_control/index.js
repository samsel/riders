var socket = io.connect('http://localhost:8887');

$(".key").on("mousedown", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		keyCode: key.attr("data-key-code"),
		eventName: "keydown" 
	});
});

$(".key").on("mouseup", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		keyCode: key.attr("data-key-code"),
		eventName: "keyup" 
	});
});
