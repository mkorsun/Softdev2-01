var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clears = function() {
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
    prevX = -1;
    prevY = -1;
}

var cbutton = clear.addEventListener("click", clears);


var animate() {
    var requestID;
    var x=250;
    var y=250;
    var r = 0;
    var direction = 1;
    var circle = function(){
	clears();
	ctx.beginPath();
	ctx.arc(x,y,r,0, 2*Math.PI)
	if(r>=250){
	    direction=direction*-1;
	}
	r=r+direction;
	ctx.stroke();      
	requestID =window.requestAnimationFrame(animate);
	console.log(requestID);
    }

    slate.addEventListener("click", draw);
}
window.requestAnimationFrame(animate);
var stops = function(e) {
    window.cancelAnimationFrame(animate);
}
stop.addEventListener("click",stops)
