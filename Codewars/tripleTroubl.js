// Triple Trouble
// Create a function that will return a string that combines all of the letters 
// of the three inputed strings in groups. Taking the first letter of all of the 
// inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.

/* Parameters: given three strings of equal length
Return: a new string with the three strings merged into one in alternating between the characters of each
Example: ("string", "nother", "athird") => "snatotrthihinergrd" 
Pseudo Code: loop through each parameter, concatenating each character together starting with the first*/

function tripleTrouble(one, two, three){
    let string = ""
    for (let i = 0; i <= one.length; i++){
        string += one.charAt(i)
        string += two.charAt(i)
        string += three.charAt(i)  
    }
    return string;
}