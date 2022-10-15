/*
Write a function that accepts an array of 10 integers 
(between 0 and 9), that returns a string of those numbers 
in the form of a phone number.

P: array of 10 nums
R: nums in order in phone num string format
E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
PC: template lit numbers, slice and join each section
*/
function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`
}
const createPhoneNumber = n => `(${n.slice(0, 3).join("")}) ${n.slice(3, 6).join("")}-${n.slice(6).join("")}`


// function createPhoneNumber(numbers){
//     return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
//  }