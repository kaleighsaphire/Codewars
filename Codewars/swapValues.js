// I would like to be able to pass an array with two elements to my swapValues function to swap the values. 
// However it appears that the values aren't changing.

// Can you figure out what's wrong here?

/* Parameters: an array with 2 elements
Return: the array with the 2 elements swapped places
Example: ([4,5]) -> [5,4]
Pseudo Code: assign temp element to [0], move [1] to [0],*/

function swapValues() {
    const args = Array.prototype.slice.call(arguments);
    let temp = args[0];
    args[0] = args[1];
    args[1] = temp;

}

function swapValues() {
    var args = Array.prototype.slice.call(arguments)[0];
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}
function swapValues(args) {s
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  }