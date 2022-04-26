// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
// convert all to numbers
 const toNumbers =  x.map(str => Number(str))
//reduce
return toNumbers.reduce((x,y) => x + y)
}

// Alt 
// const sumMix = x => x.reduce((a,b) => +b+a, 0)