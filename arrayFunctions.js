// ep 5

// RANGE, PUSH
const range = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }

  return array;
};

console.log(range(5));

// FOREACH
const myRange = range(10);
myRange.forEach((d) => {
  // forEach is the equivalent of a for loop
  console.log(d);
});

// FILTER
console.log(myRange.filter((d) => d % 2 === 0));

// SORT
console.log([4, 5, 2, 6, 1, 20].sort().reverse()); // output: [6, 5, 4, 20, 2, 1]
// sort converts the elements into strings and compares their UTF-16 code units values

const sortable = [2, 5, 1, 5, 6, 3, 20];
sortable.sort((a, b) => a - b); // output: [1, 2, 3, 5, 5, 6, 20]
sortable.sort((a, b) => (b < a ? -1 : 1)); // output: [20, 6, 5, 5, 3, 2, 1]
console.log(sortable);

// d3 version of sorting
sortable.sort(d3.descending); // or d3.ascending
console.log(sortable); // output: [20, 6, 5, 5, 3, 2, 1]

// SORT BY CERTAIN FIELD OF OBJECTS
const entries = [
  { key: "A", value: "foo" },
  { key: "C", value: "baz" },
  { key: "D", value: "bar" },
  { key: "B", value: "bazz" },
];
// js
console.log(entries.sort((a, b) => (a.key < b.key ? -1 : 1)));
// d3
console.log(entries.sort((a, b) => d3.ascending(a.key, b.key)));

// MAP
console.log(myRange.map((d) => ({ number: d, double: d * 2 })));

// REDUCE
console.log(
  myRange.reduce((accumulator, d) => {
    console.log(
      "Adding: " + accumulator + " + " + d + " = " + (accumulator + d)
    );
    return accumulator + d;
  }, 0)
);

const entries2 = [
  { key: "A", value: "foo" },
  { key: "B", value: "bar" },
];

console.log(
  entries2.reduce((accumulator, d) => {
    // output: {A: 'foo', B: 'bar'}
    accumulator[d.key] = d.value;
    return accumulator;
  }, {})
);

console.log("-- js fully loaded --");
