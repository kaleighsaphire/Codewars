/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more 
than one digit, continue reducing in this way until a single-digit 
number is produced. The input will be a non-negative integer.

P: positive integer
R: single digit sum of split prvious ints
E: 
(16)  -->  1 + 6 = 7
(942)  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
(132189)  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
(493193)  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
PC: while loop, number is greater than 9, stringify, split and reduce
*/

function digitalRoot(n) {
    while (n > 9) {
        n = String(n).split("")
        n = n.reduce((a, b) => Number(a) + Number(b), 0)
    }
    return n
}

function digitalRoot(n) {
    while (n > 9) {
        n = String(n).split("").reduce((a, b) => Number(a) + Number(b))
    }
    return n
}