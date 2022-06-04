// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.
/* Parameters: take in an array of numbers
Return: the array without any duplicated numbers
Example: ([1,2,2,3,3,4]) -> [1,2,3,4]
Pseudo Code: map array if array[i] does not == array[i]*/

function distinct(a) {
    const A = []
    for (let i = 0; i < a.length; i++){
        if (!A.includes(a[i])){
            A.push(a[i])
        }
    }
    return A;
  }
// new Set(array) creates a new array without any duplicate elements
  Alt 
  function distinct(a) {
    return [...new Set(a)];
  }