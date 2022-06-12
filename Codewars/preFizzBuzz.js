// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, 
// you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

/* Parameters: a number, n
Return: array of positive numbers up to n
Example: (5) -> [1,2,3,4,5]
Pseudo Code: x = 1, push x, x++ while x <= n */

function preFizz(n) {
    const array = []
    for (let x = 1; x <= n; x++){
        array.push(x)
    }
    return array;
}