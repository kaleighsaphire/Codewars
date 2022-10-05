/*
An element is leader if it is greater than The Sum all the elements 
to its right side.
Given an array/list [] of integers , Find all the LEADERS in the array.
Array/list size is at least 3 .

Array/list's numbers will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order 
in the original array/list.

Parameters: Given an array of integers(pos and neg)
Return: An array of the integers that are greater then the sum of the next
sequential elements.
Example: 
([12, 13, 5, -1, 0, 2, 1]) => [13, 5, 2, 1]
Pseudo Code: define new array, loop through orig, if element is > than
array slice[element] reduce, push element to new array 
*/

const arrayLeaders = numbers => {
    const leaders = []
    for(let i = 0; i < numbers.length; i++){
     if(numbers[i] > numbers.slice(i+1).reduce((a,b) =>a +b, 0)) leaders.push(numbers[i]) 
    }
     return leaders
   }
//Alt
function arrayLeaders(numbers){
    const leaders = []
    for(let i = 0; i < numbers.length; i++){
        let total = 0
        for (let j = i+1; j < numbers.length; j++) {
            total += numbers[j]
        }
        if(numbers[i] > total){
            leaders.push(numbers[i])
        }
    }
    return leaders
}

