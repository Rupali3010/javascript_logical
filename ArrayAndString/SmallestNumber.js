//! 29. Find Smallest number from an array

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (smallest > arr[i]) {
    smallest = arr[i];
  }
}
console.log(smallest);
