// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])


function findNeedle(haystack) {
    const needle = haystack.indexOf("needle")
    return `found the needle at position ${needle}`
   }

//    Alt 
//    function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
//   }