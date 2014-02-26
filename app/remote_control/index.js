var socket = io.connect(window.location.origin),
	info = $("#info"),
	playerInfo = $("#playerInfo"),
	controls = $(".key");

controls.on("mousedown touchstart", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		keyCode: key.attr("data-key-code"),
		eventName: "keydown" 
	});
});

controls.on("mouseup touchend", function (e) {
	var key = $(e.target);
	socket.emit("event", { 
		keyCode: key.attr("data-key-code"),
		eventName: "keyup" 
	});
});

socket.on("controlMsg", function (data) {
	info.html(data.msg);
	if(data.playerInfo) {
		playerInfo.html(data.playerInfo);
	}
	if(data.reset) {
		playerInfo.html("");
	}	
});

document.addEventListener("touchstart", function() {},false);