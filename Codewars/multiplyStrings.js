/* You received an array with two strings. Create a function that will 
return their product as a string. 
Parameters: given array with 2 string numbers 
Return: the product of those numbers as a string
Example: ['9','6'] => '54'
['3','5'] => '15'
Pseudo Code: reduce array, return as string
*/

function arrMultiply(arr){
    return arr.reduce((a,b)=> a*b).toString()
 }

 const arrMultiply = arr => arr.reduce((a,b)=> a*b).toString()

const arrMultiply = ([a, b]) => '' + (a * b);