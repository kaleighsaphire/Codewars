// Given a string, write a function that returns the string with a question mark ("?") 
// appends to the end, unless the original string ends with a question mark, in which case, 
// returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"
/*
Parameters: given a string
Return: if the string doesnt end with a question mark, add one
Example: "Question" -> "Question?"
Pseudo Code: if the string ends with a question mark return it, else add one and return it
 */

function ensureQuestion(s) {
    return s.endsWith("?") ? s : s+"?";
  }