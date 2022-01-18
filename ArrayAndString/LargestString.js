//! 27. Find Largest string from array

const array = ["java", "javascript", "reactjs", "nodejs", "html"];
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i].length < array[j].length) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array[array.length - 1]);
