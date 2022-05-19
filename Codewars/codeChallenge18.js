// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer 
// of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// Parameters: given 2 strings, second string will always contain 1 character
// Return: the number of occurences of the second string in the first
// Example: 'example', 'e' -> 2
// Pseudo Code: for each char in str match char and ad to return

function strCount(str, letter){  
    let count = 0
    for(let i = 0; i < str.length; i++){
       if (str[i] == letter){
        count++
       }
    }
    return count;
  }

//   Alt 
//   function strCount(str, letter){  
//     return str.split(letter).length-1
//   }
// separate out all the letters in string and return their length - 1