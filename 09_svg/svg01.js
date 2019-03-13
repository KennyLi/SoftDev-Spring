// Kenny Li
// SoftDev pd8
// K09 -- Connect the Dots
// 2019-03-13

var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");
var prevX;
var prevY;


pic.addEventListener("click", (e) => {
    var currX = e.offsetX;
    var currY = e.offsetY;
    if (prevX == null && prevY == null) {
        prevX = currX;
        prevY = currY;
    }
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", currX);
    c.setAttribute("cy", currY);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", prevX);
    l.setAttribute("y1", prevY);
    l.setAttribute("x2", currX);
    l.setAttribute("y2", currY);
    l.setAttribute("stroke", "black");
    pic.appendChild(l);
    prevX = currX;
    prevY = currY;
});

clear.addEventListener("click", (e) => {
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
    prevX = null; 
    prevY = null;
})

