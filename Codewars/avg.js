/*
Given an array of strings of the same letter type. Return a new array, 
which will differ in that the length of each element is equal to the 
average length of the elements of the previous array.

P: give an array of strings, easch sting is a single letter repeating
R: an array of the strings with each letter repeating the avg amount of times 
out of all the strings
E:['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
PC: join array for length, divide by array.length, math.round
map, each element, charat(0) repeat length avg num of times
*/

function averageLength(input) {
    let length = Math.round(input.join("").length / input.length)
    return input.map(e => e = e.charAt(0).repeat(length))
}