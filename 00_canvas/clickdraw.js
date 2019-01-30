// Kenny Li
// SoftDev2 pd7
// K00 -- I See a Red Door...
// 2019-01-30

const clear = document.getElementById("clear");
const toggle = document.getElementById("toggle");
const canvas = document.getElementById("slate");

let ctx = canvas.getContext("2d")
let state = "rectangle"

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});


toggle.addEventListener("click", () => {
  if (state == "rectangle") {
    toggle.innerHTML = "Rectangle Mode"
    state = "circle"
  } else {
    toggle.innerHTML = "Circle Mode"
    state = "rectangle"
  }
});

canvas.addEventListener("click", (e) => {
  var rect = canvas.getBoundingClientRect();

  if (state == "rectangle") {
    ctx.beginPath();
    ctx.rect(e.clientX - rect.left, e.clientY - rect.top, 10, 10)
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.ellipse(e.clientX - rect.left, e.clientY - rect.top, 5, 5, 0, 0, 2 * Math.PI);
    ctx.stroke();
  }
});
