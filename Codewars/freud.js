// In this kata, the function will take a string as its argument, and return a string with 
// every word replaced by the explanation to everything, according to Freud. 
// Note that an empty string, or no arguments, should return an empty string.
/*
Parameters: given a string
Return: new string with all words replaced by "sex"
Example: ("perfectly normal sentence") -> "sex sex sex"
Pseudo code: if string is not empty, split string to array, replace each element with sex, and join back into string
 */

function toFreud(string) {
    return string ? string.split(' ').map(e => 'sex').join(' '): ''
}