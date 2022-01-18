//! 12. Swap two numbers

//  without using 3rd variable
let a = 10;
let b = 20;
console.log("Before swapping a value is " + a);
console.log("Before swapping b value is " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("After swapping a value is " + a);
console.log("After swapping b value is " + b);

// With Destructuring
let x = prompt("Enter the first variable: ");
let y = prompt("Enter the second variable: ");

//using destructuring assignment
[x, y] = [y, x];

console.log(`x after swapping: ${x}`);
console.log(`y after swapping: ${y}`);
