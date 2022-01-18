//! 56.convert letterof a givenstring in alphabetical order

function alphabet_Soup(str) {
  return str.split("").sort().join("");
}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));
