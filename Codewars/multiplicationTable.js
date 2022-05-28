// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing 
// newline at the end. If you're unsure about the format, look at the sample tests.

// Parameters: take in a number between 1 - 10
// Return: a multiplication table for that number in a string
// Example: see above
// Pseudo Code: create base table, insert number, return


function multiTable(n) {
    return `1 * ${n} = ${1*n}\n2 * ${n} = ${2*n}\n3 * ${n} = ${3*n}\n4 * ${n} = ${4*n}\n5 * ${n} = ${5*n}\n6 * ${n} = ${6*n}\n7 * ${n} = ${7*n}\n8 * ${n} = ${8*n}\n9 * ${n} = ${9*n}\n10 * ${n} = ${10*n}`;
  }

//   Alt 
//   const multiTable = (number) => {
//     let table = '';
    
//     for(let i = 1; i <= 10; i++) {
//       table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
//     }
  
//     return table;
//   }