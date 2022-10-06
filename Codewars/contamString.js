/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Parameters: given two strings
Return: If either is empty return and empty string, else returnthe length of the first string filled by the second
Example: ("stringHere", "2") => "2222222222"
Pseudo code: if either parameterr equals an empty string return empty string,
else return string b padded with string b, string a's length, amount of times
*/

function contamination(text, char){
    if (text == "" || char == ""){
        return ""
    } else {
        return char.padEnd(text.length, char)
    }
  }

  //Alt
  function contamination(text, char){
    return char.repeat(text.length)
  }