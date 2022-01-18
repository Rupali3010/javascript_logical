//! 17. Sum of Natural numbers

const number = parseInt(prompt("Enter a positive integer: "));
let sum = 0,
  i = 1;
while (i <= number) {
  sum += i;
  i++;
}
console.log("The sum of natural numbers:", sum);
