//!  14. Program to sort array in Descending order

var array1 = [10, 98, 54, 23, 78, 45];
for (let i = 1; i < array1.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array1[i] > array1[j]) {
      let temp = array1[i];
      array1[i] = array1[j];
      array1[j] = temp;
    }
  }
}
console.log(array1);
