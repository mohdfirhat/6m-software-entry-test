/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y) {
  // Task 1: Add code here
  /* 
    Adding guard clause for non numeric
    Note: Using typeof instead of Number.isInteger to include decimal and negative number as edge case is not specified
  */
  if (typeof x !== "number" || typeof y !== "number") {
    return -1;
  }
  // Swapping x,y
  [x, y] = [y, x];
  // Logging swapped values
  console.log(x, y);
}

// Task 2: Add code here
result = swap("Apple", 10);
console.assert(result === -1);
swap(9, 17);
