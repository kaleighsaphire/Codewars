/* To complete this Kata you need to make a function 
multiplyAll/multiply_all which takes an array of integers 
as an argument. This function must return another function, 
which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements 
from the first array multiplied by the integer.
You must not mutate the original array.

Parameters: Given an array, then given a number
Return: the array with each element multiplied by the number
Example: ([1, 2, 3])(2) => [2, 4, 6]
Pseudo Code: Create function multiply all that takes in argument a, 
that returns another function which takes in argument b, and returns
argument a mapped, with element times argument b
*/
function multiplyAll(a) {
    return function numberTwo(b){
              return a.map(c=>c*b)
           }
} 

multiplyAll = a => b => a.map(c => c * b);


