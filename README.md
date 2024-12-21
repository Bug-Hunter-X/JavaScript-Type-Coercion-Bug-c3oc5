# JavaScript Type Coercion Bug

This repository demonstrates a common type coercion issue in JavaScript.  The `foo` function is intended to add two numbers, but due to the way JavaScript handles type coercion, it performs string concatenation when one of the arguments is a string.

## Bug

The `bug.js` file contains the buggy code.  The function `foo` incorrectly adds a number and a string, resulting in unexpected output.

## Solution

The `bugSolution.js` file demonstrates a corrected version of the code. Explicit type checking or conversion is used to ensure that both arguments are numbers before performing addition.

This demonstrates the importance of type checking and explicit conversions in JavaScript to avoid unintended type coercion issues.