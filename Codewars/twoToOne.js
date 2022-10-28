/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing 
distinct letters - each taken only once - coming from s1 or s2.

P: given 2 strings of lowercase letters
R: a new sorted string of only individual chars from strings
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
PC: join strings, split, new set, sort, join, return
*/

function longest(s1, s2) {
    let array = (s1 + s2).split("")
    return [...new Set(array)].sort().join("")
}

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
