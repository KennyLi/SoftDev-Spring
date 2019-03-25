// Kenny Li
// Softdev pd7
// K15 -- Scattered
// 2019-03-22
var width = 1400,
  height = 700,
  padding = 75,
  data = [
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
  ];

var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

//----------X axis----------
var xScale = d3.scaleLinear()
  .domain([11, d3.max(data, function (d) {
    return d[0];
  })])
  .range([padding, width - padding * 2]);

var xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(42);

svg.append("g")
  .attr("transform", "translate(0," + (height - padding) + ")")
  .call(xAxis);

svg.append("text")
  .attr("id", "label")
  .attr("transform", "rotate(-90)")
  .attr("y", padding / 2)
  .attr("x", -(height / 2))
  .text("Ice Cream Sales($)");


//----------Y axis----------
var yScale = d3.scaleLinear()
  .domain([0, d3.max(data, function (d) {
    return d[1];
  })])
  .range([height - padding, padding]);

var yAxis = d3.axisLeft()
  .scale(yScale);

svg.append("g")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis);

svg.append("text")
  .attr("id", "label")
  .attr("y", height - padding / 2)
  .attr("x", width / 2)
  .text("Temperature(C)");


//----------Data points----------
svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return xScale(d[0])
  })
  .attr("cy", function (d) {
    return yScale(d[1])
  })
  .attr("r", 5);

//----------Title----------
svg.append("text")
  .attr("id", "label")
  .attr("y", padding / 2)
  .attr("x", width / 2)
  .style("text-decoration", "underline")
  .text("Ice Cream Sales vs Temperature");
