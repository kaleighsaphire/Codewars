/* Write a function that combines two arrays by alternatingly taking elements 
from each array in turn.
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of 
integers (all positive starting at 1).

Parameters: given two arrays, one of lowercase string char, one of positive ints
Return: a new array of both arrays merged into one, alternating their elements
Examples:([a, b, c, d, e], [1, 2, 3, 4, 5])=>[a, 1, b, 2, c, 3, d, 4, e, 5]
([1, 2, 3], [a, b, c, d, e, f]) => [1, a, 2, b, 3, c, d, e, f]
Pseudo Code: define new array, determine longer array, for loop, push element from longer array,
if there is an element in second array push it

*/

  function mergeArrays(a, b) {
    const arr = []
    if (a.length > b.length ){
        for(let i=0;i<a.length;i++){
            arr.push(a[i])
            b[i] ? arr.push(b[i]) : arr
        }
    }else{
        for(let i=0;i<b.length;i++){
            a[i] ? arr.push(a[i]) : arr
            arr.push(b[i])
        }
    }
    return arr
  }