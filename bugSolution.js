function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Both arguments must be numbers';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: Error: Both arguments must be numbers
console.log(foo(1, 2)); // Output: 3