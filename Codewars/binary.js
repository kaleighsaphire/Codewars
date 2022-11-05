/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

join array, parseint 2
*/
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
};