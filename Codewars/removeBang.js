// Description:
// Remove an exclamation mark from the end of a string. 
// For a beginner kata, you can assume that the input data is always a string, 
// no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {
    if (string.charAt(string.length -1) == '!'){
        return string.substring(0, string.length -1) 
    }else{
        return string;
    }
  }

  function remove (string) {
    return (string.charAt(string.length -1) == '!') ? string.substring(0, string.length -1):string;
    }