// Create a function called _if which takes 3 arguments: a boolean value bool and 
// 2 functions (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.

// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.
/* Parameters: a boolean, 2 functions
Return: 1st function  if true, second if false
Example: (false, function1(), function2(){run this}) -> run this
Pseudo Code: if x ? do this else do that */
// No testing on this kata.
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
   }

const _if = (bool, func1, func2) => bool ? func1() : func2();