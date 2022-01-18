//! 1. Find a Reverse String Without reverse method

var str = "javascript";

let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
document.write(reverse);
