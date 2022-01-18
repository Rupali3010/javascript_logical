//! 7. Javascript program for Fibonacci series

let number = parseInt(prompt("Enter a positive number"));
let num1 = 0,
  num2 = 1,
  nextTerm;
nextTerm = num1 + num2; //1 2 3 5 8

while (nextTerm <= number) {
  console.log(nextTerm);
  num1 = num2; //3
  num2 = nextTerm; //5
  nextTerm = num1 + num2; //8
}
