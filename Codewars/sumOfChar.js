/* Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it 
would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Parameters: given 2 strings
Return: true if each strings ascii value equals the same amount, else false
Examples:
"AD", "BC"  -> equal -> true
"AD", "DD"  -> not equal => false
"gf", "FG"  -> equal => true
"zz1", ""   -> equal (both are considered empty) => true
"ZzZz", "ffPFF" -> equal => true
"kl", "lz"  -> not equal => false
null, ""    -> equal => true
Pseudo Code: check if string contains non letters and isnt null, split characters, map to ascii values, 
reduce values, return reduced value of string 1 equals string 2? */

function compare(s1, s2) {
    /^[a-zA-Z]+$/.test(s1) && s1 != null ? s1 = s1.toUpperCase() : s1 = '';
    /^[a-zA-Z]+$/.test(s2) && s2 != null ? s2 = s2.toUpperCase(): s2 = '';
    s1 = s1
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce((current, previous) => previous + current, 0)
    s2 = s2
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce((current, previous) => previous + current, 0)
    return s1 == s2 
}

// Alt
function compare(s1, s2) {
    if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
      return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
             s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
    return true;
  }