/* Given two integer arrays where the second array is a shuffled 
duplicate of the first array with one element missing, find the 
missing element.

Please note, there may be duplicates in the arrays, so checking 
if a numerical value exists in one and not the other is not a 
valid solution.
Parameters: given two arrays of numbers, second is a shuffled 
duplicate of first
Return: the element from first array that is missing from second
Example: ([1, 2, 2, 3], [1, 2, 3]) => 2
([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8 
Pseudo Code: sort both array, compare he indexes and find
first element that is not equal
*/
Find the missing element between two arrays
function findMissing(arr1, arr2) {
    arr1 = arr1.sort((a,b)=> a-b)
    arr2 = arr2.sort((a,b)=> a-b)
    for (let i=0; i < arr1.length; i++){
        if (arr1[i] !== arr2.indexOf(arr1[i])){
           return arr1[i]
        }
    }
}

const findMissing = (arr1, arr2) => {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] != arr2[i]) return arr1[i];
    }
  }

// Solutions

function findMissing(arr1, arr2) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
 return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
 }