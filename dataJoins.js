// ep 5

// using select from d3
const height = window.innerHeight;
const width = window.innerWidth;
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// let t = 0;
// setInterval(() => {
//   const n = 8 + Math.sin(t) * 8;
//   const data = d3.range(n).map((d) => ({
//     x: d * 60 + 50,
//     y: 250 + Math.sin(d * 0.5 + t) * 220,
//     r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
//   }));
//   // MERGE ENTER AND UPDATE sections
//   // // enter --> update --> exit
//   // const circles = svg.selectAll("circle").data(data);
//   // const circleEnter = circles.enter().append("circle").attr("r", 20); // enter
//   // circles // update
//   //   .merge(circleEnter)
//   //   .attr("cx", (d) => d.x)
//   //   .attr("cy", (d) => d.y);
//   // circles.exit().remove();

//   // JOIN HANDLES ENTER, UPDATE AND EXIT SECTIONS AUTOMATICALLY
//   const circles = svg
//     .selectAll("circle")
//     .data(data)
//     .join("circle")
//     .attr("r", (d) => d.r)
//     .attr("cx", (d) => d.x)
//     .attr("cy", (d) => d.y);

//   t = t + 0.01;
// }, 1000 / 60);

// CLEAN CODE WITH FUNCTION STRUCTURE
// function makeData(t, n) {
//   const data = d3.range(n).map((d) => ({
//     x: d * 60 + 50,
//     y: 250 + Math.sin(d * 0.5 + t) * 220,
//     r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
//   }));
//   return data;
// }

// function vizData(data) {
//   svg
//   .selectAll("circle")
//   .data(data)
//   .join("circle")
//   .attr("r", (d) => d.r)
//   .attr("cx", (d) => d.x)
//   .attr("cy", (d) => d.y);
// }
// let t = 0;
// setInterval(() => {
//   const n = 8 + Math.sin(t) * 8;
//   vizData(makeData(t, n));    // create and display data (circles)
//   t = t + 0.01;
// }, 1000 / 60)

import { vizData } from "./dataJoinsModular/vizData.js"; // to make import work, index.js's type needs to be set as module
import { makeData } from "./dataJoinsModular/makeData.js";

let t = 0;
setInterval(() => {
  const n = 8 + Math.sin(t) * 8;
  svg.call(vizData, makeData(t, n));
  t = t + 0.01;
}, 1000 / 60);

console.log("-- js fully loaded --");
