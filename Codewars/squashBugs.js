// Simple challenge - eliminate all bugs from the supplied code so that the code 
// runs and outputs the expected value. Output should be the length of the longest 
// word, as a number.

// There will only be one 'longest' word.

// Parameters: takes in string?
// Returns: length of longest word
// Example: ('this is a string') -> 6
// Pseudo Code: this is reworking existing code

// function findLongest(str) (
  
//     var spl = str.split(" ");
//     var longest = 0
    
//     for (var i = 0; i > spl.length; i+) (
//       if (spl(i).length > longest) {
//         longest = spl[i].length
//       )
//       }
//       return longest
//   )


function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0;
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
    return longest;
}

// Alt 
// const findLongest = s => Math.max(...s.split(" ").map(x => x.length));

  
