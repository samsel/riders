window.onmessage = function(e) {
	var data = JSON.parse(e.data),
		evt = document.createEvent("Events");

	evt.initEvent(data.eventName, true, true);
	evt.view = window;
	evt.altKey = false;
	evt.ctrlKey = false;
	evt.shiftKey = false;
	evt.metaKey = false;
	evt.keyCode = parseInt(data.keyCode, 10);
	
	document.dispatchEvent(evt);
};