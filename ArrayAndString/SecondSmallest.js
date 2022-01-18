//! 25. Second Smallest Number from Array

let array = [96, 23, 65, 85, 74, 20, 12, 52];
let smallestNum = array.sort((a, b) => {
  return a - b;
})[1];
console.log(smallestNum);
