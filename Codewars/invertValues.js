// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate 
// the input array/list.

function invert(array) {
    const newArray = array.map(x => x *= -1)
    return newArray;
 }

//  Alts 

//  function invert(array) {
//     return array.map( x => x === 0 ? x : -x);
//  }


//  function invert(array) {
//     return array.map(el => -el);
//  }