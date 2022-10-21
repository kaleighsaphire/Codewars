/*
In this kata you are required to, given a string, replace every 
letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

P: given a string, characters and letters
R: the index of the letters position in the alphabet, as a string, with spaces between
E: alphabetPosition("The sunset sets at twelve o' clock.")
returns "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" 
PC: split into array, filter out spaces/symbols, to uppercase, to ascii num - 64, join with space
*/

function alphabetPosition(text) {
    return text.toUpperCase().split("").map(e => e.charCodeAt(0) - 64).filter(e => e < 27 && e > 0).join(" ")
}