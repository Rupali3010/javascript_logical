//! 68.How to convert array to object

let emp = {
  id: 1,
  name: "rupali",
  college: "dypatil",
};
console.log(Object.assign({}, emp));

console.log({ ...emp });

let arr1 = [
  ["id", "1"],
  ["name", " User"],
  ["age", "25"],
  ["profession", "Developer"],
];
console.log(Object.fromEntries(arr1));
