const clear = document.getElementById("clear");
const toggle = document.getElementById("toggle");
const canvas = document.getElementById("slate");
let ctx = canvas.getContext("2d")
clear.addEventListener("click", () => {
  console.log("clear");
});

canvas.addEventListener("click", (e) => {
    ctx.ellipse(e.clientX, e.clientY, 10, 10, 0, 0, 2 * Math.PI);
});
