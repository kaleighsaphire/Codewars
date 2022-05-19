// You will be given a vector of strings. You must sort it alphabetically 
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Parameters: an array of strings
// Return: first string alphabetically speaking, with "***" between each char
// Example: ['think', 'this', 'is', 'what', 'it', 'wants'] returns 'i***s'
// Pseudo Code: sort array, index 0, split('').join('***')


// Instructions reworded: Given an array of strings, sort the array alphabetically, return the first
// element in array with "***" between each charachter in string

function twoSort(s) {
    return s.sort()[0].split('').join('***')
}