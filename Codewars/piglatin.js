/*
Move the first letter of each word to the end of it, then add "ay" to 
the end of the word. Leave punctuation marks untouched.

P: Given a string of words
R: string translated to piglatin
E: pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
PC: split at spaces, map, if element doesnt == , . ! ?, split, shift index 0 and push index 0 +
 "ay", join, 
 join map with spaces

** single letter words????
*/

function pigIt(str) {
    const arr = str.split(" ").map(e => e != "," && e != "." && e != "!" && e != "?" ? e + e[0] + "ay" : e)
    return arr.map(e => e != "," && e != "." && e != "!" && e != "?" ? e.slice(1) : e).join(" ")
}

function pigIt(str) {
    const arr = str.split(" ").map(e => e != "," && e != "." && e != "!" && e != "?" ? e.slice(1) + e[0] + "ay" : e)
    return arr.join(" ")
}