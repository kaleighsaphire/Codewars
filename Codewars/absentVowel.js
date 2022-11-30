/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. 
Also, you won't need to worry about capitals.
P: Given a sentence/string, all lowercase, containing all but 1 vowel
R: The correlating index of the vowel missing from that string
E: "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
PC: create array of vowels, split string into array and loop through, if ! includes vowel array, return index
*/

function absentVowel(x) {
    let vowels = ["a", "e", "i", "o", "u"]
    let xArray = x.split("")
    for (let i = 0; i < vowels.length; i++) {
        if (!xArray.includes(vowels[i])) {
            return i
        }
    }
}
function absentVowel(x) {
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < vowels.length; i++) {
        if (!x.split("").includes(vowels[i])) {
            return i
        }
    }
}