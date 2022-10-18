/*
Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. The input 
string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.
P: given a string of letters and nums
R: return the number of characters that appear more than once, low or cap
E: 
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
PC: string to lowercase, hashmap, filter instances > 1. retrun length
*/
function duplicateCount(text) {
    let map = {}
    for (const e of text.toLowerCase()) {
        if (!map[e]) map[e] = 0
        map[e]++
    }
    return Object.keys(map).map(key => map[key]).filter(e => e > 1).length
}