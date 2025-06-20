export function vizData(svg, data) {
  svg
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", (d) => d.r)
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y);
}
