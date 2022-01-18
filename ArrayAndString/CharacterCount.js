//! 63. Find the length of an string

function charCount(string) {
  var length = 0;
  while (string[length]) {
    length++;
  }
  return length;
}
document.write(charCount("Rupali"));
