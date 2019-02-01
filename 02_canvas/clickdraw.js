// lemonwater_soda Johnson Li, Kenny Li
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-01-31

const clear = document.getElementById("clear");
const canvas = document.getElementById("playground");

var ctx = canvas.getContext("2d")

//event listener for clear button
clear.addEventListener("click", () => {
  ctx.beginPath()
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//event listener for drawing on canvas
canvas.addEventListener("click", (e) => {
    //defines when a new path is being drawn
    //e.offsetX and e.offsetY give the coordinates relative to the canvas
    ctx.beginPath()
    ctx.moveTo(e.offsetX,e.offsetY)
    ctx.arc(e.offsetX, e.offsetY, 30, 0, 2 * Math.PI);
    ctx.closePath()
    ctx.stroke()
});
