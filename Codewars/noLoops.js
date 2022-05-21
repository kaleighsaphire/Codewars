// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check 
// whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the 
// array contains the value, false if not. With strings you will need to account for case.

// Parameters: given an array, a, and a value, x, x can be num or string
// Return: true or false if a contains x
// Example([1, 9, 'string', 'hello', 0], 'hello') -> true
// Pseudo Code: a.find(x) 

function check(a,x){
    if(a.find(e => e === x) === x){
      return true;
    }else{
      return false;
    }
 };

function check(a,x){
  return a.find(e => e === x) === x ? true : false;
  
 };

//  Alt  
//  function check(a,b){
//     return a.includes(b);
//   };

//   Clearly I overthought this.