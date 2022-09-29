/* 
Given a two-dimensional array of integers, return the flattened 
version of the array with all the integers in the sorted (ascending) order.
Parameters: Given an array of arrays, with numerical elements
Return: a single array of both array's elements, sorted in acending order
Example:([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]) => [1, 2, 3, 4, 5, 6, 7, 8, 9]
Pseudo Code: flatten array, sort, a - b
*/

function flattenAndSort(array) {
  return array.flat().sort((a,b)=> a-b);
}