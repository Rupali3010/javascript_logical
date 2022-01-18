//! 22. Remove specific elements from an array
function removeItemFromArray(array, n) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== n) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
const result = removeItemFromArray([1, 2, 3, 4, 5], 5);
console.log(result);
