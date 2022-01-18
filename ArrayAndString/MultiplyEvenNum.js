// ! 42. Find even number from an array and multiply by 2

var array = [50, 75, 96, 89, 22, 33];
let anotherArray = array.map((value, index) => {
  if (value % 2 == 0) {
    return value * 2;
  } else {
    return value;
  }
});
console.log(anotherArray);
