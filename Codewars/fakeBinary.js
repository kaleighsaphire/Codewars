// Given a string of digits, you should replace any digit 
// below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

// Note: input will never be an empty string

// if x is < 5, x = 0
// if x is > 5, x = 1

function fakeBin(x){
    let newString = ""
    for (let i = 0; i < x.length; i++)
      
    if (x[i] < 5){
        newString += "0"
    }else {
        newString += "1"
    }
    return newString;
    }

//   Alts 

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }