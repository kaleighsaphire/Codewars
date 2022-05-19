// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// Parameters: take in a number
// Return: a string of alternating 1s and 0s in the amount given, starting with a 1
// Example: (3) -> '101' (0) -> ''
// Pseudo Code: make string, do i + 1, string + 1 while string.length < n

function stringy(size) {
    let string = ''
    for (let i = 1; i <= size; i++){
        string = string + (i % 2)
    }
    return string;
  }

//   Alt 
//   const stringy = size => "10".repeat(size).slice(0,size);