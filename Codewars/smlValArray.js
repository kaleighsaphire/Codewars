/* Write a function that can return the smallest value of an 
array or the index of that value. The function's 2nd parameter 
will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with 
at least 1 number and no duplicates. Assume the second parameter 
will be a string holding one of two values: 'value' and 'index'.

Parameters: Given an array of numbers and a string(either value or index)
Return: if the second argument is value give the smallest number in array,
if the second argument is index give the index of the smallest value
Example: ([1,2,3,4,5], 'value') // => 1
([1,2,3,4,5], 'index') // => 0
Pseudo Code: if value return math min array, if index return index of math min array
*/

function min(arr, toReturn) {
    if (toReturn == 'value'){
        return Math.min(...arr)
    }else{
        return arr.indexOf(Math.min(...arr))
    }
  }

const min = (arr, toReturn) => toReturn == 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
