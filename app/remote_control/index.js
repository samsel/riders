var socket = io.connect(window.location.origin);

$("a").on("mousedown touchstart", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		keyCode: key.attr("data-key-code"),
		eventName: "keydown" 
	});
});

$("a").on("mouseup touchend", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		keyCode: key.attr("data-key-code"),
		eventName: "keyup" 
	});
});

socket.on("controlMsg", function (data) {
	alert(data.msg);
});

document.addEventListener("touchstart", function() {},false);