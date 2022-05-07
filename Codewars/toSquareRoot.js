// Write a method, that will get an integer array as parameter 
// and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, 
// and will never be empty or null.

// function squareOrSquareRoot(array) {
//     //loop through array testing is a number has a square root or not
//     // if it does, take the root, if not return its square
//         let squareArray = array.map(x => Math.floor(Math.sqrt(x)) ?  Math.sqrt(x) : x*x )
    
//         return squareArray;  
//  }

//  function squareOrSquareRoot(array) {
//     let squareArray = array.map(x => Math.sqrt(x) == Math.floor() ?  Math.sqrt(x) : x*x )

//     return squareArray;  
// }

// Final Solution
function squareOrSquareRoot(array) {
    return array.map(x => Math.sqrt(x) % 1 == 0  ?  Math.sqrt(x) : x*x )
  }

//   Alt 

//   function squareOrSquareRoot(array) {
//     return array.map(x => {
//       const n = Math.sqrt(x)
//       return Number.isInteger(n) ? n : x * x
//     })
//   }

// function squareOrSquareRoot(array) {
//     return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
//   }