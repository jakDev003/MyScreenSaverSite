let c = 45;
var dateObj = document.getElementById('date');
var timeObj = document.getElementById('time');

function draw(){
	document.documentElement.style.setProperty('--direction', c++ + 'deg');
	requestAnimationFrame(draw);
}

function getTime() {
	var dt = new Date();
	var s = dt.getSeconds();
	var m = dt.getMinutes();
	var h = dt.getHours();
	timeObj.textContent = 
		("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

function getDate() {
	var dt = new Date();
	var m = dt.getMonth();
	var d = dt.getDate();
	var y = dt.getFullYear();
	dateObj.textContent = 
		("0" + m).substr(-2) + "/" + ("0" + d).substr(-2) + "/" + ("0" + y).substr(-4);
}

setInterval(getTime, 1000);
setInterval(getDate, 1000);

requestAnimationFrame(draw);
