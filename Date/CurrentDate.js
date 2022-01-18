//! 4. program to display the date
const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();

console.log("Date: " + n);
console.log("Time: " + time);
