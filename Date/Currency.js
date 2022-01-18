//! 67. program to format numbers as currency string

const format = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
format.format(2500);

const result = (2500).toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(result);
