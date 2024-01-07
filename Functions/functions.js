function calculateCartItem(...args) {
  // using spread operator for unknown number of arguments
  return args;
}

function calculateCartItem(val1, val2, ...args) {
  return args;
}

console.log(calculateCartItem(1, 23, 3));
console.log(calculateCartItem(1, 23, 3));
