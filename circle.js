// ep 4
// import 'd3';  // only works if npm and d3 are installed

const width = window.innerWidth;
const height = window.innerHeight;

// const svg = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'svg'
// );

// svg.setAttribute('width', width-500);
// svg.setAttribute('height', height-500);
// document.body.appendChild(svg);

// const rect = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect'
// );
// rect.setAttribute('width', 300);
// rect.setAttribute('height', 300);
// svg.appendChild(rect);

// d3.select('body').append('svg').attr('width', width).attr('height', height).style('background-color', 'blue');

const svg = d3.select("body").append("svg");
svg.attr("width", width).attr("height", height);

const n = 100;
// CREATING RECTANGLES WITH FOR LOOPS
// const marks = [];

// for (let i = 0; i < n; i++) {
//   marks.push({
//     y: i * 20,
//     width: width,
//     height: 10,
//     mask: "url(#circle-mask)",
//   });
// }

// svg
//   .selectAll("rect")
//   .data(marks)
//   .join("rect")
//     .attr("y", (d) => d.y)
//     .attr("width", (d) => d.width)
//     .attr("height", (d) => d.height)
//     .attr("mask", (d) => d.mask);

// CREATING THE IMAGE WITH CLASSES
// svg
//   .selectAll("rect.horizontal")
//   .data(d3.range(n))
//   .join("rect")
//   .attr("y", (d) => d * 20)
//   .attr("width", width)
//   .attr("height", 10)
//   .attr("class", "horizontal")
//   .attr("mask", "url(#circle-mask)");

// const mask = svg.append("mask").attr("id", "circle-mask");

// mask
//   .append("rect")
//   .attr("width", width)
//   .attr("height", height)
//   .attr("fill", "black");

// mask
//   .append("circle")
//   .attr("cx", width / 2)
//   .attr("cy", height / 2)
//   .attr("r", 200)
//   .attr("fill", "white");

// // Mask-2
// svg
//   .selectAll("rect.vertical")
//   .data(d3.range(n))
//   .join("rect")
//   .attr("x", (d) => d * 20)
//   .attr("width", 10)
//   .attr("height", height)
//   .attr("class", "vertical")
//   .attr("mask", "url(#circle-mask-2)");

// const mask2 = svg.append("mask").attr("id", "circle-mask-2");

// mask2
//   .append("rect")
//   .attr("width", width)
//   .attr("height", height)
//   .attr("fill", "white");

// mask2
//   .append("circle")
//   .attr("cx", width / 2)
//   .attr("cy", height / 2)
//   .attr("r", 200)
//   .attr("fill", "black");

// CREATING THE IMAGE WITH GROUPS
svg
  .append("g") // change
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#circle-mask)");

const mask = svg.append("mask").attr("id", "circle-mask");

mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black");

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white");

// Mask-2
svg
  .append("g") // change
  .selectAll("rect")    // associates an array with the empty selection
  .data(d3.range(n))    // accepts/creates an array, and gets associated with the selection
  .join("rect")         // for all empty data, creates a rectangle = .enter().append('rect')
  .attr("x", (d) => d * 20)   // mapping function that takes each element in the array
  .attr("width", 10)
  .attr("height", height)     // .attr mutates the DOM elements
  .attr("mask", "url(#circle-mask-2)");

const mask2 = svg.append("mask").attr("id", "circle-mask-2");

mask2
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

mask2
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "black");

console.log("-- js fully loaded --");
