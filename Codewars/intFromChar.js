// You ask a small girl,"How old are you?" She always says, "x years old", 
// where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, 
// the test input may be "1 year old" or "5 years old". The first character 
// in the string is always a number.

// split string, return first element as number
function getAge(inputString){
   let arr = inputString.split(' ')
   return Number(arr[0])
    }
// ^ First Try!
    const getAge = inputString => Number(inputString.split(' ')[0])

// Alt 
// apperantly it was even easier than I thought

// const getAge = parseInt;

// function getAge(inputString){
//     return parseInt(inputString);
//   }