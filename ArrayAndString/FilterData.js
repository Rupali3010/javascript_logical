//! 24. Filtered data which is having length more than 6

let array = ["rupali", "vasanti", "vasant", "shinde"];
let filteredData = array.filter((value, index) => {
  if (value.length > 6) {
    return value;
  }
});
console.log(filteredData);
