/*
Given an array of integers, calculate the Average of these numbers.

Parameters: given an array of numbers
Return: return the avg of the numbers
Example: ([1,2,3,6]) => 3
Pseudo Code: reduce array divide by array's length
*/

const avg=a=>a.reduce((b,c)=>c+b)/a.length