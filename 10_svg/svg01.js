// Kenny Li
// SoftDev pd8
// K09 -- Connect the Dots
// 2019-03-13

var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");


pic.addEventListener("click", (e) => {
    var currX = e.offsetX;
    var currY = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", currX);
    c.setAttribute("cy", currY);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.style.pointerEvents = "none";
    pic.appendChild(c);
    console.log(e.target.childNodes[1])
});

clear.addEventListener("click", (e) => {
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
})
