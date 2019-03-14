// Kenny Li
// SoftDev pd8
// K09 -- Connect the Dots
// 2019-03-13

var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");


pic.addEventListener("click", function (e) {
    var currX = e.offsetX;
    var currY = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", currX);
    c.setAttribute("cy", currY);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
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
        }; 
    });
};

clear.addEventListener("click", function (e) {
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
});

