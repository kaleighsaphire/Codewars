/*
A colleague asked if you can help him fix his function. 
It seems it doesn't always parse Integers correctly.
Parameters: Given an array of string numbers
Return: the array with Numbers
Example: (['-1','0','1']) => [-1,0,1]
Pseudo Code: add element parameter to map function
*/
var parseNumbers = function(intStrs) {
    return intStrs.map(e => parseInt(e));
  }