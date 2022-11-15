/*
You need to create a function that when provided with a triplet, 
returns the index of the numerical element that lies between the 
other two elements.

The input to the function will be an array of three distinct 
numbers.

P: given threee nums in array
R: return the index of the num numerically in the middle
E: gimme([2, 3, 1]) => 0
gimme([5, 10, 14]) => 1
PC: sort array, value of index one, return index of orig array
*/

function gimme(triplet) {
    let arr = [...triplet].sort((a, b) => a - b)
    let num = arr[1]
    return triplet.indexOf(num)
}

function gimme(triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1])
}