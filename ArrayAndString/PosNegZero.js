//! 5. check if number is positive,negative or Zero

let num = parseInt(prompt("Enter a number"));
if (num > 0) {
  document.write("Number is positive");
} else if (num == 0) {
  document.write("Number is zero");
} else {
  document.write("Number is Negative");
}
