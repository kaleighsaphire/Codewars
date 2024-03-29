/*
You might know some pretty large perfect squares. But what about 
the NEXT one?

Complete the findNextSquare method that finds the next integral 
perfect square after the one passed as a parameter. Recall that 
an integral perfect square is an integer n such that sqrt(n) is 
also an integer.

If the parameter is itself not a perfect square then -1 should 
be returned. You may assume the parameter is non-negative.

P: Given a num
R: is num is a perfect square, return the next largest perf square, else -1
E: 121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
PC: MAth.sqrt num is integer ? return square root +1 math pow 2,
else neg 1
*/

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return Math.pow(Math.sqrt(sq) + 1, 2)
    } else {
        return -1
    }
}

function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}