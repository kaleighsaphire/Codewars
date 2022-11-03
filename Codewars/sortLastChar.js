/*
Given a string of words (x), you need to return an array of the words,
 sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array 
should show them in the order they appeared in the given string.

All inputs will be valid.
P: given a string of words
R: an array of the words sorted in alphabetical order of last character of each
E: last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 
PC: split into array, sort method, element a array length -1 char code at 0
*/

function last(x) {
    return x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}
