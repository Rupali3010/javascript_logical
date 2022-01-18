//! 9. Find the factors of given number

let value = prompt("Enter a positive number");
console.log("factors of number: ");
for (let i = 1; i <= value; i++) {
  if (value % i == 0) {
    console.log(i);
  }
}
