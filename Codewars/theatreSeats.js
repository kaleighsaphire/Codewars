/*
Given the total number of rows and columns in the theater (nRows and nCols, respectively), 
and the row and column you're sitting in, return the number of people who sit strictly behind you 
and in your column or to the left, assuming all seats are occupied.

P: given total columns of seats and rows of seat. given a column and row of your seat
R: the num of seats up an left of you.
E: For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
seatsInTheater(nCols, nRows, col, row) === 96
PC: ncols - col + 1 times nrows - row === total
*/

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row)
}