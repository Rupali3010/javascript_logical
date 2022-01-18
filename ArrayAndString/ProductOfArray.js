//! 64. find product of value present in arr which is divisible by both 2 and 3

var arr1 = [1, 5, 3, 6, 9, 12];
var product = 1;
let y = arr1.forEach((value, index) => {
  if (value % 2 == 0 && value % 3 == 0) {
    product *= value;
  }
});
console.log(product);
