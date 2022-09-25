/* Make the double() function return a new array with each value 
twice as large as the corresponding value in the passed in array. 
Your solution must use the map() function of the built-in javascript Array object.

Parameters: Given an array of nums
Return: a new array ith each of the nums from the first doubled
Example: ([1,2,10,57]) => [2,4,20,114]
Pseudo Code: return array map elem *2
*/

const double = array => array.map(e => e*2)