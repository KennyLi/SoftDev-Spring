// lemonwater_soda Johnson Li, Kenny Li
// SoftDev2 pd7
// K02 -- Connecting the Dots
// 2019-02-01

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
    //e.offsetX and e.offsetY give the coordinates relative to the canvas
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.moveTo(e.offsetX + 30, e.offsetY)
    ctx.arc(e.offsetX, e.offsetY, 30, 0, 2 * Math.PI);
    ctx.stroke()
    ctx.moveTo(e.offsetX,e.offsetY)
});
