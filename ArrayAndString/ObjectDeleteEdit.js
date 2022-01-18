//! 47. Object Edit and Delete

var obj = [
  {
    name: "rupali",
    place: "pune",
  },
  {
    name: "vishal",
    place: "bangalore",
  },
  {
    name: "chaitali",
    place: "basavanagudi",
  },
];

// Edit
obj[1].name = "shivam";
console.log(obj[1]);

// Delete
delete obj[2];
console.log(obj);
