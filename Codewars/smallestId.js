// You've got much data to manage and of course you use zero-based and non-negative 
// ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, 
// but you don't have to find or remove them!

/* Parameters: given an array of positive integers
Return: the lowest possible unused integer
Example: ([0,2,3,4]) -> 1
Pseudo Code: loop through ids length +1 , if ids.indexof i == -1 return */

function nextId(ids){
    for(let i = 0; i < ids.length + 1; i++){
            if(ids.indexOf(i) == -1){
                return i;
            }
    }
}

function nextId(ids){
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
  }