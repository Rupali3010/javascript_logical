//! 13. Program to sort array in Ascending Order

var array = [10, 98, 54, 23, 78, 45];
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);
