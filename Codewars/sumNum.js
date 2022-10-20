/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and 
return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

P: Given 2 nums, pos or neg
Return: sum of all the numbers between the 2 given, or if equal, the num
Example: 
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
PC: see if nums are equal, return num, else is a is less than b return a + function a+1,
else a + function a-1
*/
function GetSum(a, b) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    return (max - min + 1) * (min + max) / 2;
}

function GetSum(a, b) {
    if (a == b) {
        return a
    } else if (a < b) {
        return a + GetSum(a + 1, b)
    } else {
        return a + GetSum(a - 1, b)
    }
}