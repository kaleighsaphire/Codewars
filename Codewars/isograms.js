// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters 
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

/* Parameters: given a string
Return: true if non of the string characters are repeated, false if they are
Example: ('arcane') -> false, ('boo') -> false, ('cat') -> true
Pseudo Code: split string, sort array, for loop, if i == i - 1 false */

function isIsogram(str){
    const arr = str.toLowerCase().split('').slice().sort()
    for (let i = 0; i < arr.length; i++){
        if (arr[i+1] == arr[i]){
          console.log(arr)
            return false;
        }
    }
  return true;
}

Alt 
// new string removes duplicates so if its the same length as original its true.
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }