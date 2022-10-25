/*
In this Kata, you will be given an array of arrays and your task will 
be to return the number of unique arrays that can be formed by picking 
exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 
4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example 
solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
P: given an array of arrays containing 1 or more nums
R: the number of unique arrays that can be made using one num from each array
E: ([[1,2,3],[4,5]]) => 6
PC: map array with new unique sets length, reduce a*b, return
*/

function solve(arr) {
    return arr.map(e => [...new Set(e)].length).reduce((a, b) => a * b)
}

// const solve = a => a.map( v => new Set(v).size ).reduce( (v,w) => v*w , 1 ) ;