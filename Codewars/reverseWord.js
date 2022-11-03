/*
Complete the function that accepts a string parameter, 
and reverses each word in the string. All spaces in the string 
should be retained.

P: given a string of words
R: the string with the words in the same spot but all the letters 
in each word reversed, with all spaces retained
E: 
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
PC: split, for each split reverse join
*/

function reverseWords(str) {
    let arr = str.split(" ").map(e => e.split("").reverse().join(""))
    return arr.join(" ")
}

function reverseWords(str) {
    return str.split(" ").map(e => e.split("").reverse().join("")).join(" ")
}