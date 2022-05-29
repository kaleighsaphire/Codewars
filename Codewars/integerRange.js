// Implement a function named generateRange(min, max, step), which takes three arguments 
// and generates a range of integers from min to max, with the step. The first integer is 
// the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

/* Parameters: take in 3 numbers, where the first is the start of the array, the second is the end, 
and the third is the multiple of the first.
Return: The array that make of integers from 1st to sencond, counting by third
Example: (3, 15, 4) --> [3, 7, 11, 15]
Pseudo code: define array, creat loop staring with min, while <=max; += step */

function generateRange(min, max, step){
    let arr = []
        for (let i = min; i <= max; i+= step){
            arr.push(i)
    }
    return arr;
}