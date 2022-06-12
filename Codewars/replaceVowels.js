// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
/* Parameters: given a string
Return: the string with all the vowels changed to '!'
Example: ("this is a string") -> "th!s !s ! str!ng"
Pseudo Code: string replace aeiou gi, '!'*/

function replace(s){
    return s.replace(/[aeiou]/gi, '!');
}