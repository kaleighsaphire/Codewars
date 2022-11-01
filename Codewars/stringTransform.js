/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to 
lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

P: Given a string, containing only letters and spaces
R: reversed word order string with reversed casing
E: "Example Input" ==> "iNPUT eXAMPLE"
PC: map this string, if character === character uppercase, charcter to lowercase, else to uppercase, join
then split reverse join whole thing to reverse words
*/



function stringTransformer(str) {
    return ([...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')).split(" ").reverse().join(" ")
}
