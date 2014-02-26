var socket = io.connect('http://localhost:8887');

$(".key").on("mousedown", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		control: key.attr("id"),
		state: "press" 
	});
});

$(".key").on("mouseup", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		control: key.attr("id"),
		state: "release" 
	});
});
