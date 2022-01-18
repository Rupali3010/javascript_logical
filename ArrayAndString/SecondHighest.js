//! 2. Find a second highest number from an array

var x = [45, 20, 13, 40, 10, 1];

let secondHighest = x.sort((a, b) => {
  return b - a;
})[1];
document.write(secondHighest);

// without inbuilt method
var array = [10, 98, 54, 23, 78, 45];
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
for (let k = array.length - 2; k >= 0; k--) {
  if (array[k] != array[array.length - 1]) {
  }
}
console.log(array[array.length - 2]);
