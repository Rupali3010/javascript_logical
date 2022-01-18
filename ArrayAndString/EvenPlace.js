//! 41. Even index should be multiply by 2

var arr = [10, 20, 30, 40, 50];
let multi = arr.map((val, ind) => {
  if (ind % 2 == 0) {
    return val * 2;
  } else {
    return val;
  }
});
console.log(multi);
