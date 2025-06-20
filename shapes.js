// ep 4
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("body").append("svg");
svg.attr("width", width).attr("height", height);

const n = 100;

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#mask-1)");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#mask-2)");

// function that renders the mask
const renderMask = (selection, id, inverted) => {
  const mask = selection.append("mask").attr("id", id);

  // mask
  //   .append("rect")
  //   .attr("width", width)
  //   .attr("height", height)
  //   .attr("fill", inverted ? "black" : "white");

  // MASK FOR 1 SHAPE
  // mask
  //   .append("g")
  //   .attr("transform", `translate(${width / 2},${height / 2})`)
  //   .append("path")
  //   .attr("d", d3.symbol(d3.symbols[1], 100000))
  //   .attr("fill", inverted ? "white" : "black");

  // const g = mask
  //   .append("g")
  //   .attr("transform", `translate(${width / 2},${height / 2})`)

  // MASK FOR ALL SHAPES ON TOP OF EACH OTHER
  // g.selectAll('path')
  //   .data(d3.range(d3.symbols.length))
  //   .join('path')
  //   .attr("d", d => d3.symbol().type(d3.symbols[d]).size(100000)())
  //   // symbol needs the type to be declared, otherwise the path does not get the correct string
  //   .attr("fill", inverted ? "white" : "black");

  // MASK FOR ALL SHAPES NEXT TO EACH OTHER GROUPED
  // mask
  //   .selectAll("g")
  //   .data(d3.range(d3.symbols.length))
  //   .join((enter) =>
  //     enter
  //       .append("g")
  //       .attr("transform", (d) => `translate(${d * 125 + 100},${height / 2})`)
  //       .append("path"))
  //       .attr("d", (d) => d3.symbol().type(d3.symbols[d]).size(8000)())
  //       .attr("fill", inverted ? "white" : "black");

  // ------------------------------------------------

  // ALTERNATING DIRECTION OF STRIPES FOR THE SHAPES
  // base fill
  mask.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", inverted ? "black" : "white");

  const groups = mask
    .selectAll("g")
    .data(d3.range(d3.symbols.length))
    .join("g")
    .attr("transform", (d) => `translate(${d * 125 + 50}, 0)`);

  // alternating backgrounds
  groups.append("rect")
    .attr("width", 120)
    .attr("height", height)
    .attr("transform", "translate(-10,0)")
    .attr("fill", (d) => d % 2 === 0 !== inverted ? "black" : "white")
    .attr("fill", (d) => d % 2 === 1 !== inverted ? "white" : "black");

  // symbols centered vertically and horizontally
  groups.append("path")
    .attr("d", (d) => d3.symbol().type(d3.symbols[d]).size(8000)())
    .attr("transform", `translate(50, ${height / 2})`)
    .attr("fill", (d) => d % 2 === 0 !== inverted ? "white" : "black")
    .attr("fill", (d) => d % 2 === 1 !== inverted ? "black" : "white");
        
};
// renderMask("mask-1", true);
// renderMask("mask-2", false);

svg.call(renderMask, "mask-1", false).call(renderMask, "mask-2", true);

console.log("-- js fully loaded --");