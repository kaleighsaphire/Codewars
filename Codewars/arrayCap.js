/* Create a method that accepts an array of names, and returns an 
array of each name with its first letter capitalized.

Params: given an array of strings
Return: Array with ths first letter of each string capitalized, the rest lowercase
Exammple:(['jo', 'nelson', 'jurie']) -> ['Jo', 'Nelson', 'Jurie']
(['KARLY', 'DANIEL', 'KELSEY']) -> ['Karly', 'Daniel', 'Kelsey']
Pseudo Code: map array, each element string character at 0 index to uppercase plus
string slice 1 index to lowercase
*/ 
function capMe(names) {
    return names.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
}