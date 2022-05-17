// Is the string uppercase?
// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase 
// letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// Parameter: given a string
// Return: all caps or empty = true, any lower = false
// Examples: '' = true, 'HELLo' = false, 'HELLO' = true
// Pseudo Code: string.includes a-z false else true

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase();
  }

//   Alt 
//   String.prototype.isUpperCase = function () {
//     return !/[a-z]/.test(this);
//   };