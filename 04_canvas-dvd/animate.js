// SAS - Sajed Nahian, Kenny Li
// SoftDev2 pd7
// K04 -- What is it saving the screen from?
// 2019-02-07
// --------------------------------------------------

//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById('dvd');

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to celine
ctx.fillStyle = "#00ffff";


var requestID;
var radius = 0;
var growing = true;


var drawDot = function () {
    window.cancelAnimationFrame(requestID);

    ctx.clearRect(0, 0, c.width, c.height);

    if (growing) {
        radius += 1;
    }
    else {
        radius -= 1;
    }

    if (radius == (c.width / 2))
        growing = false;
    else if (radius == 0) {
        growing = true;
    }

    //draw the dot
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame(drawDot);
};


var stopIt = function () {
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

var dvdLogoSetup = function () {
    window.cancelAnimationFrame(requestID);

    var width = 100;
    var height = 50;

    var currX = Math.floor(Math.random() * (c.width - width));
    var currY = Math.floor(Math.random() * (c.height - height));

    var xVel = 1;
    var yVel = 1;

    var logo = new Image();
    logo.src = 'logo_dvd.jpg';

    var dvdLogo = function () {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(logo, currX, currY, width, height);

        if (currX <= 0 || currX >= c.width - width) {
            xVel *= -1;
        }
        if (currY <= 0 || currY >= c.width - height) {
            yVel *= -1;
        }
        currX += xVel;
        currY += yVel;

        requestID = window.requestAnimationFrame(dvdLogo);
    }

    dvdLogo();
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvdLogoSetup)
