// ! 39. Reverse a array

let a = [1, 2, 3, 4, 5];

// console.log(a.reverse());

let reverse = a.reduce((prev, current) => {
  prev.unshift(current);
  return prev;
}, []);

console.log(reverse);
