
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

var animate = function(e) {
    var x=250;
    var y=250; 
    var r = 1;
    var direction = 1;
    window.cancelAnimationFrame(requestID);
    var draw = function(){
	if(r>=250 || r<=0){
	    direction=direction*-1;
	}
	r=r+direction;
	clears();
	ctx.beginPath();
	ctx.arc(x,y,r,0, 2*Math.PI)

	ctx.stroke();      
	requestID =window.requestAnimationFrame(draw);
	console.log(requestID);
    }
    draw();       
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

var dvd =function(e) {
    var x = 250;
    var y = 250;
    var xchange = 1;
    var ychange= 1;
    var ball = function(){
	clears();
	ctx.beginPath();
	ctx.arc(x,y,25, 0, 2*Math.PI);
	ctx.stroke();
    }
    var bounce = function(){
	if (x>= 270 || x<=1){
	    xchange= xchange*=-1;
	}
	if(y>= 499 || y<=1){
	    ychange=ychange*-1;
	}
    }
    window.cancelAnimationFrame(requestID);
    
    var draw = function(){
	x = x+ xchange;
	y=y+ychange;
	bounce();
	ball();
	requestID = window.requestAnimationFrame(draw);
	console.log(requestID);
    }
    draw();
}

var play = function(e) {
    window.requestAnimationFrame(dvd);
}
office.addEventListener("click", play);	
