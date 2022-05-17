// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// Paramaters: n is a number, could be negative or float
// Return: True if n is even, false is n is odd or float
// Example: n = 4, true || n = 9.6, false
// Pseudo Code: return n isinteger? % 2 == 0 ? true : false

const testEven = n => Number(n % 2 === 0) ? true : false;

// alt 
// const testEven = n => n % 2 === 0;