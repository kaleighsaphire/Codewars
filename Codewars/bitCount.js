// Write a function that takes an integer as input, and returns the number of bits 
// that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, 
// so the function should return 5 in this case

// Convert integer to binary.
// return how many 1 bits it contains

// var countBits = function(n) {
//     let output = 0;
//     let str = (n >>> 0).toString(2)
//     if (let i = 0; i < str.length; i++ ){
//       if (str[i] === '1'){
//           output++;
//       }
//     }
//     return output;
// };

// var countBits = function(n) {
//     let output = 0;
//     let str = (n >>> 0).toString(2)
//     if (let i = 0; i < str.length; i++ ){
//       if (str.includes('1')){
//           output++;
//       }else{
//           return 0;
//       }
//     }
//     return output;
// };

// var countBits = function(n) {
//     let output = 0;
//     let str = (n >>> 0).toString(2)
    
//       if (str.includes('1')){
//           output++;
//       }else{
//           return 0;
//       }
    
//     return output;
// };

// var countBits = function(n) {
//     let str = (n >>> 0).toString(2)
//     return Array(str).reduce((a,b) => a + b, 0)
    
// };

// This mess works
var countBits = function(n) {
    let str = (n >>> 0).toString(2)
    let arr = str.split('')
    let numArr = arr.map(x => parseInt(x, 10))
    let num = numArr.reduce((a,b) => a + b, 0)
    return num
    
};
// Cleaner sumbition!
var countBits = function(n) {
    return (n >>> 0).toString(2).split('').map(x => parseInt(x, 10)).reduce((a,b) => a + b, 0)
};
// passed most tests, failed some :(

// Passed!!!
    var countBits = function(n) {
        return n.toString(2).split('').map(x => parseInt(x, 10)).reduce((a,b) => a + b, 0)
    };

// Alt 
// countBits = n => n.toString(2).split('0').join('').length;

// var countBits = function(n) {
//     return n.toString(2).replace(/0/g,'').length;
//   };