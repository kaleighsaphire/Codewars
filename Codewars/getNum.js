/*
Write a function which removes from string all non-digit characters and parse the remaining to number
P: given a string of nums and letters
R: only nums
E: "hell5o wor6ld" -> 56
*/

function getNumberFromString(s) {
    return +s.replace(/[^0-9]/g, "")
}