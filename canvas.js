var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clears = function() {
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
    prevX = -1;
    prevY = -1;
}

var cbutton = clear.addEventListener("click", clears);
clear.addEventListener("click",stops);

var requestID;
var r = 1;
var direction = 1;
var animate = function(e) {
    var x=250;
    var y=250; 
   
    var draw = function(){
	if(r>=250 || r<=0){
	    direction=direction*-1;
	}
	r=r+direction;
	clears();
	ctx.beginPath();
	ctx.arc(x,y,r,0, 2*Math.PI)

	ctx.stroke();      
	requestID =window.requestAnimationFrame(animate);
	console.log(requestID);
    }
    window.requestAnimationFrame(draw);

  
}
var start = function(){
    window.requestAnimationFrame(animate);
}
startB.addEventListener("click",start);
var stops = function(e) {
    window.cancelAnimationFrame(requestID);
    
}
var stop = document.getElementById("stop");
stop.addEventListener("click",stops);
