/* Given an array of numbers, return a new array of length 
number containing the last even numbers from the original array 
(in the same order). The original array will be not empty and 
will contain at least "number" even numbers.

Parameters: given an array of numbers and number
Return: new array of the last n even numbers sorted from the first in sequence.
Example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
Pseudo Code: filter even numbers from array to new even array, return slice of -number
*/

function evenNumbers(array, number) {
    const evenArray = array.filter(e => e%2 == 0)
    return evenArray.slice(-number)
  }

  const evenNumbers = (array, number) => array.filter(e => e%2 == 0).slice(-number)