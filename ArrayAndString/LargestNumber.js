//! 28. Find Largest number from an array

var arr = [3, 6, 2, 56, 32, 5, 8, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);
