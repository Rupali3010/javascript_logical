//! 23. factorial number

function factorial() {
  let i,
    fact = 1;
  let num = document.getElementById("num").value;
  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }
  i = i - 1;
  document.getElementById("res").innerHTML =
    "The Factorial of the number " + i + " is " + fact;
}
