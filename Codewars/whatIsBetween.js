// Complete the function that takes two integers (a, b, where a < b) 
// and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Parameters: 2 nums, first is less than second
// Return: array of nums from first to second
// Example: (3, 9) -> [3, 4, 5, 6, 7, 8, 9]
// Pseudo Code: const array, = [], for i = a, i <= b; i++, push i to array


function between(a, b) {
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }

// Alt
// function between(a, b) {
//     return Array(b - a +1).fill().map((d, i) => i + a)
//   }