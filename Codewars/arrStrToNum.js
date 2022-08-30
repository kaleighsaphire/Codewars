// Create the function that takes as a parameter a sequence of numbers 
// represented as strings and outputs a sequence of numbers.

function toNumberArray(stringarray){
    return stringarray.map(element => parseFloat(element))
}
function toNumberArray(stringarray){
  return stringarray.map(parseFloat);
}
