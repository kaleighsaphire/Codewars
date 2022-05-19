// Create a function that takes 2 integers in form of a string as an input, 
// and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer 
// limit (2^31 - 1)

// Parameters: takes in 2 sting integers
// Return: sum of 2 intgers as a string
// Examples ('2', '9') returns '11', ('111', '102') returns '213'
// Pseudo Code: return string of sum of a and b

function sumStr(a,b) {
    const c = Number(a) + Number(b);
    return c.toString()
  }

  function sumStr(a,b) {
    return (Number(a) + Number(b)).toString();
   }

// Alt 
// function sumStr(a,b) {
//     return (+a+ +b)+''  
//   }
// function sumStr(a,b) {
//     return String(Number(a)+Number(b));
//   }