/*
A pangram is a sentence that contains every single letter of the 
alphabet at least once. For example, the sentence "The quick brown 
fox jumps over the lazy dog" is a pangram, because it uses the 
letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True 
if it is, False if not. Ignore numbers and punctuation.

P: given a string
R: True or false depending if the string contains all letters of 
the alphabet, case irrelevent 
E: "The quick brown fox jumps over the lazy dog" -> "True"
"The cat in the hat" -> "False"
PC: string to lowercase, match string to regex of a-z, new set array,
if set length equals 26, true
*/

function isPangram(string) {
    let match = string.toLowerCase().match(/[a-z]/g)
    let arr = [...new Set(match)]
    return arr.length == 26;
}

function isPangram(string) {
    return [...new Set(string.toLowerCase().match(/[a-z]/g))].length == 26;
}
