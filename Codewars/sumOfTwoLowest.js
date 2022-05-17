// Create a function that returns the sum of the two lowest positive numbers given an 
// array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Parameters: given an array of at least 4 positive integers
// Return: sum of 2 lowest integers from array
// Example: [4,9,2,12] returns 6, [1889, 3834, 90, 112] returns 202
// Pseudo Code: sort array from lowest to highest, return index 0 + index 1

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b)
    return numbers[0] + numbers[1]
  }

  // Alt 
  // const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);