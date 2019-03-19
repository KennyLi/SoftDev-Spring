// Kenny Li
// SoftDev pd8
// K11 -- Ask Circles [Change || Die] ...While On The Go
// 2019-03-18

var pic = document.getElementById("vimage");
var clearButton = document.getElementById("but_clear");
var moveButton = document.getElementById("but_move");
var starButton = document.getElementById("but_star");
var requestID;

pic.addEventListener("click", function (e) {
    var currX = e.offsetX;
    var currY = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", currX);
    c.setAttribute("cy", currY);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("xVel", 1);
    c.setAttribute("yVel", 1);
    pic.appendChild(c);
    change(c)
});

function change(child) {
    child.addEventListener("click", function (e) {
        e.stopPropagation();
        if (this.getAttribute('fill') == "blue") {
            child.setAttribute("fill", "yellow");
        } else {
            child.setAttribute("fill", "blue");
            child.setAttribute("cx", Math.random() * 500);
            child.setAttribute("cy", Math.random() * 500);
        }
    });
}

var move = function () {
    window.cancelAnimationFrame(requestID);
    for (i = 0; i < pic.children.length; i++) {
        child = pic.children[i];
        var radius = 10;

        var xVel = parseInt(child.getAttribute("xVel"));
        var yVel = parseInt(child.getAttribute("yVel"));

        var currX = parseInt(child.getAttribute("cx")) + xVel;
        var currY = parseInt(child.getAttribute("cy")) + yVel;

        if (currX >= (500 - radius) || currX <= 10) {
            child.setAttribute("xVel", xVel * -1);
        }
        if (currY >= (500 - radius) || currY <= 10) {
            child.setAttribute("yVel", yVel * -1);
        }

        child.setAttribute("cx", currX);
        child.setAttribute("cy", currY);
    }
    requestID = window.requestAnimationFrame(move);
}

var clear = function () {
    window.cancelAnimationFrame(requestID);
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
}

var star = function () {
    clear();
    var time = 0;
    var points = [];

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 500);
    c.setAttribute("cy", 250);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "black");
    c.setAttribute("stroke", "black");
    c.setAttribute("xVel", 1);
    c.setAttribute("yVel", 1);
    pic.appendChild(c);

    var line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", 5)
    pic.append(line);

    var animateStar = function () {
        requestID = window.requestAnimationFrame(animateStar);
        var currX = parametricX(time);
        var currY = parametricY(time);
        if (points.length == 10) {
            points.shift();
        }
        points.push([currX,currY]);
        line.setAttribute("points", points);
        c.setAttribute("cx", currX);
        c.setAttribute("cy", currY);
        time += 0.1
    }
    animateStar();
}

var parametricX = function(time) {
    return 100 * Math.cos(time) + 150 * Math.cos(2 * time / 3) + 250;
}

var parametricY = function(time) {
    return 100 * Math.sin(time) - 150 * Math.sin(2 * time / 3) + 250;
}

moveButton.addEventListener("click", move);
clearButton.addEventListener("click", clear);
starButton.addEventListener("click", star);
