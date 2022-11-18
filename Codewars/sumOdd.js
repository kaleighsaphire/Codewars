/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)

P: given a number correlating with row of odd nums
R: the sum of that row of nums
E: 1 -->  1
2 --> 3 + 5 = 8
3 --> 7 + 9 + 11 = 27
4 --> 13 + 15 + 17 + 19 = 64
5 --> 21 + 23 + 25 + 27 + 29 = 125
PC: n = n to the 3rd power
*/

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}