// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. 
// You should find the N-th power of the element in the array with the index N. 
// If N is outside of the array, then return -1. Don't forget that the first 
// element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// Parameters: take in an array of numbers > 0 and another non-negative number N 
// Return: If the Nth index of the array exists, return the Nth number to the power on N
// Example: [1,2,3,4,5,6], 3 -> 27
// Pseudo Code: array[n] ? array[n]^n : -1

function index(array, n){
    if (array[n] != null){
        return array[n]**n;
    }else{
        return -1;
    }
  }
||
function index(array, n){
    return array[n] != null ? array[n]**n : -1;
   
  }
  ||

  function index(array, n){
    return array[n] ? array[n]**n : -1;
   }

   // Final 
   const index = (array, n) => array[n] ? array[n]**n : -1;
   ||
   
// alt 
  function index(array, n){
    if (array.length > n-1){
        return array[n]**n;
    }else{
        return -1;
    }
  }