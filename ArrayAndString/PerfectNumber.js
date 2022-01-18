// ! 48. Find a given number is perfect or not

function perfectNumber(number) {
  var value = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      value += i;
    }
  }
  if (value === number && value !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
perfectNumber(28);
