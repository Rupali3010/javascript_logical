//! 6. Checkif a number is prime or not

let number = parseInt(prompt("Enter a number"));
let isPrime = true;
if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    document.write(`${number} is a prime number`);
  } else {
    document.write(`${number} is a not prime number`);
  }
}
