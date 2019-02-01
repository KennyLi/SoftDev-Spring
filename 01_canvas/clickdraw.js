// lemonwater_soda Johnson Li, Kenny Li
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-01-31

const clear = document.getElementById("clear");
const toggle = document.getElementById("toggle");
const canvas = document.getElementById("slate");

var ctx = canvas.getContext("2d")
var state = "rectangle"


//event listener for clear button
clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//event listener for toggle button
toggle.addEventListener("click", () => {
  state = state == "rectangle" ? "circle" : "rectangle";
  // if (state == "rectangle") {
  //   state = "circle"
  // } else {
  //   state = "rectangle"
  // }
});


//event listener for drawing on canvas
canvas.addEventListener("click", (e) => {
  //prevents the browser's default action from happening
  e.preventDefault();
  if (state == "rectangle") {
    //defines when a new path is being drawn
    ctx.beginPath();
    //e.offsetX and e.offsetY give the coordinates relative to the canvas
    ctx.rect(e.offsetX, e.offsetY, 10, 10)
    ctx.stroke();
  } else {
    //defines when a new path is being drawn
    ctx.beginPath();
    //e.offsetX and e.offsetY give the coordinates relative to the canvas
    ctx.ellipse(e.offsetX, e.offsetY, 5, 5, 0, 0, 2 * Math.PI);
    ctx.stroke();
  }
});
