/*
Given an array/list of integers, find the Nth smallest element in the array.

Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.

P: given an array of at least 3 nums, pos or neg, and a single pos num
R: the smallest num in the nth spot(list starting at 1)
E: 
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
PC: sort array, return n-1
*/

function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}