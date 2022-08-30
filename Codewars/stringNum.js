// In this Kata, you will be given a string that has lowercase letters and 
// numbers. Your task is to compare the number groupings and return the 
// largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest 
// of all number groupings.
/*
Parameters: given a string of numbers and letters
Return: the largest grouping of numbers
Example: ( "hfds45lknf980jfvjdsf1837gkgg" ) -> 1837
Pseudo Code: regex match all numbers in string, return math max */

function solve(s){
    return Math.max(...s.match(/\d+/g))
}
const solve = s => Math.max(...s.match(/\d+/g))
