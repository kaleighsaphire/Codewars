// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Parameters: string of words
// Return: shortest word in string
// Examples: 'this is a string of words' returns 1
// Pseudo Code: split string, filter for shortest string.length

function findShort(s){
    const arr = s.split(' ').sort((a,b) => a.length - b.length)
    return arr[0].length
}

// Alt 
// function findShort(s){
//     var arr = s.split(' ');
//     var smallest = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//       if(arr[i].length < smallest.length){
//         smallest = arr[i];
//       }
//     }
//     return smallest.length;
//   }