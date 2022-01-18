//! 46. Find Average of given array

var arr = [10, 20, 30];
var sum = 0;
var avg;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
avg = sum / arr.length;
console.log(avg);
