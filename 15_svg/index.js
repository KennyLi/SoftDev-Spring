// Kenny Li
// Softdev pd7
// K15 -- Scattered
// 2019-03-22

var data = [
  [14.2, 215],
  [16.4, 325],
  [11.9, 185],
  [15.2, 332],
  [18.5, 406],
  [22.1, 522],
  [19.4, 412],
  [25.1, 614],
  [23.4, 544],
  [18.1, 421],
  [22.6, 445],
  [17.2, 408]
]

var svg = d3.select("body")
  .append("svg")
  .attr("width", 1500)
  .attr("height", 700)

var xScale = d3.scaleLinear()
  .domain([11, 25.1])
  .range([0, 1410])

var yScale = d3.scaleLinear()
  .domain([0, 614])
  .range([650, 36])

svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return xScale(d[0]) + 100
  })
  .attr("cy", function (d) {
    return yScale(d[1])
  })
  .attr("r", 5);

var xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(42);

svg.append("g")
  .attr("transform", "translate(100, 650)")
  .call(xAxis);

var yAxis = d3.axisLeft()
  .scale(yScale)

svg.append("g")
  .attr("transform", "translate(100, 0)")
  .call(yAxis);

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y",50)
    .attr("x",-300)
    .attr("fill","purple")
    .attr("font","12px sans-serif")
    .text("Ice Cream Sales($)")

svg.append("text")
    .attr("y",690)
    .attr("x",800)
    .attr("fill","purple")
    .attr("font","12px sans-serif")
    .text("Temperature(C)")

svg.append("text")
    .attr("x", 900)
    .attr("y", 25)
    .style("font-size", "16px")
    .style("text-decoration", "underline")
    .text("Ice Cream Sales vs Temperature");

  // https://www.mathsisfun.com/data/scatter-xy-plots.html
