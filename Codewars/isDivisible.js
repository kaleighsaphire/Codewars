// Complete the function which takes two arguments and returns all numbers which are 
// divisible by the given divisor. First argument is an array of numbers and the second 
// is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

//Parameter: 1st is an array of numbers, second is a single number 
//Return: all the numbers from the first array that are visible by the second parameter
//Example [2,4,6,8,9], 2 returns [2,4,6,8]  
//Psuedo Code: filter array, if element % second param === 0, return it

function divisibleBy(numbers, divisor){
    return numbers.filter(n => n % divisor === 0);
}