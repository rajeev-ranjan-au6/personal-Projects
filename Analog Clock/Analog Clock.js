var seconds = document.querySelector(".secondshand");
var minutes = document.querySelector(".minuteshand");
var hours = document.querySelector(".hourshand");

function clock(){
	var date = new Date();
	
	var sec = date.getSeconds();
	var min = date.getMinutes();
	var hr = date.getHours();
	
	var secPosition = sec * 360/60;
	var minPosition = (min * 360/60) + (sec * 360/60)/60;
	var hrPosition = (hr * 360/12) + ((min * 360/60)/12);
	
	seconds.style.transform = "rotateZ("+secPosition+"deg)";
	minutes.style.transform = "rotateZ("+minPosition+"deg)";
	hours.style.transform = "rotateZ("+hrPosition+"deg)";
}
setInterval(clock,1000);