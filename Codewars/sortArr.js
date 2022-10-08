/*
Given two arrays, a1 and a2, sort the elements of a2 based 
on the the index of the word in a1 that begins with the same letter.

Parameters: given 2 arrays of strings, each array contains an equal amount of strings with unique
starting characters
Return: the second array sorted to match the starting characters of the first
Example:
var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Pseudo Code: loop through first array, loop through second, if first array index of i's first character
matches second arrays index of j's first character, push that element to third array, return
*/

function sortArray(a1, a2) {
    const a3 = []
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if (a1[i].charAt(0) == a2[j].charAt(0)) {
                a3.push(a2[j])
            }
        }
    }
    return a3
}