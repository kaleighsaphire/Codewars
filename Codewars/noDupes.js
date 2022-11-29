/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate 
letters from each string in the array.

Strings will be lowercase only, no spaces. See test cases for more examples.

P: Given an array of strings, all lowercase, single words
R: the array of strings, with any consecutive duplicate letters removed
E: dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]
dup(["kelless","keenness"]) = ["keles","kenes"]
PC: map array, split each element, filter, if e != e+1, join elements, 
*/

function dup(s) {
    return s.map(e => e.split("").filter((x, i, arr) => x != arr[i - 1]).join(""))
}