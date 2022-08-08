// In this kata, your job is to return the two distinct highest values in a list. 
// If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

/* 
Parameters: Given an array of numbers
Return: The highest 2 unique numbers
Example: 
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
Pseudo Code: set new array, sort b - a, slice last 2 */

function twoHighest(arr) {
  return new ...Set(arr.sort(function(a, b){return b - a})).slice(0,2)
}