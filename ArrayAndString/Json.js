var obj = [
  {
    name: "Rupali",
    age: 23,
  },
  {
    name: "omkar",
    age: 23,
  },
  {
    name: "prathap",
    age: 23,
  },
];
console.log(obj);

// obj[1].name = "vishal";
// console.log(obj[1]);

// let a = obj.filter((val, ind) => {
//   if (val.name == "prathap") return val;
// });
// console.log(a);

delete obj[0];
console.log(obj);
