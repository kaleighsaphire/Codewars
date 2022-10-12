/*
You are going to be given an array of integers. Your job is to take 
that array and find an index N where the sum of the integers to the 
left of N is equal to the sum of the integers to the right of N. If 
there is no index that would make this happen, return -1.
If you are given an array with multiple answers, return the lowest correct index.

Parameters: given an array of nums, possibly empty?
Return: The first index where all the nums to the right = nums to left, else -1
Example: ([1,2,3,4,3,2,1]) -> 3
([1,100,50,-51,1,1]) -> 1
([20,10,-80,10,10,15,35]) -> 0
([1,2,3]) -> -1
Pseudo Code: loop through array, slice array starting from 0 to index, reduce and 
store num in variable, slice array from index +1, reduce and store variable, 
if both variables are equal return index, otherwise return -1
*/

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = arr.slice(0, i).reduce((a, b) => a + b, 0)
        let k = arr.slice(i + 1).reduce((a, b) => a + b, 0)
        if (j == k) {
            return i
        }
    }
    return -1
}