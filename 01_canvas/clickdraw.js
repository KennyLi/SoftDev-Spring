// Kenny Li
// SoftDev2 pd7
// K00 -- I See a Red Door...
// 2019-01-30

const clear = document.getElementById("clear");
const toggle = document.getElementById("toggle");
const canvas = document.getElementById("slate");

var ctx = canvas.getContext("2d")
var state = "rectangle"

clear.addEventListener("click", () => {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});


toggle.addEventListener("click", () => {
  e.preventDefault();
  state = state == "rectangle" ? "circle" : "rectangle";
  // if (state == "rectangle") {
  //   state = "circle"
  // } else {
  //   state = "rectangle"
  // }
});

canvas.addEventListener("click", (e) => {
  e.preventDefault();
  if (state == "rectangle") {
    ctx.beginPath();
    ctx.rect(e.offsetX - 5, e.offsetY - 5, 10, 10)
    ctx.stroke();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.ellipse(e.offsetX, e.offsetY, 5, 5, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
});
