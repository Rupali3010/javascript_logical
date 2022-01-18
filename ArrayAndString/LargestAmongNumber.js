//! 26.Largest number among three number

function LargestNumber(a, b, c) {
  let max_val = 0;
  if (a > b) {
    max_val = a;
  } else {
    max_val = b;
  }
  if (c > max_val) {
    max_val = c;
  }
  console.log(max_val);
}
LargestNumber(10, 50, 30);
