// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
/* Paramaters: take in an array on numbers and a number n
Return: the first n numbers in the array
Example: ([1,2,3,4,5,6,7,8], 2) -> [1,2]
Pseudo Code: array.slice(n)*/

function take(arr, n) {
    return arr.slice(0, n);
  }