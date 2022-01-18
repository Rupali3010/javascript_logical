//! 44. Star Pattern

let n = 3;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
