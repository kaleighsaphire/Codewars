// Task
// Sum all the numbers of a given array ( cq. list ), except the highest 
// and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each 
// edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an 
// array, or the given array is an empty list or a list with only 1 element, 
// return 0.

// Determine in array has < 1 element, return 0
// Determine highest integer value and lowest integer value in array, remove
// Reduce remaining elements

// function sumArray(array) {
//     if (Number.isInteger(array)){
//        return array.filter(Math.max(array) + Math.min(array)).reduce((p,t) => p+t)
//     }else{
//         return 0;
//     }
// }

// function sumArray(array) {
//     if (Number.isInteger(array)){
//        let minusHighestArray = array.filter(function(value, index, arr){
//            Math.max(array)
//        })
//        let minusLowestArray = array.filter(function(value, index, arr){
//         Math.min(array)
//     })
//        minusLowestArray.reduce((p,t) => p+t)
//     }else{
//         return 0;
//     }
// }

function sumArray(array) {
    if (array == null || array.length < 2){
      return 0;
    }else{
      return array.reduce((a,b) => a+ b) - Math.max(...array) - Math.min(...array);
    }
}

// Alt 
// function sumArray(array) {
//     return Array.isArray(array) && array.length > 1
//       ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//       : 0
//   }