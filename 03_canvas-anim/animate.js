// SAS - Sajed Nahian, Kenny Li
// SoftDev2 pd7
// K03 -- They lock us in the tower whenever we get caught
// 2019-02-06

var animate = document.getElementById("circle");
var stop = document.getElementById("stop");
var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "cyan"
var currRadius = 1;
var increment = 1;
var animating = false;


animate.addEventListener('click', function (e) {
	if  (!animating) {
        animating = true;
        draw(e)
	}
});

stop.addEventListener('click', function (e) { 
	if (animating) {
        animating = false;
	}
});

var draw = function (e) {
    if (animating) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (currRadius >= canvas.width/2 || currRadius <= 0) {
		increment *= -1;
    }
    ctx.beginPath();
	ctx.arc(canvas.height / 2, canvas.width / 2, currRadius, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fill();
    currRadius += increment;
    id = window.requestAnimationFrame(draw);
    } else {
    window.cancelAnimationFrame(id);
    }
}