/* In this Kata, you will be given an array of unique elements, 
and your task is to rearrange the values so that the first max 
value is followed by the first minimum, followed by second max 
value then second min value, etc.

Parameters: Given an array of integers
Return: a sorted array of the highest value, followed by the lowest, followed by
second hight and lowest...
Example: ([78,44,86,2,9,23]) => [86, 2, 78, 9, 44, 23]
Pseudo code: sort array high to low, declare new array, loop through half of array,
push first element and last element to new array, if original array was 
even return new array, else return new array minus last element.
*/

function solve(arr){
    arr.sort((a,b) => b-a)
    const arr2 = []
    for (let i = 0; i < (arr.length/2); i++){
        arr2.push(arr[i])
        arr2.push(arr[arr.length-i-1])
    }
   return arr.length % 2 == 0 ? arr2 : arr2.slice(0, -1)
}
