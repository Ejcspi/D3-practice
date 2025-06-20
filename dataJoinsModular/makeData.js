export function makeData(t, n) {
  const data = d3.range(n).map((d) => ({
    x: d * 60 + 50,
    y: 250 + Math.sin(d * 0.5 + t) * 220,
    r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
  }));
  return data;
}