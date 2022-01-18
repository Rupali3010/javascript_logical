//! 19. Remove Duplicates from an array

const array = [1, 2, 3, 2, 3];
function getUnique(arr) {
  let uniqueArr = [];
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}
getUnique(array);

//! Using set method
function getUnique(arr) {
  let uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 3];
getUnique(array);
