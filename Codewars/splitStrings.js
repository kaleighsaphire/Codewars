// Complete the solution so that it splits the string into pairs of two 
// characters. If the string contains an odd number of characters then it 
// should replace the missing second character of the final pair with an 
// underscore ('_').
/*
Parameters: given a string of characters
Return: an array with the string split into duos, if odd number pair last with an '_'
Example:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] 
Pseudo Code: if string length is odd add _, create array, loop through string in increments of 2,
array index length equals string substring of index plus 2, return array */

function solution(str){
    str.length % 2 != 0 ? str += '_' : str;
   const pairs = []
   for(let i = 0; i < str.length; i += 2){
    pairs[pairs.length] = str.substr(i,2)
   }
   return pairs
}