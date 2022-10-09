/*
You are going to be given a word. Your job will be to make sure 
that each character in that word has the exact same number of occurrences. 
You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. 
Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and 
common symbols. The length will be 0 < length < 100.

Parameters: Given a string on letters, nums or symbols
Return: true or false depending on whether each instance of a character 
appears the same amount of times
Example: ("abcabc") -> true
("abcabcd") -> false
Pseudo Code: Hashmap string, test if values in map are ===
*/
function validateWord(s) {
    let hashmap = {}

    for (const e of s.toLowerCase()) {
        if (!hashmap[e]) {
            hashmap[e] = 0
        }
        hashmap[e]++
    }
    return new Set(Object.values(hashmap)).size === 1;

}