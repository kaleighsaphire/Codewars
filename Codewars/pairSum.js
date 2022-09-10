/* Given a sequence of numbers, find the largest pair sum in the sequence.
Parameters: Given an array of numbers
Return: sum of the largest 2 numbers in array
Example: [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Pseudo Code: sort array in decsending order return sum of first two index
*/ 
function largestPairSum (numbers) {
    numbers.sort((a,b)=>b-a)
    return numbers[0]+numbers[1]
  }