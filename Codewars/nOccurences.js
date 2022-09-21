/* Given an array of integers and an integer n, find all occurrences 
of n in the given array and return another array containing all the 
index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Parameters: given an array of numbers and a number(n)
Return: a new array of all the indices of where n occurs in original array
Example: ([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
Pseudo Code: define empty array2, loop through original array, if element matches
n, push element index to array2 return array2
*/

const findAll = (array, n) => {
    const arr = []

    for (let i=0; i < array.length; i++){
        if (array[i] == n){
            arr.push(i)
        }
    }
    return arr
  }